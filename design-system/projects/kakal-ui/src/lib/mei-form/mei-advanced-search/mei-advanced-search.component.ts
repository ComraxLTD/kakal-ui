import { Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ControlBase } from '../models/control.model';
import { GridProps } from '../models/control.types';
import { KklFormChangeEvent } from '../models/kkl-form-events';
import { OptionsModel } from '../models/options.model';

@Component({
  selector: 'kkl-advanced-search',
  templateUrl: './mei-advanced-search.component.html',
  styleUrls: ['./mei-advanced-search.component.scss']
})
export class MeiAdvancedSearchComponent implements OnInit {

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


  @Input() tableFilters!: ControlBase[];

  myQuestions!: ControlBase[];
  firstQuestions!: ControlBase;
  @Input() set controls(val: ControlBase[]) {
    this.firstQuestions = val.shift();
    this.myQuestions = val;
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

}
