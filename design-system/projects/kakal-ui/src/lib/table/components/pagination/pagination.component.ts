import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectOption } from '../../../form/form-select/question-select.model';
import { FormChangeEvent } from '../../../form/models/form.options';
import { PageState } from '../../models/table.state';
import PaginationChangeEvent from './pagination.types';

@Component({
  selector: 'kkl-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() public pagination: PageState;

  @Input() paginationCount: number;
  @Input() maxSize: number;

  public labels: any = {
    previousLabel: 'הקודם',
    nextLabel: 'הבא',
  };

  public control: FormControl;
  public options: SelectOption[];

  @Output() pageChange: EventEmitter<PaginationChangeEvent> =
    new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    const options = this.setPageOptions();
    this.control = new FormControl({ ...options[0] });
    this.options = [...options];
  }

  private setPageOptions() {
    return [...this.pagination.pages].map((page: number) => {
      return { id: page, value: page, label: page.toString() } as SelectOption;
    });
  }

  public onPageChange(number: number) {
    this.pageChange.emit({
      next: number + 1,
      currentPage: number,
    });
  }

  public onOptionSelected(event: FormChangeEvent) {
    const { value } = event;

    this.pageChange.emit({
      next: this.pagination.currentPage,
      currentPage: this.pagination.currentPage,
      itemsPerPage: value.value,
    });
  }
}
