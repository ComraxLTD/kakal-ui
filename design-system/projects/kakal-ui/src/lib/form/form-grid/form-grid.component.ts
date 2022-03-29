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
import { FormDataSource } from '../models/form-datasource';
import { FormChangeEvent } from '../models/form.options';
import { Question, OptionMap } from '../models/form.types';
import { FormGrid } from '../models/question.types';

@Component({
  selector: 'kkl-form-grid',
  templateUrl: './form-grid.component.html',
  styleUrls: ['./form-grid.component.scss'],
})
export class FormGridComponent implements OnInit {
  @Input() public questions!: Question[];
  @Input() public formGroup!: FormGroup;
  @Input() public grid: FormGrid = {};
  @Input() public optionsMap: OptionMap = {};

  @Input() public buttonTemp: TemplateRef<any>;

  @Input() public rowHeight: number;

  @Input() public templates: {
    [key: string]: TemplateRef<any>;
  } = {};

  @Input() optionsSlot: { [key: string]: ElementRef };

  gutter: number;
  hasButton: boolean;
  cols: string | number;

  @Output() public submitEvent: EventEmitter<FormGroup> = new EventEmitter();

  @Output() public openChanged: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  @Output() public focusChanged: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  @Output() public formChangeEvent: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  constructor(private formDataSource: FormDataSource) {}

  ngOnInit() {
    this.cols = this.grid?.cols || 1;
    this.hasButton = !!this.grid?.button?.cols || false;
    this.gutter = this.grid.gutter || 1;
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
