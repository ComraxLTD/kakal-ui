import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { SelectOption } from '../../form/models/question-select.model';
import { ColumnModel } from '../column.model';

export interface FilterOption<T> {
  column: ColumnModel<T>;
  option: SelectOption;
}

@Component({
  selector: 'kkl-column-filter',
  templateUrl: './column-filter.component.html',
  styleUrls: ['./column-filter.component.scss'],
})
export class ColumnFilterComponent<T> implements OnInit {
  @Input() column: ColumnModel<T>;
  @Input() label: string;
  @Input() options: SelectOption[];
  @Input() filterSlots: TemplateRef<any>;
  @Output() optionSelect: EventEmitter<FilterOption<T>> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.label = this.column.label;
  }

  public onOptionSelect(option: SelectOption): void {
    this.optionSelect.emit({ column: this.column, option });
  }
}
