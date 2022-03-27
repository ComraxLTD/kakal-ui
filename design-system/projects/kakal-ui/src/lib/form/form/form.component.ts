import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { QuestionGroupModel } from './../models/question-group.model';
import { FormGroup } from '@angular/forms';
import { FormDataSource } from '../models/form-datasource';
import { FormChangeEvent } from '../models/form.options';
import { Question, OptionMap } from '../models/form.types';
import { GridProps } from '../models/question.types';

@Component({
  selector: 'kkl-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() public variant: 'flex' | 'grid' = 'grid';

  @Input() public group: QuestionGroupModel;
  @Input() public formDataSource: FormDataSource;
  @Input() public questions: Question[];
  @Input() public formGroup: FormGroup;
  @Input() public grid: GridProps;
  @Input() public optionsMap: OptionMap = {};

  @Input() public rowHeight: number;
  @Input() public gutter: number;

  @Input() optionsSlot: { [key: string]: ElementRef };

  @Input() public buttonLabel: string = 'שמור';
  @Input() public buttonTemp: TemplateRef<any>;

  public hasButton: boolean = false;
  public cols: string | number;

  @Output() public submitEvent: EventEmitter<FormGroup> = new EventEmitter();

  @Output() public formChanged: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  ngOnInit() {}

  public onSubmitEvent() {
    this.submitEvent.emit(this.formGroup);
  }

  public onFormChanged(event: FormChangeEvent) {
    this.formChanged.emit(event);
  }
}
