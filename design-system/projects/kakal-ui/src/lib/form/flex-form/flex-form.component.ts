import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Range } from '../form-range/question-range.model';
import { FormDataSource } from '../models/form-datasource';
import { FormChangeEvent } from '../models/form.options';
import { OptionMap } from '../models/form.types';
import { GridProps } from '../models/question.model';
import { Question } from '../services/form.service';

@Component({
  selector: 'kkl-form-flex',
  templateUrl: './flex-form.component.html',
  styleUrls: ['./flex-form.component.scss'],
  providers: [FormDataSource],
})
export class FormFlexComponent implements OnInit {
  @Input() public variant: 'row' | 'column' = 'row';

  @Input() public questions: Question[];
  @Input() public formGroup: FormGroup;

  @Input() public grid: GridProps;
  @Input() public optionsMap: OptionMap = {};

  @Input() public buttonLabel: string = 'שמור';
  @Input() public buttonTemp: TemplateRef<any>;

  public hasButton: boolean;
  public flex: number;

  // default inputs in row

  @Output() public submitEvent: EventEmitter<FormGroup> = new EventEmitter();

  @Output() public valueChanged: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  @Output() public selectChanged: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  @Output() public openChanged: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  @Output() public optionSelected: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  @Output() multiOptionsSelected: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  @Output() public queryChanged: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  @Output() public fileChanged = new EventEmitter<FormChangeEvent>();

  @Output() readonly dateRangeChanged: EventEmitter<
    FormChangeEvent<Range<Date>>
  > = new EventEmitter();

  @Output() public focusout: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() public focus: EventEmitter<FormChangeEvent> = new EventEmitter();

  constructor(private formDataSource: FormDataSource) {}

  ngOnInit() {
    this.flex = 100 / (this.grid?.cols || 4);
    this.hasButton = !!this.grid?.buttonCols;
  }

  public onSubmit() {
    this.submitEvent.emit(this.formGroup);
  }

  public onValueChanged(event: FormChangeEvent) {
    this.valueChanged.emit(event);
  }

  public onSelectChanged(event: FormChangeEvent) {
    this.selectChanged.emit(event);
  }

  public onOpenChanged(event: FormChangeEvent) {
    this.openChanged.emit(event);
  }
  public onQueryChanged(event: FormChangeEvent): void {
    this.queryChanged.emit(event);
  }

  public onOptionSelected(event: FormChangeEvent): void {
    this.optionSelected.emit(event);
  }

  public onMultiOptionSelected(event: FormChangeEvent) {
    this.optionSelected.emit(event);
  }

  public onFileChanged(event: FormChangeEvent) {
    this.fileChanged.emit(event);
  }

  public onDateRangedChanged(event: FormChangeEvent) {
    this.dateRangeChanged.emit(event);
  }

  public onFocusOut(event: FormChangeEvent) {
    this.focusout.emit(event);
  }

  public onFocus(event: FormChangeEvent) {
    this.focus.emit(event);
  }
}
