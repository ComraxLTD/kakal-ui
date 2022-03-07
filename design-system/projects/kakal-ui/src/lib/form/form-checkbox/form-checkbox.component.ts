import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SelectOption } from '../models/question-select.model';

@Component({
  selector: 'kkl-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss']
})
export class FormCheckboxComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() options: SelectOption[];
  @Input() key: string;
  @Input() labelPosition: 'after' | 'before' = 'after';

  interestFormGroup: FormGroup
  interests: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (!this.control) this.control = new FormControl();
    this.key = 'test';
    this.interestFormGroup = this.formBuilder.group({
      interests: this.formBuilder.array([])
    });
    this.updateFirstValue();
    const interests = <FormArray>this.interestFormGroup.get('interests') as FormArray;
  }

  updateFirstValue() {
    if (this.control.value && this.control.value.length !== 0) {
      const interests = <FormArray>this.interestFormGroup.get('interests') as FormArray;
      this.control.value.map(item => {
        item.checked = true;
        interests.push(new FormControl(item));
      });
    }
  }

  onChange(event) {
    const interests = <FormArray>this.interestFormGroup.get('interests') as FormArray;
    if (event.checked) {
      interests.push(new FormControl(event.source.value))
    } else {
      const i = interests.controls.findIndex(x => x.value === event.source.value);
      interests.removeAt(i);
    }
    this.control.setValue(interests.value);
  }

}
