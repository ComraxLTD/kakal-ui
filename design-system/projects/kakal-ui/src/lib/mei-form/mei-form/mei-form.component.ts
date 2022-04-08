import { Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionBase } from '../models/question.model';
import { OptionsModel } from '../models/options.model'
import { BehaviorSubject } from 'rxjs';
import { MeiSelectOption } from '../models/select.model';
import { FormChangeEvent } from '../models/form-events';
import { GridProps } from '../models/question.types';
@Component({
  selector: 'mei-form',
  templateUrl: './mei-form.component.html',
  styleUrls: ['./mei-form.component.scss']
})
export class MeiFormComponent implements OnInit {

  @Output() openChanged: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() queryChanged: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() selectChanged: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() valueChanged: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() focusChanged: EventEmitter<FormChangeEvent> = new EventEmitter();
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


  myQuestions!: QuestionBase[];
  @Input() set questions(val: QuestionBase[]) {
    console.log(this.formGroup);

    if(this.formGroup && this.myQuestions) {
      const newVals: QuestionBase[] = [];
      const sameVals: QuestionBase[] = [];
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



  localObservables: Map<string, BehaviorSubject<MeiSelectOption[]>> = new Map<string, BehaviorSubject<MeiSelectOption[]>>();

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

  setControls(controles: QuestionBase[]) {
    console.log('jhjh');

    controles.forEach(a => {
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
        //   // if(a.multi) {
        //   //   row.addControl(a.key, this.fb.array(a.value));
        //   //   if(typeof a.options === 'string') {
        //   //     const subj = new BehaviorSubject(null);
        //   //     this.localObservables.set(a.options, subj);
        //   //     a.options = subj;
        //   //   }
        //   // } else {
        //   //   row.addControl(a.key, this.fb.control(a.value));
        //   // }
        //   // if(a.disabled) {
        //   //   row.get(a.key).disable();
        //   // }
        //   break;
        // case 'radio':
        // case 'upload':
        // case 'toggle':
        // case 'texteditor':
        //   return element;
        case 'select':
        case 'autocomplete':
          this.formGroup.addControl(a.key, this.fb.control(a.value));
          if(typeof a.options === 'string') {
            const subj = new BehaviorSubject(null);
            this.localObservables.set(a.options, subj);
            a.options = subj;
          }
          break;
        // case 'autocomplete':
        //   if(Array.isArray(element)) {
        //     return element.map((a: any) => a.label);
        //   }
        //   return element.label;
        case 'dateRange':
          this.formGroup.addControl(a.key, this.fb.group({start: this.fb.control(a.value?.start), end: this.fb.control(a.value?.end)}));
          break;
        // case 'currency':
          // return new CurrencyPipe().transform(element['sum'], element['currency'], 'symbol', '1.0-3');
        default:
          this.formGroup.addControl(a.key, this.fb.control(a.value));
          break;
            // return element;
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
    this.submitEvent.emit(this.formGroup);
  }


  onQueryChanged(event) {
    this.queryChanged.emit(event);
  }
  onSelectChanged(event) {
    this.selectChanged.emit(event);
  }
  onOpenChanged(event) {
    this.openChanged.emit(event);
  }
  onValueChanged(event) {
    this.valueChanged.emit(event);
  }
  onFocusChanged(event) {
    this.focusChanged.emit(event);
  }
}
