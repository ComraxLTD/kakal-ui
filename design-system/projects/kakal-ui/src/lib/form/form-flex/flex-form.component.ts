import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormDataSource } from '../models/form-datasource';
import { FormChangeEvent } from '../models/form.options';
import { OptionMap } from '../models/form.types';
import { GridProps } from '../models/question.types';
import { Question } from '../services/form.service';

@Component({
  selector: 'kkl-form-flex',
  templateUrl: './flex-form.component.html',
  styleUrls: ['./flex-form.component.scss'],
})
export class FormFlexComponent implements OnInit {
  @Input() public questions: Question[];
  @Input() public formGroup: FormGroup;

  @Input() public grid: GridProps;
  @Input() public optionsMap: OptionMap = {};

  @Input() public buttonLabel: string = 'שמור';
  @Input() public buttonTemp: TemplateRef<any>;

  layout: 'row' | 'column' = 'row';
  hasButton: boolean;
  flex: number;
  cols: number;

  // default inputs in row

  @Output() public submitEvent: EventEmitter<FormGroup> = new EventEmitter();

  @Output() public formChangeEvent: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  @Output() public openChanged: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  @Output() public focusChanged: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  constructor(private formDataSource: FormDataSource) {}

  ngOnInit() {
    this.cols = this.grid?.cols || 4;
    this.flex = 100 / (this.grid?.cols || this.cols);
    this.layout = this.grid.layout;
    this.hasButton = !!this.grid?.buttonCols;
  }

  public onSubmit() {
    this.submitEvent.emit(this.formGroup);
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
