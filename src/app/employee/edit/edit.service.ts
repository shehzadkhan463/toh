import { Injectable } from '@angular/core';
import { Observable } from 'rxJs/Rx';
import { Employee } from '../employee.model';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import 'rxjs/add/operator/map';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class EditService {
  private employeesUrl = 'api/employees';
  constructor(private http: HttpClient) { }
  editEmployee(id: number): Observable<Employee> {
      const url = `${this.employeesUrl}/${id}`;
      return this.http.get<Employee>(url);
  }
  updateEmployee(employee: Employee): Observable<any> {
    console.log("SERVICE" + employee);
    return this.http.put(this.employeesUrl, employee, httpOptions);
  }
}
