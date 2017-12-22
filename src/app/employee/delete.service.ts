import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DeleteService {
  employee: Employee;
  private employeesUrl = 'api/employees';
  constructor(private http: HttpClient) { }
  deleteEmployee(id: number): Observable<Employee[]> {
    const url = `${this.employeesUrl}/${id}`;
    if ( confirm('Are you sure you want to delete this products?')) {
      console.log(url);
      return this.http.delete<Employee[]>(url);
    }
  }
}
