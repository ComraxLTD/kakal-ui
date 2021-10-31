import { Component, Input, OnInit } from '@angular/core';
import {
  GroupOptions,
  QuestionGroupModel,
} from '../../components/form/models/question-group.model';
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
  @Input() public questions: Question[];
  @Input() public options: GroupOptions;
  @Input() public width: string;
  @Input() public multi: boolean;
  @Input() public custom: boolean;

  public group: QuestionGroupModel;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    if (this.custom) {
      this.questions = this.questions.map((question) => {
        if (question.key === 'subSection') {
          question.type = 'custom';
        }
        return question;
      });
    }

    this.group = this.formService.createQuestionGroup({
      key: '',
      questions: this.questions,
      options: this.options,
    });
  }
  public onToggleChange() {
    console.log(this.group.formGroup.value)
  }
}
