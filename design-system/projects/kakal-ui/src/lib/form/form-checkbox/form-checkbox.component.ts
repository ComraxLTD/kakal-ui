import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FormActions } from '../models/form.actions';
import { FormChangeEvent } from '../models/form.options';

@Component({
  selector: 'kkl-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss'],
})
export class FormCheckboxComponent implements OnInit {
  @Input() control!: FormControl | AbstractControl;
  @Input() key!: string;
  @Input() index!: number;
  @Input() label!: string;
  @Input() labelPosition: 'after' | 'before' = 'after';

  @Output() changed: EventEmitter<FormChangeEvent> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChange(event: MatCheckboxChange) {
    const formChangeEvent: FormChangeEvent = {
      key: this.key,
      value: event.checked,
      index: this.index,
      action: FormActions.VALUE_CHANGED,
    };
    this.changed.emit(formChangeEvent);
  }
}
