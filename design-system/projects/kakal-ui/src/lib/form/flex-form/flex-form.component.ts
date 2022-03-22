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
import { GridProps } from '../models/question.model';
import { Question } from '../services/form.service';

@Component({
  selector: 'kkl-flex-form',
  templateUrl: './flex-form.component.html',
  styleUrls: ['./flex-form.component.scss'],
  providers: [FormDataSource],
})
export class FlexFormComponent implements OnInit {
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
    console.log(this.optionsMap)
    this.flex = 100 / (this.grid?.cols || 3);
    this.hasButton = !!this.grid?.buttonCols;
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

  public onOptionSelected(event: FormChangeEvent): void {
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
