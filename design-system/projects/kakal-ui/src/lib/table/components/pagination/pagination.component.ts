import { PaginationInstance } from 'ngx-pagination';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import IPaginationChangeEvent from './pagination.types';

@Component({
  selector: 'kkl-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() public pagination: PaginationInstance;

  @Input() paginationCount: number;
  @Input() maxSize: number;

  @Output() newPage: EventEmitter<IPaginationChangeEvent> = new EventEmitter();

  public labels: any = {
    previousLabel: 'הקודם',
    nextLabel: 'הבא',
  };

  constructor() {}

  ngOnInit(): void {
  }

  public onPageChange(number: number) {
    this.newPage.emit({ next: number, prev: this.pagination.currentPage });
    this.pagination.currentPage = number;
  }
}
