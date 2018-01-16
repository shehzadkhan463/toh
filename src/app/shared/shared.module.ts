import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PaginationComponent } from './pagination/pagination.component';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  imports: [
    CommonModule, PaginationModule.forRoot()
  ],
  declarations: [PaginationComponent, DummyComponent],
  exports: [CommonModule, PaginationComponent]
})
export class SharedModule { }
