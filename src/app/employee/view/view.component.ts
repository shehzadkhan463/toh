import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { ViewService } from './view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  employees: Employee[];
  constructor( private viewService: ViewService) { }

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
}
