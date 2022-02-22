import { MessageService } from './../services/message.service';
import { FormControl, FormControlStatus } from '@angular/forms';
import { QuestionBase } from '../services/form.service';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  QuestionSelectModel,
  SelectOption,
} from './../models/question-select.model';
import { Appearance, ControlType, GridProps } from '../models/question.model';
import { Palette } from '../../../styles/theme';
import { QuestionAutocompleteModel } from '../models/question-autocomplete';
import { FormOption } from '../models/form-data-source.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  map,
  startWith,
} from 'rxjs/operators';

@Component({
  selector: 'kkl-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit {
  @Input() public question: QuestionBase;
  @Input() public control: FormControl;
  @Input() public appearance: Appearance;
  @Input() public index: number;

  public controlType: ControlType;
  public label: string;
  public icon: string;

  public error$: BehaviorSubject<string>;
  public color$: Observable<Palette>;

  public gridProps: GridProps;
  public iconType: string = 'svg';
  public iconRotate: number = 0;

  @Output() focus: EventEmitter<FormOption> = new EventEmitter();

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.error$ = new BehaviorSubject<string>('');
    this.color$ = this.setColor$();

    if (this.question) {
      this.appearance = this.question?.appearance;
      this.controlType = this.question?.controlType;
      this.gridProps = this.question?.gridProps;
      this.label = this.question?.label || '';
      this.icon = this.question?.icon || '';
    }
  }

  private setColor$() {
    const startStatus: FormControlStatus = this.control.disabled
      ? 'DISABLED'
      : 'VALID';

    return this.control.statusChanges.pipe(
      startWith(startStatus),
      map((status: FormControlStatus) => {
        let color: Palette = 'primary';

        switch (status) {
          case 'DISABLED':
            color = 'disable';
            break;
          case 'INVALID':
            if (this.control.touched) {
              color = 'warn';
            }
            break;
          default:
            color;
            break;
        }

        return color;
      })
    );
  }

  private setErrorMessage() {
    const error = this.messageService.getErrorMessage(
      this.control,
      this.question.placeHolder
    );

    this.error$.next(error);
    if (error && this.control.touched) {
      this.control.updateValueAndValidity();
    }
  }

  public validate() {
    this.setErrorMessage();
  }
  private getOption(value: any): SelectOption | null {
    const question = this.question as
      | QuestionSelectModel
      | QuestionAutocompleteModel;

    if (question?.options) {
      return question.options.find(
        (option: SelectOption) => option.value === value
      );
    } else {
      return null;
    }
  }

  private getFormOption(value?: string): FormOption {
    const formOption: FormOption = {
      key: this.question.key,
      control: this.control,
      index: this.index,
      value$: of(value),
      option: this.getOption(value),
    };

    return formOption;
  }

  // EVENTS SECTION
  public onFocus() {
    this.focus.emit(this.getFormOption());
  }
}
