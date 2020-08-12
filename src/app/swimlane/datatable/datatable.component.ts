import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ColumnMode } from "node_modules/@swimlane/ngx-datatable/esm5/public-api";
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  Employees: Employee[];
  temp_emps: Employee[];
  offset : number = 0;
  no_of_rows: number = 11;
  loading: boolean = true;
  ColumnMode = ColumnMode;
  // columns = [{name:'Id'},{name:'Name'},{name:'Gender'},{name:'Age'},{name: 'State'}];

  constructor(private _commonService : CommonService) { }

  ngOnInit(): void {
    this.load_employees_data();
  }

  load_employees_data(){
    this._commonService.get_all_employees_data().subscribe(res => {
      this.Employees = res;
      this.temp_emps = [...this.Employees];
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    })
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp_emps.filter(function (d) {
      return (d.name.toLowerCase().includes(val) || d.gender.toLowerCase().includes(val) || d.address.state.toLowerCase().includes(val) || d.address.city.toLowerCase().includes(val)) || !val;
    });

    // update the rows
    this.Employees = temp;
  }
}
