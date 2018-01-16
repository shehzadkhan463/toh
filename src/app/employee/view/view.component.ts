import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee.model';
import { ViewService } from './view.service';
import { DeleteService } from '../delete.service';

@Component({
  templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit {
  employees: Employee[];
  size: number = 0;
  offset: number = 0;
  limit: number = 6;
  maxSize: number = 5;
  bigTotalItems: number = 175;
  bigCurrentPage: number = 1;
  numPages: number = 0;
  constructor( private viewService: ViewService, private deleteService: DeleteService) { }

  ngOnInit() {
    this.getEmployees(this.offset, this.limit);
  }
  getEmployees(offset: number, limit: number): void {
    this.viewService.getEmployees(offset, limit)
      .subscribe( employees => {
        this.employees = employees;
        this.size = limit;
      },
      error => console.log('Error')
    );
  }
  deleteEmployee(id: number): void {
    this.deleteService.deleteEmployee(id);
    console.log(id);
  }
  onPageChange(offset) {
    this.offset = offset;
  }
}
