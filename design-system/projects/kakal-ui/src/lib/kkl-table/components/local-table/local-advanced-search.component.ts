import { Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GridProps } from '../../../mei-form/models/control.types';
import { KklFormChangeEvent } from '../../../mei-form/models/kkl-form-events';
import { OptionsModel } from '../../../mei-form/models/options.model';
import { RowActionEvent, RowActionModel } from '../../models/table-actions.model';
import { TableBase } from '../../models/table.model';
import { LocalTableComponent } from './local-table.component';

@Component({
  selector: 'kkl-local-advanced-search',
  templateUrl: '../all-tabels/mei-advanced-search.component.html',
  styleUrls: ['../all-tabels/mei-advanced-search.component.scss']
})
export class LocalAdvancedSearchComponent implements OnInit {
  @ViewChild(LocalTableComponent) localTable: LocalTableComponent;


  @Output() openedChange: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() queryChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() selectChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() valueChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() focusChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() submitEvent: EventEmitter<FormGroup> = new EventEmitter();

  @Input() grid: GridProps;

  @Input() rowHeight: number;

  @Input() templates: {
    [key: string]: TemplateRef<any>;
  } = {};

  @Input() formGroup!: FormGroup;

  @Input() buttonLabel: string;

  expended: boolean;


  myQuestions!: TableBase[];
  allSearch!: TableBase[];
  @Input() set searchControls(val: TableBase[]) {
    this.myQuestions = val.slice(1);
    this.allSearch = val;
  }

  myOptions: OptionsModel[] = [];
  @Input() set options(val: OptionsModel[]) {
    this.myOptions = val;
  }

  firstData: any;
  @Input() set patchData(data: any) {
    this.firstData = data;
    if(this.formGroup) {
      this.putEditData();
    }
  }


  @Output() actionClicked = new EventEmitter<RowActionEvent>();
  @Output() deleteRow = new EventEmitter<any>();
  @Output() editRow = new EventEmitter<any>();
  @Output() expandRow = new EventEmitter<any>();

  @Input() expandTemplate: TemplateRef<any> | undefined;
  @Input() colsTemplate: any;
  @Input() newRowAction: string;
  @Input() paging: boolean = true;
  @Input() dragable: boolean;
  @Input() columns: TableBase[];
  @Input() dataSource: any[];
  @Input() rowActions: RowActionModel[];


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    if(!this.formGroup) {
      this.formGroup = this.fb.group({});
    }
  }

  ngAfterViewInit() {
    this.putEditData();
  }

  putEditData(){
    this.formGroup.patchValue(this.firstData);
    this.formGroup.updateValueAndValidity();
  }

  onSubmitEvent(event) {
    this.submitEvent.emit(event);
  }

  onEditRow(obj) {
    this.editRow.emit(obj);
  }
  onDeleteRow(obj) {
    this.deleteRow.emit(obj);
  }
  onExpandRow(obj) {
    this.expandRow.emit(obj);
  }
  onActionClicked(obj) {
    this.actionClicked.emit(obj);
  }

  onClick() {
    this.expended = !this.expended;
  }

  onToggleChange(event) {
    this.selectChanged.emit(event);
  }
  onQueryChanged(event) {
    this.queryChanged.emit(event);
  }
  onSelectChanged(event) {
    this.selectChanged.emit(event);
  }
  onOpenedChange(event) {
    this.openedChange.emit(event);
  }
  onValueChanged(event) {
    this.valueChanged.emit(event);
  }
  onFocusChanged(event) {
    this.focusChanged.emit(event);
  }

  onSelectChangedFilter(event) {
    this.localTable.searchFiltersChanged(this.allSearch);
    this.selectChanged.emit(event);
  }
  onValueChangedFilter(event) {
    this.localTable.searchFiltersChanged(this.allSearch);
    this.valueChanged.emit(event);
  }

}
