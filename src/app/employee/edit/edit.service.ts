import { Injectable } from '@angular/core';
import { Observable } from 'rxJs/Rx';
import { Employee } from '../employee.model';
import { HttpClient,  } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EditService {
  private employeesUrl = 'api/employees';
  employee: Employee;
  constructor(private http: HttpClient) { }
  editEmployee(id: number): Observable<Employee> {
      const url = `${this.employeesUrl}/${id}`;
      return this.http.put(url, id)
          .map(() => this.employee)
          .do(data => console.log('updateProduct: ' + JSON.stringify(data)))
          .catch(this.handleError);
  }
  getId() {}
  private handleError(error: Response): Observable<any> {
    return;
  }
}
