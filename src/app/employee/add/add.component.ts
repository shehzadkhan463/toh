import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AddService } from './add.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public employeeForm: FormGroup;
  constructor(private eForm: FormBuilder, private addService: AddService) { }

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
