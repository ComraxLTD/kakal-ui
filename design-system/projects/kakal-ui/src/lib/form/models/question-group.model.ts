import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Question } from '../services/form.service';
import {
  ControlType,
  GridProps,
  QuestionBase,
  QuestionType,
} from './question.model';
import { Observable, of } from 'rxjs';

export interface GroupOptions {
  label?: string;
  type?: QuestionType;
  controlType?: ControlType;
  formGroup?: FormGroup;
  gridProps?: GridProps;
  hasButton?: boolean;
  validations?: any;
}

export class QuestionGroupModel<T = any> extends QuestionBase {
  public questions?: Question[];
  public type?: QuestionType;
  public formGroup?: FormGroup;
  public hasButton?: boolean;
  public controls?: { [key: string]: Question };

  constructor(options?: {
    key: string;
    questions?: Question[];
    label?: string;
    icon?: string;
    type?: QuestionType;
    formGroup?: FormGroup;
    gridProps?: GridProps;
    hasButton?: boolean;
    controls?: { [key: string]: Question };
    validations?: ValidatorFn[];
  }) {
    super(options);
    this.key = options.key || '';
    this.label = options.label || '';
    this.type = options.type || 'default';
    this.controlType = 'group';
    this.icon = '';
    this.questions = options.questions || [];
    this.formGroup = options.formGroup;
    this.gridProps = options.gridProps || { cols: 1 };
    this.hasButton = options.hasButton || false;
    this.controls = options.controls || null;
    this.validations = options.validations || [];
  }

  // method to get question control
  public getControl(key: string): AbstractControl {
    const control: AbstractControl = this.formGroup.controls[key];
    if (control) {
      return control;
    }
    return undefined;
  }

  public getQuestion(key: keyof T): Question {
    return this.questions.find((question) => question.key === key);
  }

  public getQuestionsBy(options: {
    key: keyof Question;
    value: any;
  }): Question[] {
    const { key, value } = options;
    return this.questions.filter((question) => question[key] === value);
  }

  // return groupModel value
  public getControlValueChange(key: keyof T): Observable<any> {
    const control: AbstractControl = this.formGroup.controls[key.toString()];
    if (control) {
      return control.valueChanges;
    }
    return undefined;
  }

  // return groupModel value
  public getValue(): T {
    return this.formGroup.value;
  }

  public getValue$(): Observable<T> {
    return of(this.formGroup.value);
  }

  // return groupModel controls
  public getControls(): {
    [key: string]: AbstractControl;
  } {
    return this.formGroup.controls;
  }

  public clear(
    options: { key?: string; emitEvent?: boolean } = {
      key: '',
      emitEvent: true,
    }
  ): void {
    const { key, emitEvent } = options;
    if (key) {
      this.formGroup.controls[key].reset({ emitEvent });
    } else {
      this.formGroup.reset({ emitEvent });
    }
  }
}
