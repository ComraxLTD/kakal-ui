import { AbstractControl, FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { RadioOption } from './question-radio.model';
import { FormChangeEvent } from '../models/form.options';
import { FormActions } from '../models/form.actions';

@Component({
  selector: 'kkl-form-radio',
  templateUrl: './form-radio.component.html',
  styleUrls: ['./form-radio.component.scss'],
})
export class FormRadioComponent implements OnInit {
  @Input() public control!: FormControl | AbstractControl;
  @Input() key!: string;
  @Input() label!: string;
  @Input() options!: RadioOption[];

  @Output() public change = new EventEmitter<FormChangeEvent<RadioOption>>();

  constructor() {}

  ngOnInit(): void {
    this.onInitValue();
  }

  onInitValue() {
    // if (this.control.value) {
    //   const index = this.options.findIndex(
    //     (option) =>
    //       option.label === this.control.value.label &&
    //       option.value === this.control.value.value
    //   );
    //   if (index) this.options[index].checked = true;
    // }
  }
  public handleChange(radioChange: MatRadioChange) {
    this.control.setValue(radioChange.value);
    this.change.emit({
      key: this.key,
      value: radioChange.value,
      action: FormActions.VALUE_CHANGED,
    } as FormChangeEvent);
  }
}
