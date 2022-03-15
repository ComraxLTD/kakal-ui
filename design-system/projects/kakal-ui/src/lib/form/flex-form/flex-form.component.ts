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
} from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormDataSource } from '../models/form-datasource';
import { FormChangeEvent } from '../models/form.options';

@Component({
  selector: 'kkl-flex-form',
  templateUrl: './flex-form.component.html',
  styleUrls: ['./flex-form.component.scss'],
})
export class FlexFormComponent implements OnInit {
  @Input() public group: QuestionGroupModel;
  @Input() public formDataSource: FormDataSource;

  @Input() public rowHeight: number;
  @Input() public gutter: number;

  @Input() public slots: {
    button?: ElementRef;
    group?: ElementRef;
  };

  @Input() optionsSlot: { [key: string]: ElementRef };

  public formGroup: FormGroup;
  public grid: GridProps;
  public hasButton: boolean = false;
  public cols: string | number;

  @Output() public submitEvent: EventEmitter<FormGroup> = new EventEmitter();

  @Output() public changeSelect: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() public changeOption: EventEmitter<MatAutocompleteSelectedEvent> =
    new EventEmitter();

  @Output() public autocompleteEvent: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  @Output() fileChange = new EventEmitter<File[]>();

  @Output() focusoutEvent: EventEmitter<string> = new EventEmitter();
  @Output() focus: EventEmitter<FormChangeEvent> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.formGroup = this.group.formGroup;
    this.grid = this.group.gridProps;
    this.cols = this.group.gridProps?.cols || 1;
    this.hasButton = this.group.hasButton || false;
  }

  public onSubmit() {
    this.submitEvent.emit(this.formGroup);
  }

  public onSelect(option: FormChangeEvent) {
    this.changeSelect.emit(option);
  }

  public onAutocomplete(FormChangeEvent: FormChangeEvent): void {
    this.autocompleteEvent.emit(FormChangeEvent);
  }

  public onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.changeOption.emit(event);
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
