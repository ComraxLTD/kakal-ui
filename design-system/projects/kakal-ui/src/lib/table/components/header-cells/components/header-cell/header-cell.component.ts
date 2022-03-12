import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FilterOption, KKLFormOption } from 'projects/kakal-ui/src/public-api';
import { TableDataSource } from '../../../../models/table-datasource';
import { HeaderCellModel } from '../../models/header-cell.model';
import { FilterRange } from '../../models/header.types';

@Component({
  selector: 'kkl-header-cell',
  templateUrl: './header-cell.component.html',
  styleUrls: ['./header-cell.component.scss'],
})
export class HeaderCellComponent implements OnInit, AfterViewInit {
  @ViewChild('filterHeader', { read: TemplateRef })
  filterHeaderTemplate: TemplateRef<any>;

  @ViewChild('rangeFilter', { read: TemplateRef })
  rangeFilterTemplate: TemplateRef<any>;

  @Input('itemKey') key: string;
  @Input() column: HeaderCellModel;
  @Input() label: string;
  @Input() columnDef: string;
  @Input() headerTemplate: { [key: string]: TemplateRef<any> } = {};
  @Input() filterTemplate: { [key: string]: TemplateRef<any> } = {};

  public control: FormControl = new FormControl();

  // emit whenever menu of select or multiSelect is open
  @Output() fetchOptions: EventEmitter<string> = new EventEmitter();

  // emit whenever input of select or multiSelect is type
  @Output() queryOptionsChanged: EventEmitter<KKLFormOption> = new EventEmitter();

  constructor(private tableDataSource: TableDataSource) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const filterTemplateMap = {
      numberRange: this.rangeFilterTemplate,
      dateRange: this.rangeFilterTemplate,
    };

    if (this.column.filterType) {
      this.headerTemplate = {
        [this.column.columnDef]: this.filterHeaderTemplate,
      };
    }

    this.filterTemplate = {
      [this.column.columnDef]: filterTemplateMap[this.column.filterType],
    };
  }

  private setFilterState(value: any) {
    const filterOption: FilterOption = {
      key: this.columnDef.toString(),
      value,
      filterType: this.column.filterType,
      format: this.column.format,
    };

    return { [this.key]: filterOption };
  }

  // DOE EVENTS

  public onMenuOpen() {
    this.fetchOptions.emit(this.columnDef);
  }

  public onValueChanged(FormChnageEvent: KKLFormOption) {
    const { value } = FormChnageEvent;

    if (
      this.column.filterType === 'select' ||
      this.column.filterType === 'multiSelect'
    ) {
      // filter options
      this.queryOptionsChanged.emit(FormChnageEvent);
    } else {
      const filterState = this.setFilterState(value);
      this.tableDataSource.dispatchFilter({ filterState });
    }
  }

  public onRangeChange(event: FilterRange) {
    const filterState = this.setFilterState(event);
    this.tableDataSource.dispatchFilter({ filterState });
  }
}
