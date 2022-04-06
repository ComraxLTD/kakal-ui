import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionBase } from '../models/question.model';
import { OptionsModel } from '../models/options.model'
import { BehaviorSubject } from 'rxjs';
import { MeiSelectOption } from '../models/select.model';
import { FormChangeEvent } from '../models/form-events';
@Component({
  selector: 'mei-form',
  templateUrl: './mei-form.component.html',
  styleUrls: ['./mei-form.component.scss']
})
export class MeiFormComponent implements OnInit {


  @Output() openChanged: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() queryChanged: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() selectChanged: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() submitEvent: EventEmitter<FormGroup> = new EventEmitter();

  myQuestions!: QuestionBase[];
  @Input() set questions(val: QuestionBase[]) {
    this.myQuestions = val;
    this.setForm();
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


  formGroup!: FormGroup;

  localObservables: Map<string, BehaviorSubject<MeiSelectOption[]>> = new Map<string, BehaviorSubject<MeiSelectOption[]>>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.putOptions();
    this.putEditData();
  }


  setForm() {
    const row = this.fb.group({});
    this.myQuestions.forEach(a => {
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
        case 'checkbox':
          // if(a.multi) {
          //   row.addControl(a.key, this.fb.array(a.value));
          //   if(typeof a.options === 'string') {
          //     const subj = new BehaviorSubject(null);
          //     this.localObservables.set(a.options, subj);
          //     a.options = subj;
          //   }
          // } else {
          //   row.addControl(a.key, this.fb.control(a.value));
          // }
          // if(a.disabled) {
          //   row.get(a.key).disable();
          // }
          break;
        // case 'radio':
        // case 'upload':
        // case 'toggle':
        // case 'texteditor':
        //   return element;
        case 'select':
        case 'autocomplete':
          row.addControl(a.key, this.fb.control(a.value));
          if(typeof a.options === 'string') {
            const subj = new BehaviorSubject(null);
            this.localObservables.set(a.options, subj);
            a.options = subj;
          }
          if(a.disabled) {
            row.get(a.key).disable();
          }
          break;
        // case 'autocomplete':
        //   if(Array.isArray(element)) {
        //     return element.map((a: any) => a.label);
        //   }
        //   return element.label;
        // case 'date':
        //   return new DatePipe('he-HE').transform(element);
        // case 'dateRange':
        //   return new DatePipe('he-HE').transform(element.start) +' - '+ new DatePipe('he-HE').transform(element.end);
        // case 'currency':
          // return new CurrencyPipe().transform(element['sum'], element['currency'], 'symbol', '1.0-3');
        default:
            // return element;
      }
    });
    this.formGroup = row;
  }

  putOptions() {
    this.myOptions.forEach(b => {
      (this.localObservables.get(b.key)).next(b.val);
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

}