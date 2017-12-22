import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AddService } from './add.service';
import { Employee } from '../employee.model';
import { Router } from '@angular/router';
@Component({
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {
  employee: Employee;
  public employeeForm: FormGroup;
  constructor(private eForm: FormBuilder, private addService: AddService, private router: Router) {
    this.employee = new Employee();
   }

  ngOnInit() {
    this.employeeForm = this.eForm.group({
      firstName: ['', [ Validators.required, Validators.minLength(3)]],
      lastName: ['', [ Validators.required, Validators.maxLength(8)]],
      email: ['', [ Validators.required, Validators.minLength(4), ]],
      phoneNumber: { value: 0, disabled: true},
      notification: 'email',
      isActive: true
    });
  }
  addEmployee(): void {
    let emp = Object.assign({}, this.employeeForm.value);
    this.addService.addEmployee(emp)
      .subscribe( () => {
        this.employeeForm.reset();
        this.router.navigate(['/employee/view']);
      });

  }
  // createEmployee(): void {
  //   this.addService.createEmployee('id')
  // }
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
