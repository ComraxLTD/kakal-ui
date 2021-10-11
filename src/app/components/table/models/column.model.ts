import { SelectOption } from './../../form/models/question-select.model';
import { ElementRef } from '@angular/core';
import { FormService, Question } from '../../form/services/form.service';
import { FormBuilder } from '@angular/forms';
import { ControlType } from '../../form/models/question.model';

export declare type SortDir = 'desc' | 'asc';

export enum ColumnType {
  NUMBER = 'number',
  DATE = 'date',
  TEXT = 'text',
  CUSTOM = 'custom',
  ACTIONS = 'actions',
  EXPEND = 'expend',
}

export class ColumnModel {
  public columnDef?: any;
  public label?: string;
  public cell?: (element) => string;
  public type?: ColumnType;
  public control?: ControlType;
  public question?: Question;
  public slotRef?: ElementRef;
  public center?: boolean;
  public selectable?: boolean;
  public sortable?: boolean;
  public sortDir?: SortDir;
  public filterable?: boolean;
  public filterOptions?: SelectOption[];

  private formService : FormService = new FormService(new FormBuilder())


  constructor(options?: {
    columnDef?: string;
    label?: string;
    cell?: (element) => string;
    type?: ColumnType;
    control?: ControlType;
    question?: Question;
    slotRef?: ElementRef;
    selectable?: boolean;
    center?: boolean;
    sortable?: boolean;
    sortDir?: SortDir;
    filterable?: boolean;
    filterOptions?: SelectOption[];
  }) {
    this.columnDef = options?.columnDef || '';
    this.label = options?.label || '';
    this.type = options?.type || ColumnType.TEXT;
    this.cell = (element) => `${element[this.columnDef]}`;
    this.control = options?.control;
    this.question = options?.question;
    this.slotRef = options?.slotRef || null;
    this.center = options?.center || false;
    this.selectable = options?.selectable || false;
    this.sortable = options?.sortable || false;
    this.sortDir = options?.sortDir || 'asc';
    this.filterable = options?.filterable || false;
    this.filterOptions = options?.filterOptions || [];
  }
}
