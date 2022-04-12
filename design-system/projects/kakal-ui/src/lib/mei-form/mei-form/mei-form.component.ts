import { Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ControlBase } from '../models/control.model';
import { OptionsModel } from '../models/options.model'
import { BehaviorSubject } from 'rxjs';
import { KklSelectOption } from '../models/kkl-select.model';
import { KklFormActions, KklFormChangeEvent } from '../models/kkl-form-events';
import { GridProps } from '../models/control.types';
@Component({
  selector: 'kkl-form',
  templateUrl: './mei-form.component.html',
  styleUrls: ['./mei-form.component.scss']
})
export class MeiFormComponent implements OnInit {

  @Output() openedChange: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() queryChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() selectChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() valueChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() focusChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() submitEvent: EventEmitter<FormGroup> = new EventEmitter();

  @Input() grid: GridProps;
  variant: 'flex' | 'grid' = 'grid';

  @Input() buttonTemp: TemplateRef<any>;

  @Input() rowHeight: number;

  @Input() templates: {
    [key: string]: TemplateRef<any>;
  } = {};

  @Input() formGroup!: FormGroup;

  @Input() optionsSlot: { [key: string]: ElementRef };
  @Input() buttonLabel: string = 'שמור';

  gutter: number;
  hasButton: boolean;
  cols: string | number;
  layout: 'row' | 'column' = 'row';
  flex: number;


  myQuestions!: ControlBase[];
  @Input() set controls(val: ControlBase[]) {
    if(this.formGroup && this.myQuestions) {
      const newVals: ControlBase[] = [];
      const sameVals: ControlBase[] = [];
      val.forEach(a => {
        if(this.myQuestions.find( vendor => Object.assign(vendor) === Object.assign(a) )) {
          sameVals.push(this.myQuestions.find( vendor => Object.assign(vendor) === Object.assign(a) ));
        } else {
          newVals.push(a);
        }
      });
      const removed = this.myQuestions.filter(b => !sameVals.includes(b));
      removed.forEach(c => this.formGroup.removeControl(c.key));
      this.myQuestions = val;
      this.setControls(newVals);
    } else {
      this.myQuestions = val;
    }

  }

  myOptions: OptionsModel[] = [];
  @Input() set options(val: OptionsModel[]) {
    if(val) {
      this.myOptions = val;
      if(this.formGroup) {
        this.putOptions();
      }
    }
  }

  firstData: any;
  @Input() set editData(data: any) {
    this.firstData = data;
    if(this.formGroup) {
      this.putEditData();
    }
  }



  localObservables: Map<string, BehaviorSubject<KklSelectOption[]>> = new Map<string, BehaviorSubject<KklSelectOption[]>>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.variant = this.grid?.variant || this.variant;
    this.cols = this.grid?.cols || 1;
    this.hasButton = !!this.grid?.buttonCols || false;
    this.gutter = this.grid?.gutter || 1;
    this.flex = 100 / (this.grid?.cols || this.cols);
    this.layout = this.grid?.layout;
    if(!this.formGroup) {
      this.formGroup = this.fb.group({});
    }
    this.setControls(this.myQuestions);
  }

  ngAfterViewInit() {
    this.putOptions();
    this.putEditData();
  }

  setControls(controles: ControlBase[]) {
    controles.forEach(a => {
      if(!this.formGroup.contains(a.key)) {
        switch (a.controlType) {
          // case 'text':
          // case 'password':
          // case 'number':
          // case 'textarea':
          // case 'currency':
          // case 'sum':
          // case 'email':
          // case 'phone':
          // case 'cleave':
          // case 'time':
          // case 'range':
          // case 'checkbox':
          //   this.formGroup.addControl(a.key, this.fb.group({}));
          //   if(typeof a.options === 'string') {
          //     const subj = new BehaviorSubject(null);
          //     this.localObservables.set(a.options, subj);
          //     a.options = subj;
          //   }
          //   break;
          case 'checkbox':
          case 'radio':
          case 'select':
          case 'autocomplete':
            this.formGroup.addControl(a.key, this.fb.control(null));
            if(typeof a.options === 'string') {
              const subj = new BehaviorSubject(null);
              this.localObservables.set(a.options, subj);
              a.options = subj;
            }
            break;
          case 'dateRange':
            this.formGroup.addControl(a.key, this.fb.group({start: this.fb.control(a.value?.start), end: this.fb.control(a.value?.end)}));
            break;
          case 'currency':
            this.formGroup.addControl(a.key, this.fb.group({sum: this.fb.control(a.value?.sum), currency: this.fb.control(null)}));
            if(typeof a.options === 'string') {
              const subj = new BehaviorSubject(null);
              this.localObservables.set(a.options, subj);
              a.options = subj;
            }
            break;
          default:
            this.formGroup.addControl(a.key, this.fb.control(a.value));
            break;
              // return element;
        }
      }
      if(a.disabled) {
        this.formGroup.get(a.key).disable();
      }
    });
  }

  putOptions() {
    this.myOptions.forEach(b => {
      (this.localObservables.get(b.key))?.next(b.val);
    });
  }

  putEditData(){
    this.formGroup.patchValue(this.firstData);
    // this.formGroup.updateValueAndValidity();
  }

  onSubmitEvent() {
    if (this.formGroup.valid) {
      this.submitEvent.emit(this.formGroup.value);
    } else {
      // confirm(`please fill in all required fields`);
      alert('please fill in all required fields '+this.formGroup.errors);
    }
    this.formGroup.markAllAsTouched();
  }


  onToggleChange(event, control: ControlBase) {
    if(control.selectChanged) {
      control.selectChanged(event.checked);
    }
    this.selectChanged.emit({
      key: control.key,
      value: event.checked,
      action: KklFormActions.TOGGLE_CHANGED
    });
  }
  onQueryChanged(event, control: ControlBase) {
    if(control.queryChanged) {
      control.queryChanged({value: event.value, query: event.query});
    }
    this.queryChanged.emit(event);
  }
  onSelectChanged(event, control: ControlBase) {
    if(control.selectChanged) {
      control.selectChanged(event.value);
    }
    this.selectChanged.emit(event);
  }
  onOpenedChange(event, control: ControlBase) {
    if(control.openedChange) {
      control.openedChange({value: event.value, opened: event.action === KklFormActions.OPENED_SELECT});
    }
    this.openedChange.emit(event);
  }
  onValueChanged(event, control: ControlBase) {
    if(control.valueChanged) {
      control.valueChanged(event.value);
    }
    this.valueChanged.emit(event);
  }
  onFocusChanged(event, control: ControlBase) {
    if(control.focusChanged) {
      control.focusChanged(event.value);
    }
    this.focusChanged.emit(event);
  }

}
