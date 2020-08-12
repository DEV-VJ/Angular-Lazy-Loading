import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http : HttpClient) { }
  
  //This will return 100k employees
  get_all_employees_data():Observable<Employee[]>{
    return this.http.get<Employee[]>('assets/json_data/100k.json');
  }
}
