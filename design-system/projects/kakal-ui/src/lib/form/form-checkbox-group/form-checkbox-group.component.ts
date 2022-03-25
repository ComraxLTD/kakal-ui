import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CheckboxOption } from '../form-checkbox/question-checkbox.model';

@Component({
  selector: 'kkl-form-checkbox-group',
  templateUrl: './form-checkbox-group.component.html',
  styleUrls: ['./form-checkbox-group.component.scss'],
})
export class FormCheckboxGroupComponent implements OnInit {
  @Input() control: FormControl | AbstractControl;
  @Input() label: string;
  @Input() options: CheckboxOption[];
  @Input() labelPosition: 'after' | 'before' = 'after';

  interestFormGroup: FormGroup;
  items: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.interestFormGroup = this.formBuilder.group({
      items: this.formBuilder.array([]),
    });
    this.updateFirstValue();
  }

  updateFirstValue(): void {
    if (this.control.value && this.control.value.length !== 0) {
      const items = (<FormArray>(
        this.interestFormGroup.get('items')
      )) as FormArray;
      this.control.value.map((item) => {
        items.push(new FormControl(item));
      });
    }
  }

  onChange(event: MatCheckboxChange) {
    const items = (<FormArray>this.interestFormGroup.get('items')) as FormArray;
    if (event.checked) {
      items.push(new FormControl(event.source.value));
    } else {
      const i = items.controls.findIndex((x) => x.value === event.source.value);
      items.removeAt(i);
    }
    this.control.setValue(items.value);
  }
}
