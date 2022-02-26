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
  @Input() public theme:Palette;
  @Input() public placeHolder:string;
  @Input() public control: FormControl;
  @Input() public key:string;
  @Input() public appearance: Appearance;
  @Input() public cleave:{};
  @Input() public index: number;
  @Input() public gridProps: GridProps;
  @Input() public icon: string;
  @Input() public controlType: ControlType;
  @Input() public label: string;


  public error$: BehaviorSubject<string>;
  public color$: Observable<Palette>;

  @Output() focus: EventEmitter<FormOption> = new EventEmitter();

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.error$ = new BehaviorSubject<string>('');
    this.color$ = this.setColor$();

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
      this.placeHolder
    );

    this.error$.next(error);
    if (error && this.control.touched) {
      this.control.updateValueAndValidity();
    }
  }

  public validate() {
    this.setErrorMessage();
  }

  private getFormOption(value?: string): FormOption {
    const formOption: FormOption = {
      key: this.key,
      control: this.control,
      index: this.index,
      value$: of(value),
    };

    return formOption;
  }

  // EVENTS SECTION
  public onFocus() {
    this.focus.emit(this.getFormOption());
  }
}
