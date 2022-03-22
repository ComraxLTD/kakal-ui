import { GridProps } from '../models/question.model';
import { QuestionGroupModel } from './../models/question-group.model';
import { FormGroup } from '@angular/forms';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormDataSource } from '../models/form-datasource';
import { FormChangeEvent } from '../models/form.options';
import { Question, OptionMap } from '../models/form.types';

@Component({
  selector: 'kkl-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() public variant: 'flex' | 'grid' = 'grid';

  @Input() public group: QuestionGroupModel;
  @Input() public formDataSource: FormDataSource;

  @Input() public rowHeight: number;
  @Input() public gutter: number;

  @Input() public slots: {
    button?: TemplateRef<any>;
    group?: ElementRef;
  };

  @Input() optionsSlot: { [key: string]: ElementRef };

  @Input() public questions: Question[];
  @Input() public formGroup: FormGroup;

  @Input() public grid: GridProps;
  @Input() public optionsMap: OptionMap = {};

  @Input() public buttonLabel: string = 'שמור';
  @Input() public buttonTemp: TemplateRef<any>;

  public hasButton: boolean = false;
  public cols: string | number;

  @Output() public submitEvent: EventEmitter<FormGroup> = new EventEmitter();

  @Output() public selectChanged: EventEmitter<FormChangeEvent> =
    new EventEmitter();
  @Output() public optionSelected: EventEmitter<MatAutocompleteSelectedEvent> =
    new EventEmitter();

  @Output() public queryChanged: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  @Output() fileChange = new EventEmitter<File[]>();

  @Output() focusoutEvent: EventEmitter<string> = new EventEmitter();
  @Output() focus: EventEmitter<FormChangeEvent> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    console.log(this.variant)
  }

  public onSubmit() {
    this.submitEvent.emit(this.formGroup);
  }

  public onSelectChanged(option: FormChangeEvent) {
    this.selectChanged.emit(option);
  }

  public onQueryChanged(FormChangeEvent: FormChangeEvent): void {
    this.queryChanged.emit(FormChangeEvent);
  }

  public onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.optionSelected.emit(event);
  }

  public onFileChange(files: File[]) {
    this.fileChange.emit(files);
  }

  public onFocusOut(key: string) {
    this.focusoutEvent.emit(key);
  }

  public onFocus(FormChangeEvent: FormChangeEvent) {
    this.focus.emit(FormChangeEvent);
  }
}
