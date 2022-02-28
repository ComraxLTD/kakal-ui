import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {QuestionPhoneModel } from '../../form/models/question-phone.model';

@Component({
  selector: 'pl-form-phone',
  templateUrl: './form-phone.component.html',
  styleUrls: ['./form-phone.component.scss']
})
export class FormPhoneComponent implements OnInit {
  control: FormControl = new FormControl();
  icon!: string;
  cleave!: {};
  phoneInput = new QuestionPhoneModel({
    key: 'phone-input'
  });

  constructor() { }

  ngOnInit(): void {
    if (this.phoneInput.validations) this.control.addValidators(this.phoneInput.validations);
    if (this.phoneInput.icon) this.icon = this.phoneInput.icon;
    if (this.phoneInput.cleave) this.cleave = this.phoneInput.cleave;

  }

}
