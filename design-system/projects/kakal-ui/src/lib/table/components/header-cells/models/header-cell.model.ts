import { SortDirection } from '@angular/material/sort';
export declare type ColumnDef<T> = keyof T | 'select' | 'actions' | string;

export declare type ColumnType =
  | 'default'
  | 'custom'
  | 'actions'
  | 'select'
  | 'expend';

export declare type FilterType =
  | 'search'
  | 'select'
  | 'multiSelect'
  | 'dateRange'
  | 'numberRange';

export class HeaderCellModel<T = any> {
  public columnDef: ColumnDef<T>;
  public label?: string;
  public format?: string;
  public type?: ColumnType;
  public selector?: string;

  public flex?: number;
  public center?: boolean;
  public footer?: boolean;

  public expendable?: boolean;

  public selectable?: boolean;
  public disableSelect?: boolean;

  public sortDir?: SortDirection;

  public filterType?: FilterType;

  constructor(options?: {
    columnDef: ColumnDef<T>;
    label?: string;
    type?: ColumnType;
    format?: string;
    selector?: string;

    center?: boolean;
    flex?: number;
    footer?: boolean;

    expendable?: boolean;
    selectable?: boolean;
    disableSelect?: boolean;

    sortDir?: SortDirection;

    filterType?: FilterType;
  }) {
    this.columnDef = options.columnDef;
    this.label = options?.label || '';
    this.type = options?.type || 'default';
    this.format = options?.format;
    this.selector = options?.selector || null;

    this.flex = this.columnDef === 'select' ? 0.5 : options.flex || 1;
    this.footer = options?.footer || false;
    this.center = options?.center || false;

    this.selectable = options?.selectable || false;
    this.disableSelect = options?.disableSelect || false;

    this.expendable = options?.expendable || false;

    this.sortDir = options?.sortDir || '';

    this.filterType = options?.filterType || null;
  }
}
