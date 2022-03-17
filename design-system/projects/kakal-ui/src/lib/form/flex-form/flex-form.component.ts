import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionGroupModel } from './../models/question-group.model';
import { FormGroup } from '@angular/forms';
import { FormDataSource } from '../models/form-datasource';
import { FormChangeEvent } from '../models/form.options';
import { Question } from '../services/form.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'kkl-flex-form',
  templateUrl: './flex-form.component.html',
  styleUrls: ['./flex-form.component.scss'],
  providers: [FormDataSource],
})
export class FlexFormComponent implements OnInit {
  @Input() public questions: Question[];
  @Input() public formGroup: FormGroup;

  // default inputs in row
  @Input() inRow: number = 3;

  // default inputs in row
  @Input() hasButton: boolean

  public flex: number;

  @Output() public submitEvent: EventEmitter<FormGroup> = new EventEmitter();

  @Output() public selectChanged: EventEmitter<FormChangeEvent> =
    new EventEmitter();
  @Output() public optionSelected: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  @Output() public queryChanged: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  @Output() fileChange = new EventEmitter<File[]>();

  @Output() focusout: EventEmitter<string> = new EventEmitter();
  @Output() focus: EventEmitter<FormChangeEvent> = new EventEmitter();

  constructor(private formDataSource: FormDataSource) {}

  ngOnInit() {
    this.flex = 100 / this.inRow;
  }

  public onSubmit() {
    this.submitEvent.emit(this.formGroup);
  }

  public onSelect(option: FormChangeEvent) {
    this.selectChanged.emit(option);
  }

  public onAutocomplete(event: FormChangeEvent): void {
    this.queryChanged.emit(event);
  }

  public onOptionSelected(event: FormChangeEvent) : void {
    this.optionSelected.emit(event);
  }

  public onFileChange(files: File[]) {
    this.fileChange.emit(files);
  }

  public onFocusOut(key: string) {
    this.focusout.emit(key);
  }

  public onFocus(event: FormChangeEvent) {
    this.focus.emit(event);
  }
}
