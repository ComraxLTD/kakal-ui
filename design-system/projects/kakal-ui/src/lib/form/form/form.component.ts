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
  @Input() group: QuestionGroupModel;
  @Input() formDataSource: FormDataSource;
  @Input() questions: Question[];
  @Input() formGroup: FormGroup;
  @Input() grid: GridProps = { cols: 4 };
  @Input() optionsMap: OptionMap = {};

  @Input() rowHeight: number;

  @Input() optionsSlot: { [key: string]: ElementRef };

  @Input() buttonLabel: string = 'שמור';
  @Input() buttonTemp: TemplateRef<any>;

  variant: 'flex' | 'grid' = 'grid';

  @Output() public submitEvent: EventEmitter<FormGroup> = new EventEmitter();

  @Output() public formChanged: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  ngOnInit() {
    this.variant = this.grid.variant;
  }

  public onSubmitEvent() {
    this.submitEvent.emit(this.formGroup);
  }

  public onFormChanged(event: FormChangeEvent) {
    this.formChanged.emit(event);
  }
}
