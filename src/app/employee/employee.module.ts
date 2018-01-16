import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryCrudDataService } from './in-memory-crud-data-service';
import { EmployeeRoutingModule } from './employee-routing.module';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { AddService } from './add/add.service';
import { EditService } from './edit/edit.service';
import { ViewService } from './view/view.service';
import { DeleteService } from './delete.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryCrudDataService, { dataEncapsulation: false }),
  ],
  declarations: [ViewComponent, AddComponent, EditComponent],
  providers: [AddService, EditService, ViewService, DeleteService]
})
export class EmployeeModule { }
