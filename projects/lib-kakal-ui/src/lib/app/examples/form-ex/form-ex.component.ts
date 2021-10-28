import { Component, Input, OnInit } from '@angular/core';
import { GroupOptions, QuestionGroupModel } from '../../components/form/models/question-group.model';
import {
  FormService,
  Question,
} from '../../components/form/services/form.service';

@Component({
  selector: 'kkl-form-ex',
  templateUrl: './form-ex.component.html',
  styleUrls: ['./form-ex.component.scss'],
})
export class FormExComponent implements OnInit {
  @Input() questions: Question[];
  @Input() options: GroupOptions;

  public group: QuestionGroupModel;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.group = this.formService.createQuestionGroup({
      key: '',
      questions: this.questions,
      options: {
        gridProps: {
          cols: 2,
        },
      },
    });
  }
}
