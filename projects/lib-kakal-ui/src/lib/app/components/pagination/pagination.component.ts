import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'kkl-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() public pagination: PaginationInstance;
  @Input() paginationCount: number;
  @Input() maxSize: number;

  @Output() newPage: EventEmitter<{ next: number; prev: number }> =
    new EventEmitter();

  public labels: any = {
    previousLabel: 'הקודם',
    nextLabel: 'הבא',
  };

  public onPageChange(number) {
    this.newPage.emit({ next: number, prev: this.pagination.currentPage });
    this.pagination.currentPage = number;
  }
}
