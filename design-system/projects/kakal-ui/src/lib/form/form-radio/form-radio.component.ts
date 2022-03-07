import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { SelectOption } from '../models/question-select.model';


@Component({
  selector: 'kkl-form-radio',
  templateUrl: './form-radio.component.html',
  styleUrls: ['./form-radio.component.scss']
})
export class FormRadioComponent implements OnInit {
  @Input() key: string;
  @Input() label: string;
  @Input() options: SelectOption[];
  @Input() public control: FormControl
  @Output() public change = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.onInitValue();
  }

  onInitValue() {
    if (this.control.value) {
      const index = this.options.findIndex(option => option.label === this.control.value.label && option.value === this.control.value.value);
      this.options[index].checked = true;
    }
  }
  public handleChange(radio: MatRadioChange) {
    this.control.setValue(radio.value);
    this.change.emit({ key: this.key, value: radio.value });
  }
}
