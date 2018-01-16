import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() offset: number = 0;
  @Input() limit: number = 1;
  @Input() size: number = 1;
  @Input() range: number = 3;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  currentPage: number;
  totalPages: number;
  pages: Observable<number[]>;
  constructor() { }
  ngOnInit() {
    this.getPages(this.offset, this.limit, this.size);
  }
  ngOnChanges() {
    this.getPages(this.offset, this.limit, this.size);
  }
  getPages(offset: number, limit: number, size: number) {
    this.currentPage = this.getCurrentPage(offset, limit);
    this.totalPages = this.getTotalPages(limit, size);
    console.log(this.totalPages);
    this.pages = Observable.range(-this.range, this.range * 2 + 1)
      .map(offsetValue => this.currentPage + offset)
      .filter(page => this.isValidPageNumber(page, this.totalPages))
      .toArray();
  }

  getCurrentPage(offset: number, limit: number): number {
    return Math.floor(offset / limit) + 1;
  }

  getTotalPages(limit: number, size: number): number {
    return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
  }

  selectPage(page: number, event) {
    this.cancelEvent(event);
    if (this.isValidPageNumber(page, this.totalPages)) {
      this.pageChange.emit((page - 1) * this.limit);
    }
  }

  isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

  cancelEvent(event) {
    event.preventDefault();
  }
}
