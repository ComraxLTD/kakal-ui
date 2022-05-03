import { Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GridProps } from '../../../mei-form/models/control.types';
import { KklFormChangeEvent } from '../../../mei-form/models/kkl-form-events';
import { OptionsModel } from '../../../mei-form/models/options.model';
import { RowActionEvent, RowActionModel, RowExpandEvent } from '../../models/table-actions.model';
import { TableBase } from '../../models/table.model';
import { EventTableComponent } from './event-table.component';
import { TableServerModel } from '../../models/table-server.model';

@Component({
  selector: 'kkl-server-advanced-search',
  templateUrl: '../all-tabels/mei-advanced-search.component.html',
  styleUrls: ['../all-tabels/mei-advanced-search.component.scss']
})
export class EventAdvancedSearchComponent implements OnInit {
  @ViewChild(EventTableComponent) eventTable: EventTableComponent;

  @Input() noMobile: boolean = false;
  typeLocal: boolean = false;
  @Output() openedChange: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() queryChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
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
    if(val?.length) {
      this.myQuestions = val.slice(1);
      this.allSearch = val;
    } else {
      this.myQuestions = null;
      this.allSearch = null;
    }
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
  @Output() saveRow = new EventEmitter<any>();
  @Output() expandRow = new EventEmitter<RowExpandEvent>();
  @Output() requestChanged: EventEmitter<any> = new EventEmitter<any>();

  @Input() expandTemplate: TemplateRef<any> | undefined;
  @Input() colsTemplate: any;
  @Input() newRowAction: string;
  @Input() paging: boolean = true;
  @Input() pageSize: number = 10;
  @Input() draggable: boolean;
  @Input() columns: TableBase[];
  @Input() dataSourceUrl: string;
  @Input() dataSourceServer: TableServerModel;
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

  onSaveRow(obj) {
    this.saveRow.emit(obj);
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
  onSearchChanged(obj: any) {
    this.requestChanged.emit(obj)
  }

  onClick() {
    this.expended = !this.expended;
  }

  onToggleChange(event) {
    this.eventTable.requsetChange(null);
  }
  onQueryChanged(event) {
    this.queryChanged.emit(event);
  }
  onSelectChanged(event) {
    this.eventTable.requsetChange(null);
  }
  onOpenedChange(event) {
    this.openedChange.emit(event);
  }
  onValueChanged(event) {
    this.eventTable.requsetChange(null);
  }
  onFocusChanged(event) {
    this.focusChanged.emit(event);
  }

  onSelectChangedFilter(event) {
    this.eventTable.requsetChange(null);
  }
  onValueChangedFilter(event) {
    this.eventTable.requsetChange(null);
  }

}
