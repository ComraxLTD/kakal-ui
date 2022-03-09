import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeaderCellModel } from '../../models/header-cell.model';
import { KKLSelectOption } from '../../../../../form/models/form.types';
import { TableDataSource } from '../../../../models/table-datasource';
import { ColumnState } from '../../../../models/table.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'kkl-filter-select-cell',
  templateUrl: './filter-select-cell.component.html',
  styleUrls: ['./filter-select-cell.component.scss'],
})
export class FilterSelectCellComponent implements OnInit {
  @Input() column: HeaderCellModel;

  public control: FormControl = new FormControl();

  public columnState$: Observable<ColumnState>;

  @Output() selectChange: EventEmitter<any> = new EventEmitter();

  constructor(private tableDataSource: TableDataSource) {}

  ngOnInit(): void {
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
