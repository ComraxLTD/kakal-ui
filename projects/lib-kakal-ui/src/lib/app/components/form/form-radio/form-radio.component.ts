import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Observable } from 'rxjs';
import { QuestionRadio } from '../models/question-radio.model';

@Component({
  selector: 'kkl-form-radio',
  templateUrl: './form-radio.component.html',
  styleUrls: ['./form-radio.component.scss']
})
export class FormRadioComponent implements OnInit {

  @Input() public question: QuestionRadio
  @Input() public control: FormControl
  @Input() public dark: boolean

  @Output() value: Observable<any>

  constructor() { }

  ngOnInit(): void {

    this.value = this.control.valueChanges

  }

  public handleChange(radio: MatRadioChange) {
    this.control.setValue(radio.value)

  }
}
