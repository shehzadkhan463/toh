import { Injectable } from '@angular/core';
import { Employee } from '../employee.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs/Observable';
@Injectable()
export class ViewService {
  private employeesUrl = 'api/employees';
  constructor(private http: HttpClient) { }
  getEmployees(offset: number, limit: number): Observable<Employee[]> {
    console.log("limit: " + limit);
    return this.http.get<Employee[]>(this.employeesUrl);
  }
  deleteEmployee(id: number): Observable<Employee[]> {
    console.log(id);
    const url = this.employeesUrl + '/' + id;
    if ( confirm('Are you sure you want to delete this products?')) {
      console.log(url);
      return this.http.delete<Employee[]>(url);
    }
  }
}
