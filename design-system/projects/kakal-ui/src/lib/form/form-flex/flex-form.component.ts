import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormChangeEvent } from '../models/form.options';
import { FormActions, OptionMap } from '../models/form.types';
import { FormGrid } from '../models/question.types';
import { Question } from '../services/form.service';

@Component({
  selector: 'kkl-form-flex',
  templateUrl: './flex-form.component.html',
  styleUrls: ['./flex-form.component.scss'],
})
export class FormFlexComponent implements OnInit {
  @Input() public questions: Question[];
  @Input() public formGroup: FormGroup;
  @Input() public grid: FormGrid = {};
  @Input() public optionsMap: OptionMap = {};
  @Input() public buttonTemp: TemplateRef<any>;

  @Input() formTemplate: { [key: string]: TemplateRef<any> } = {};

  buttonLabel: string;
  layout: 'row' | 'column' = 'row';
  buttonCols: number;
  buttonSkip: number[];
  flex: number;
  cols: number;

  // default inputs in row

  @Output() submitEvent: EventEmitter<FormChangeEvent> = new EventEmitter();

  @Output() formChangeEvent: EventEmitter<FormChangeEvent> = new EventEmitter();

  @Output() openChanged: EventEmitter<FormChangeEvent> = new EventEmitter();

  @Output() focusChanged: EventEmitter<FormChangeEvent> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    console.log(this.formGroup)
    this.cols = this.grid?.cols || 4;
    this.flex = 100 / (this.grid?.cols || this.cols);
    this.layout = this.grid.layout;
    this.buttonCols = this.grid?.button?.cols;
    this.buttonSkip = new Array(this.grid?.button?.skip);
    this.buttonLabel = this.grid?.button?.label || 'שמור';
  }

  onSubmit() {
    this.submitEvent.emit({
      value: this.formGroup,
      action: FormActions.SUBMIT,
    } as FormChangeEvent);
  }

  public onFormChanged(event: FormChangeEvent) {
    this.formChangeEvent.emit(event);
  }

  public onOpenChanged(event: FormChangeEvent) {
    this.openChanged.emit(event);
  }

  public onFocusChanged(event: FormChangeEvent) {
    this.focusChanged.emit(event);
  }
}
