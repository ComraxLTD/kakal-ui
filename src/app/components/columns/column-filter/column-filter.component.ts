import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectOption } from '../../form/models/question-select.model';
import { ColumnModel } from '../../table/models/column.model';

@Component({
  selector: 'app-column-filter',
  templateUrl: './column-filter.component.html',
})
export class ColumnFilterComponent implements OnInit {
  @Input() column: ColumnModel;
  @Input() label: string;
  @Input() options: SelectOption[];

  @Output() optionSelect : EventEmitter<any> = new EventEmitter()

  constructor() {}

  ngOnInit(): void {
    this.label = this.column.label;
  }

  public onOptionSelect(value) {
    this.optionSelect.emit(value)
  }
}
