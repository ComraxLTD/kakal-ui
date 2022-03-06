
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Question } from '../services/form.service';
import {
  ControlType,
  GridProps,
  QuestionBase,
  QuestionType,
} from './question.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FormOption } from './form-options';

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
  public model?: Object;
  public questions?: Question[];
  public type?: QuestionType;
  public formGroup?: FormGroup;
  public hasButton?: boolean;
  public controls?: Object;

  private questionState: BehaviorSubject<Question[]>;
  public questions$?: Observable<Question[]>;

  constructor(options?: {
    key?: string;
    questions?: Question[];
    label?: string;
    icon?: string;
    type?: QuestionType;
    formGroup?: FormGroup;
    gridProps?: GridProps;
    hasButton?: boolean;
    controls?: Object;
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

  public findQuestion(key: string): Question {
    return this.questions.find((question) => question.key === key);
  }

  public findQuestions(key: keyof Question, value: any): Question[] {
    return this.questions.filter((question) => question[key] === value);
  }

  // return groupModel value
  public getControlValueChange(key): Observable<any> {
    const control: AbstractControl = this.formGroup.controls[key];
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

  public updateQuestions(formOption: FormOption): Question[] {
    const { key, options } = formOption;
    const indexToUpdate = this.questions.findIndex(
      (question) => question.key === key
    );
    if (indexToUpdate !== -1 && options.length > 0) {
      this.questions[indexToUpdate]['options'] = options;
    }
    this.questionState.next(this.questions);
    return this.questions;
  }

  public patchValue(item): void {
    this.formGroup.patchValue(item);
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

  public emitQuestions$(questions: Question[]) {
    this.questionState.next(questions);
  }
}
