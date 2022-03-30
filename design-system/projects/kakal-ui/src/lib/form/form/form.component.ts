import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormChangeEvent } from '../models/form.options';
import { Question, OptionMap } from '../models/form.types';
import { FormGrid } from '../models/question.types';
import { FormService } from '../services/form.service';

@Component({
  selector: 'kkl-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() formGroup: FormGroup;

  @Input() rowHeight: number;
  @Input() optionsSlot: { [key: string]: ElementRef };

  @Input() buttonLabel: string = 'שמור';
  @Input() buttonTemp: TemplateRef<any>;

  private _questions: Question[];

  // handle form questions
  @Input()
  get questions() {
    return this._questions;
  }

  set questions(value: Question[]) {
    this._questions = value;
  }

  // handle grid ui
  private _grid: FormGrid;

  @Input()
  get grid() {
    return this._grid;
  }

  set grid(value: FormGrid) {
    this._grid = value;
  }

  // handle optionMap of form
  private _optionsMap: OptionMap = {};

  @Input()
  get optionsMap(): OptionMap {
    return this._optionsMap;
  }

  set optionsMap(value: OptionMap) {
    this._optionsMap = { ...value };
  }

  variant: 'flex' | 'grid';

  @Output() public submitEvent: EventEmitter<FormGroup> = new EventEmitter();

  @Output() public formChanged: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.variant = this._grid.variant || 'grid';
    // this.formGroup = this.formGroup || this.setFormGroup(this._questions);
  }

  private setFormGroup(questions) {
    const group = this.formService.createQuestionGroup({ questions });
    return group.formGroup;
  }

  public onSubmitEvent() {
    this.submitEvent.emit(this.formGroup);
  }

  public onFormChanged(event: FormChangeEvent) {
    this.formChanged.emit(event);
  }
}
