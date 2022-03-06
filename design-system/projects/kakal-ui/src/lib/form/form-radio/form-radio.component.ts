import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { MatRadioChange,MatRadioButton } from '@angular/material/radio';
import { SelectOption } from '../models/question-select.model';


@Component({
  selector: 'kkl-form-radio',
  templateUrl: './form-radio.component.html',
  styleUrls: ['./form-radio.component.scss']
})
export class FormRadioComponent implements OnInit {
  @Input() key: string;
  @Input() label: string;
  @Input() options:SelectOption[];
  @Input() public control: FormControl
  @Output() public change = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {  }

  public handleChange(radio: MatRadioChange) {
    this.control.setValue(radio.value);
    this.change.emit({key:this.key,value:radio.value});
  }
}
