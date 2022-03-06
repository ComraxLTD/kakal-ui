import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, of } from 'rxjs';
import { Palette } from '../../../styles/theme';
import { FormOption } from '../models/form-options';
import { SelectOption } from '../models/question-select.model';
import { Appearance } from '../models/question.model';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'kkl-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss'],
})
export class FormSelectComponent implements OnInit {
  @Input() public control: FormControl;
  @Input() public label: string = "בחר מרשימה";
  @Input() public index: number;
  @Input() public multi: boolean;
  @Input() public key: string;
  @Input() public options: SelectOption[];
  @Input() public placeHolder: string;
  @Input() public theme: Palette;
  @Input() public appearance: Appearance;

  @Output() public selected: EventEmitter<FormOption> = new EventEmitter();
  @Output() public focus: EventEmitter<FormOption> = new EventEmitter();

  public error$: BehaviorSubject<string>;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.error$ = new BehaviorSubject<string>('');
  }

  public onSelectChange() {
    const formOption: FormOption = this.getFormOption(this.control.value);
    this.selected.emit(formOption);
  }

  private getFormOption(value?: SelectOption): FormOption {
    const formOption: FormOption = {
      key: this.key,
      control: this.control,
      index: this.index,
      value$: of(value),
      option: value,
    };

    return formOption;
  }

  public setErrorMessage() {
    const error = this.messageService.getErrorMessage(
      this.control,
      this.placeHolder
    );

    this.error$.next(error);
    if (error && this.control.touched) {
      this.control.updateValueAndValidity();
    }
  }
  public onFocus() {
    this.focus.emit(this.getFormOption());
  }
}
