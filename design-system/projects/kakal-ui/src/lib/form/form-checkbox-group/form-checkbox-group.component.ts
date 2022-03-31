import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CheckboxOption } from '../form-checkbox/question-checkbox.model';
import { FormActions } from '../models/form.actions';
import { FormChangeEvent } from '../models/form.options';

@Component({
  selector: 'kkl-form-checkbox-group',
  templateUrl: './form-checkbox-group.component.html',
  styleUrls: ['./form-checkbox-group.component.scss'],
})
export class FormCheckboxGroupComponent implements OnInit {
  @Input() control: FormControl | AbstractControl;
  @Input() value: CheckboxOption[];
  @Input() key: string;
  @Input() label: string;
  @Input() index: number;
  @Input() labelPosition: 'after' | 'before' = 'after';

  checkboxGroup: FormArray;

  get options(): CheckboxOption[] {
    return this.control.value as CheckboxOption[];
  }

  @Output() changed: EventEmitter<FormChangeEvent> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.value = this.control.value.map((option, i) => {
      return { ...option, id: i };
    }) as CheckboxOption[];
    this.checkboxGroup = this.setFormArray();
  }

  private setFormArray(): FormArray {
    const values = this.value.map((option: CheckboxOption) => option.checked);
    return this.formBuilder.array([...values]);
  }

  onChange(event: MatCheckboxChange, index: number) {
    // const control = this.checkboxGroup.at(index);

    const value = [...this.value];

    value[index] = {
      ...value[index],
      // checked: control.value,
      checked: event.checked,
    } as CheckboxOption;

    this.value = [...value];

    this._emitChangeEvent();
  }

  private _emitChangeEvent(): void {
    const formChangeEvent: FormChangeEvent = {
      key: this.key,
      value: this.value,
      index: this.index,
      action: FormActions.VALUE_CHANGED,
    };
    this.control.setValue(this.value);
    this.changed.emit(formChangeEvent);
  }
}
