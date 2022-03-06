import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectOption } from '../models/question-select.model';

@Component({
  selector: 'kkl-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss']
})
export class FormCheckboxComponent implements OnInit {
  @Input() control:FormControl;
  @Input() label: string;
  @Input() options:SelectOption[];
  @Input() key: string;
  @Input() labelPosition: 'after' | 'before' = 'after';
  constructor() { }

  ngOnInit(): void {
    this.control = new FormControl();
    this.key = 'test';
    this.control.valueChanges.subscribe(res => console.log(res))
  }

}
