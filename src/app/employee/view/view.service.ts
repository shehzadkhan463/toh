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
}
