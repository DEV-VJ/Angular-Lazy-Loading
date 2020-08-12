import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CommonService } from "../../services/common.service";
import { Table } from 'primeng/table';
import { LazyLoadEvent } from 'primeng/api';
import { Employee } from "../../models/employee";
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html',
  styleUrls: ['./datatables.component.css']
})
export class DatatablesComponent implements OnInit {

  Employees: Employee[];
  datasource : Employee[];
  no_of_rows: number = 10;
  first: number = 0;
  totalRecords: number;
  loading: boolean = true;
  display_headers = ['id','name','gender','age','state','city'];
  headers = ['name','gender','age','state','city'];
  _selectedColumns: any[];
  final_headers: any[];
  exportColumns: any[];
  @ViewChild('dt') table: Table;
  
  constructor(private _commonService : CommonService) { }

  ngOnInit(): void {
    this.load_employees_data();
    this.final_headers = this.headers.map((ele) => {
      let obj = {};
      obj['field'] = ele;
      obj['header'] = ele.toUpperCase();
      if(ele !== 'id') return obj;
    });
    this._selectedColumns = this.final_headers;
    this.exportColumns = this.final_headers.map(col => ({title: col.header, dataKey: col.field}));
  }

  load_employees_data(){
    this._commonService.get_all_employees_data().subscribe(res => {
      this.Employees = res;
      // this.datasource = res;
      // this.totalRecords = Object.keys(res).length;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },(error) => console.log(error));
  }

  //For lazy loading
  loadEmployees(event: LazyLoadEvent) {  
    this.loading = true;
    // console.log(event);
    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    setTimeout(() => {
        if (this.datasource) {
            this.Employees = this.datasource.slice(event.first, (event.first + event.rows));
            this.loading = false;
        }
    }, 1000);
  }

  //For toggle columns
  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
      //restore original order
      this._selectedColumns = this.final_headers.filter(col => val.includes(col));
  }

  exportPdf() {
    import("jspdf").then(jsPDF => {
      import("jspdf-autotable").then(x => {
          const doc = new jsPDF.default(0,0);
          doc.autoTable(this.exportColumns, this.Employees);
          doc.save('Employees.pdf');
      })
    })
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.Employees);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "Employees");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
  }
}
