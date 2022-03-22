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

  @Output() public valueChanged: EventEmitter<FormChangeEvent> = new EventEmitter();

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

  @Output() public focusout: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() public focus: EventEmitter<FormChangeEvent> = new EventEmitter();

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

  public onValueChanged(event: FormChangeEvent) {
    this.valueChanged.emit(event);
  }

  public onSelectChanged(event: FormChangeEvent) {
    this.selectChanged.emit(event);
  }

  public onQueryChanged(event: FormChangeEvent): void {
    this.queryChanged.emit(event);
  }

  public onOpenChange(event: FormChangeEvent) {
    this.openChanged.emit(event);
  }

  public onOptionSelected(event: FormChangeEvent): void {
    this.optionSelected.emit(event);
  }

  public onMultiOptionSelected(event: FormChangeEvent) {
    this.optionSelected.emit(event);
  }

  public onFileChange(event: FormChangeEvent) {
    this.fileChanged.emit(event);
  }

  public onFocusOut(event: FormChangeEvent) {
    this.focusout.emit(event);
  }

  public onFocus(event: FormChangeEvent) {
    this.focus.emit(event);
  }
}
