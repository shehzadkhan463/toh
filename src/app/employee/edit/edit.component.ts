import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
//--//
import { EditService } from "./edit.service";
import { Employee } from "../employee.model";
import { DeleteService } from '../delete.service';

@Component({
  templateUrl: "./edit.component.html"
})
export class EditComponent implements OnInit {
  employee: Employee;
  employeeForm: FormGroup;
  id: number;
  constructor(
    private editService: EditService,
    private route: ActivatedRoute,
    private eForm: FormBuilder,
    private location: Location,
    private router: Router,
    private deleteService: DeleteService
  ) {
    this.employee = new Employee();
    this.id = +this.route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.editEmployee(this.id);
    this.employeeForm = this.eForm.group({
      id: 0,
      firstName: [
        '',
        [Validators.required, Validators.minLength(3)]],
      lastName: [
        '',
        [Validators.required, Validators.maxLength(8)]
      ],
      email: [
        '',
        [Validators.required, Validators.minLength(4)]
      ],
      phoneNumber: { value: '', disabled: true },
      notification: 'email',
      isActive: true
    });
  }
  editEmployee(id: number) {
    this.editService
      .editEmployee(id)
      .subscribe(employee => this.getEmployeeDetails(employee));
  }
  getEmployeeDetails(employee: Employee) {
    this.employee = employee;
    this.employeeForm.patchValue({
      id: this.employee.id,
      firstName: this.employee.firstName,
      lastName: this.employee.lastName,
      email: this.employee.email,
      phoneNumber: this.employee.phoneNumber,
      notification: this.employee.notification,
      isActive: this.employee.isActive
    });
  }
  updateEmployee(): void {
    console.log('BEFORE ' + this.employee);
    let emp = Object.assign({}, this.employeeForm.value);
    this.editService.updateEmployee(emp)
      .subscribe(() => {
        this.employeeForm.reset();
        this.router.navigate(['/employee/view']);
      });
    console.log('After RETURN  ' + this.employee);
  }
  deleteEmployee(): void {
    this.deleteService.deleteEmployee(this.employee.id);
    console.log(this.employee.id);
  }
  setNotification(notifyVia: string): void {
    const phoneControl = this.employeeForm.get('phoneNumber');
    if ( notifyVia === 'phone' ) {
      phoneControl.setValidators(Validators.required);
      phoneControl.enable();
    } else {
      phoneControl.clearValidators();
      phoneControl.disable();
    }
    phoneControl.updateValueAndValidity();
  }
}
