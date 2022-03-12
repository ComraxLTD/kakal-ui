import { PaginationInstance } from 'ngx-pagination';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import PaginationChangeEvent from './pagination.types';
import { FormControl } from '@angular/forms';
import { SelectOption } from '../../../form/models/question-select.model';
import { FormChangeEvent } from '../../../form/models/form.options';
import { KKLSelectOption } from '../../../form/models/form.types';

@Component({
  selector: 'kkl-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() public pagination: PaginationInstance;

  @Input() paginationCount: number;
  @Input() maxSize: number;

  public labels: any = {
    previousLabel: 'הקודם',
    nextLabel: 'הבא',
  };

  public control: FormControl = new FormControl({
    id: 10,
    value: 10,
    label: '10',
  });
  public options: SelectOption[] = [
    { id: 10, value: 10, label: '10' },
    { id: 20, value: 20, label: '20' },
    { id: 30, value: 30, label: '30' },
  ];

  @Output() pageChange: EventEmitter<PaginationChangeEvent> =
    new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public onPageChange(number: number) {
    this.pageChange.emit({
      next: number,
      currentPage: this.pagination.currentPage
    });
  }

  public onOptionSelected(formChangeEvent: FormChangeEvent) {
    const { value } = formChangeEvent ;

    this.pageChange.emit({
      next: this.pagination.currentPage,
      currentPage: this.pagination.currentPage,
      itemsPerPage: value.value,
    });
  }
}
