import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pl-form-phone',
  templateUrl: './form-phone.component.html',
  styleUrls: ['./form-phone.component.scss']
})
export class FormPhoneComponent implements OnInit {
  control: FormControl = new FormControl();
  icon!: string;
  cleave!: {};
  // phoneInput = new QuestionPhoneModel({
  //   key: 'phone-input'
  // });

  constructor() { }

  ngOnInit(): void {
    

  }

}
