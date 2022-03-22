import { GridProps } from '../models/question.model';
import { QuestionGroupModel } from '../models/question-group.model';
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

@Component({
  selector: 'kkl-form-gird',
  templateUrl: './form-grid.component.html',
  styleUrls: ['./form-grid.component.scss'],
})
export class FormGridComponent implements OnInit {
  @Input() public group: QuestionGroupModel;
  @Input() public formDataSource: FormDataSource;

  @Input() public rowHeight: number;
  @Input() public gutter: number;

  @Input() public slots: {
    button?: TemplateRef<any>;
    group?: ElementRef;
  };

  @Input() optionsSlot: { [key: string]: ElementRef };

  public formGroup: FormGroup;
  public grid: GridProps;
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
    this.formGroup = this.group.formGroup;
    this.grid = this.group.gridProps;
    this.cols = this.group.gridProps?.cols || 1;
    this.hasButton = this.group.hasButton || false;
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
