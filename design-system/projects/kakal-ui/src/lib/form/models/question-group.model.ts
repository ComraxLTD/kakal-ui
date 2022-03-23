import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';
import { Question } from '../services/form.service';
import {
  QuestionBase,
} from './question.model';
import { ControlType, GridProps } from './question.types';
import { Observable, of } from 'rxjs';

export interface GroupOptions {
  label?: string;
  controlType?: ControlType;
  formGroup?: FormGroup;
  gridProps?: GridProps;
  hasButton?: boolean;
  validations?: any;
}

export class QuestionGroupModel<T = any> extends QuestionBase {
  public questions: Question[];
  public formGroup: FormGroup;
  public controls: { [key: string]: Question };
  public hasButton?: boolean;

  constructor(options?: {
    key: string;
    formGroup: FormGroup;
    controls: { [key: string]: Question };
    questions: Question[];
    label?: string;
    icon?: string;
    gridProps?: GridProps;
    hasButton?: boolean;
    validations?: ValidatorFn[];
  }) {
    super(options);
    this.key = options.key || '';
    this.label = options.label || '';
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
  public getControl(key: string): FormControl {
    const control: FormControl = this.formGroup.controls[key] as FormControl;
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
    const control: AbstractControl = this.formGroup.get[key.toString()];
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
