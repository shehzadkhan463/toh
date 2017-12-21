import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EditService } from './edit.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  employee: Employee;
  employeeForm: FormGroup;
  constructor( private editService: EditService ) { }

  ngOnInit() {
  }
  editEmployee(id: number) {
    this.editService.editEmployee(id)
      .subscribe( (employee: Employee)  => this.getEmployeeDetails(id));
  }
  getEmployeeDetails(id: number): void {
    this.employeeForm.patchValue({
      firstName: this.employee.firstName,
      lastName: this.employee.lastName,
      email: this.employee.email,
      phoneNumber: this.employee.phoneNumber,
      notification: this.employee.notification,
      isActive: this.employee.isActive
    });
  }
  getId() {
    this.editService.getId(this.employee.id)
      .subscribe( id => {
        this.id
      });
  }
}
