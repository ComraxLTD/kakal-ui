import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeaderCellModel } from '../../models/header-cell.model';
import { KKLSelectOption } from '../../../../../form/models/form.types';

@Component({
  selector: 'kkl-filter-select-cell',
  templateUrl: './filter-select-cell.component.html',
  styleUrls: ['./filter-select-cell.component.scss'],
})
export class FilterSelectCellComponent implements OnInit {
  @Input() column: HeaderCellModel;

  public control: FormControl = new FormControl();

  @Output() selectChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.column);
  }

  public onMultiSelectChange(
    selectedOptions: KKLSelectOption[],
    selected: any[]
  ) {
    // this.tableFilterService.pushMany({
    //   selectedOptions,
    //   selected,
    //   item: { key: this.column.columnDef },
    // });
  }

  public onSelectionChange(event) {
    // this.tableFilterService.pushMany({
    //   selectedOptions,
    //   selected,
    //   item: { key: this.column.columnDef },
    // });
  }
}
