import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { SortDirection } from '@angular/material/sort';
import { MatListOption } from '@angular/material/list';

import {
  KKLSelectOption,
  FormChangeEvent,
} from '../../../../../form/models/form.types';
import { TableDataSource } from '../../../../models/table-datasource';
import { HeaderState, SortState } from '../../../../models/table.state';
import { ColumnActions } from '../../../../models/table-actions';

import {
  FilterType,
  FilterChangeEvent,
  FilterRange,
} from '../../models/header.types';
import { map, Observable, filter, of, merge, tap, pluck, pairwise } from 'rxjs';

import {
  setFilterOptionState,
  setRangeState,
  setSelectState,
} from './filter-header.helpers';
import { TableSelector } from '../../../../models/table.selectors';

@Component({
  selector: 'kkl-filter-header-cell',
  templateUrl: './filter-header-cell.component.html',
  styleUrls: ['./filter-header-cell.component.scss'],
})
export class FilterHeaderCellComponent implements OnInit {
  @Input() public filterType: FilterType;
  @Input() public columnDef: string;
  @Input() public format: string;
  @Input() public label: string;
  @Input() public sortBy: SortDirection;

  @Input() public filterTemplate: TemplateRef<any>;

  public options$: Observable<KKLSelectOption[]>;
  public value$: Observable<FilterRange>;
  public active$: Observable<boolean> = of(true);

  @Output() menuOpened: EventEmitter<void> = new EventEmitter();
  @Output() filterChanged: EventEmitter<FilterChangeEvent> = new EventEmitter();

  constructor(private tableDataSource: TableDataSource) {}

  ngOnInit(): void {
    if (
      this.filterType === FilterType.SELECTED ||
      this.filterType === FilterType.MULTI_SELECTED
    ) {
      this.options$ = this.initOptionsWithState();
    }

    if (
      this.filterType === FilterType.DATE_RANGE ||
      this.filterType === FilterType.NUMBER_RANGE
    ) {
      this.value$ = this.setRange$();
    }

    this.active$ = this.setActiveFilter();
  }

  private setActiveFilter() {
    return this.tableDataSource.select(TableSelector.FILTERS).pipe(
      pluck(this.columnDef),
      map((key) => key !== undefined)
    );
  }

  private setFilterState(value: any) {
    const FilterChangeEvent: FilterChangeEvent = {
      key: this.columnDef.toString(),
      value,
      filterType: this.filterType,
      format: this.format,
    };

    return { [this.columnDef]: FilterChangeEvent };
  }

  private initOptions$() {
    return this.tableDataSource.listenHeaderState(this.columnDef).pipe(
      filter(
        (headerState: HeaderState) =>
          headerState.action === ColumnActions.INIT_OPTIONS
      ),
      map((headerState: HeaderState) => headerState.options),
      filter((options) => options !== undefined)
    );
  }

  private initOptionsWithState() {
    const initOptions$ = this.initOptions$();
    const selectedOptions$ = setSelectState(
      this.tableDataSource,
      this.columnDef
    );
    const tableStateOptions$ = setFilterOptionState(
      initOptions$,
      selectedOptions$
    );

    return merge(initOptions$, tableStateOptions$);
  }

  private setRange$<T>(): Observable<FilterRange<T>> {
    const initRange$: Observable<FilterRange> = of({ start: null, end: null });
    const tableStateRange$ = setRangeState<T>(
      this.tableDataSource,
      this.columnDef,
      this.filterType
    );

    return merge(initRange$, tableStateRange$);
  }

  // DOE EVENTS

  public onMenuOpen() {
    if (this.filterType === 'select' || this.filterType === 'multiSelect') {
      this.menuOpened.emit();
    }
  }

  public onSortChange(event: SortDirection) {
    const sortState = {
      sortBy: event,
      sorting: this.columnDef,
    } as SortState;

    this.tableDataSource.dispatchSort({ sortState });
  }

  public onSelectionChange(optionsList: MatListOption[]) {
    const options: KKLSelectOption[] = optionsList.map(
      (option: MatListOption) => {
        return option.value;
      }
    );

    const filterState = this.setFilterState(options);
    this.tableDataSource.dispatchFilter({ filterState });
  }

  public compareWith(o1: KKLSelectOption, o2: KKLSelectOption) {
    return o1?.label === o2?.label && o1.value === o2.value;
  }
}
