import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { ViewService } from './view.service';
import { DeleteService } from '../delete.service';

@Component({
  templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit {
  employees: Employee[];
  constructor( private viewService: ViewService, private deleteService: DeleteService) { }

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees(): void {
    this.viewService.getEmployees()
      .subscribe( employees => {
        this.employees = employees;
      },
      error => console.log('Error')
    );
  }
  deleteEmployee(id: number): void {
    this.deleteService.deleteEmployee(id);
    console.log(id);
  }
}
