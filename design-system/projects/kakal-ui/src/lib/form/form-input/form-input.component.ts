import { MessageService } from './../services/message.service';
import { FormControl, FormControlStatus } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Appearance, ControlType, GridProps } from '../models/question.model';
import { Palette } from '../../../styles/theme';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormInputService } from './form-input.service';
import { FormOption } from '../models/form.options';

@Component({
  selector: 'kkl-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit {
  @Input() public key: string;
  @Input() public controlType: ControlType;
  @Input() public label: string;
  @Input() public placeHolder: string;
  @Input() public control: FormControl;
  @Input() public appearance: Appearance;
  @Input() public theme: Palette;
  @Input() public index: number;
  @Input() public cleave: {};
  @Input() public gridProps: GridProps;
  @Input() public icon: string;

  public error$: BehaviorSubject<string>;
  public color$: Observable<Palette>;

  @Output() focus: EventEmitter<FormOption> = new EventEmitter();
  @Output() valueChanged: EventEmitter<FormOption> = new EventEmitter();

  constructor(
    private messageService: MessageService,
    private FormInputService: FormInputService
  ) {}

  ngOnInit(): void {
    this.error$ = new BehaviorSubject<string>('');
    this.color$ = this.setColor$();

    const controlCheck = this.FormInputService.getInputProps(this.controlType);

    for (const property in controlCheck) {
      if (property === 'validation')
        this.control.setValidators(controlCheck[property]);
      if (property === 'icon') this.icon = controlCheck[property];
      if (property === 'cleave') this.cleave = controlCheck[property];
      if (property === 'placeHolder') this.placeHolder = controlCheck[property];
      if (property === 'controlType') this.controlType = controlCheck[property];
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
      value,
      value$: of(value),
    };

    return formOption;
  }

  // EVENTS SECTION
  public onFocus() {
    this.focus.emit(this.getFormOption());
  }

  public onValueChanged(value: string) {
    const formOption: FormOption = this.getFormOption(value);
    this.valueChanged.emit(formOption);
  }
}
