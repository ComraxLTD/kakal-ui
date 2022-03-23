import { GridProps } from '../models/question.model';
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

@Component({
  selector: 'kkl-form-grid',
  templateUrl: './form-grid.component.html',
  styleUrls: ['./form-grid.component.scss'],
})
export class FormGridComponent implements OnInit {

  @Input() public questions: Question[];
  @Input() public formGroup: FormGroup;
  @Input() public grid: GridProps = { cols: 4 };
  @Input() public optionsMap: OptionMap = {};
  @Input() public hasButton: boolean = false;

  @Input() public buttonTemp: TemplateRef<any>;

  @Input() public rowHeight: number;
  @Input() public gutter: number;

  @Input() public templates: {
    [key: string]: TemplateRef<any>;
  } = {};

  @Input() optionsSlot: { [key: string]: ElementRef };

  public cols: string | number;

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
    this.hasButton = this.hasButton || false;
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
