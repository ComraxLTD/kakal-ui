import { Component, OnInit } from '@angular/core';
import { QuestionGroupModel } from '../../form/models/question-group.model';
import { FormService, Question } from '../../form/services/form.service';

@Component({
  selector: 'pl-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements OnInit {

  constructor(private formService: FormService) { }

  questions: Question[] = [
    {
      key: 'name'
    },
    {
      key: 'email',
      controlType: 'email',
    },
    {
      key: 'phone',
      controlType: 'phone'
    },
    {
      key: 'date',
      type: 'date'
    },
    {
      key: 'text',
      controlType: 'textarea'
    },

  ]
  formGroup!: QuestionGroupModel;

  ngOnInit(): void {
    this.formGroup = this.formService.createQuestionGroup({
      questions: this.questions,
      key: 'test',
    });
  }

}
