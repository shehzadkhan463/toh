import { Injectable } from '@angular/core';
import { Observable } from 'rxJs/Observable';
import { Employee } from '../employee.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class AddService {
  private employeesUrl = 'api/employees';
  constructor(private http: HttpClient) { }
  addEmployee(employee: Employee): Observable<any> {
    return this.http.post(this.employeesUrl, employee, httpOptions);
  }
}
