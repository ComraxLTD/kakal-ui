import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { SelectOption } from '../models/question-select.model';

@Component({
  selector: 'kkl-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss'],
})
export class FormCheckboxComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() labelPosition: 'after' | 'before' = 'after';

  @Output() valueChanged: EventEmitter<MatCheckboxChange> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChange(event: MatCheckboxChange) {
    this.valueChanged.emit(event);
  }
}
