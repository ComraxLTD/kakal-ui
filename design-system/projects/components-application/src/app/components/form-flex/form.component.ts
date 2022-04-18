import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormGrid } from '../../../../../kakal-ui/src/lib/form/models/question.types';
import {
  FormService,
  Question,
  QuestionGroupModel,

} from '../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-form-flex',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormFlexComponent implements OnInit {
  constructor(private formService: FormService) {}

  @Input() formGroup: FormGroup;
  @Input() index: number;

  questions: Question[] = [
    {
      key: 'name',
    },
    {
      key: 'select',
      controlType: 'select',
      label: 'select',
      options: [{ label: 'test', value: 0 }],
    },
    {
      key: 'email',
      controlType: 'email',
      gridProps: { offset: 'none' },
    },
    {
      key: 'phone',
      controlType: 'phone',
      validations: [Validators.required],
    },
    {
      key: 'date',
      controlType: 'date',
    },
    {
      key: 'upload',
      controlType: 'upload',
      gridProps: { offset: 'none' },
    },
    {
      key: 'text',
      controlType: 'textarea',
    },
  ];
  groupFlex!: QuestionGroupModel;

  ngOnInit(): void {

    this.groupFlex = this.setGroup(this.questions, {
      cols: 3,
      variant: 'flex',
    });

    this.formGroup.controls = { ...this.groupFlex.formGroup.controls };
  }

  private setGroup(questions: Question[], grid: FormGrid) {
    return this.formService.createQuestionGroup({
      questions,
      key: 'test',
      options: { gridProps: grid },
    });
  }
}
