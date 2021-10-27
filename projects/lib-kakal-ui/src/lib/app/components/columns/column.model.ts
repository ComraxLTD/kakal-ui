import { SelectOption } from '../form/models/question-select.model';
import { ElementRef } from '@angular/core';
import { Question } from '../form/services/form.service';
import { ControlType } from '../form/models/question.model';

export interface ColumnState {
  expendable?: boolean;
  selectable?: boolean;
  sortable?: boolean;
  filterable?: boolean;
  data : any
}

export declare type ColumnDef<T> = keyof T | 'select' | 'actions' | '' | string;

export declare type SortDir = 'desc' | 'asc';

export declare type ColumnType =
  | 'number'
  | 'date'
  | 'text'
  | 'custom'
  | 'actions'
  | 'select'
  | 'expend';

export class ColumnModel<T> {
  public rowId?: string | number;
  public columnDef?: ColumnDef<T>;
  public label?: string;
  public type?: ColumnType;
  public control?: ControlType;
  public question?: Question;
  public slotRef?: ElementRef;
  public center?: boolean;
  public expendable?: boolean;
  public selectable?: boolean;
  public sortable?: boolean;
  public sortDir?: SortDir;
  public filterable?: boolean;
  public filterOptions?: SelectOption[];
  public footer?: boolean;
  public icon?: string;

  constructor(options?: {
    rowId?: string | number;
    columnDef?: ColumnDef<T>;
    label?: string;
    type?: ColumnType;
    control?: ControlType;
    question?: Question;
    slotRef?: ElementRef;
    expendable?: boolean;
    selectable?: boolean;
    center?: boolean;
    sortable?: boolean;
    sortDir?: SortDir;
    filterable?: boolean;
    filterOptions?: SelectOption[];
    footer?: boolean;
    icon?: string;
  }) {
    this.rowId = options.rowId;
    this.columnDef = options?.columnDef || '';
    this.label = options?.label || '';
    this.type = options?.type || 'text';
    this.control = options?.control;
    this.question = options?.question;
    this.slotRef = options?.slotRef || null;
    this.center = options?.center || false;
    this.expendable = options?.expendable || false;
    this.selectable = options?.selectable || false;
    this.sortable = options?.sortable || false;
    this.sortDir = options?.sortDir || 'asc';
    this.filterable = options?.filterable || false;
    this.filterOptions = options?.filterOptions || [];
    this.footer = options?.footer || false;
    this.icon = options?.icon || '';
  }
}
