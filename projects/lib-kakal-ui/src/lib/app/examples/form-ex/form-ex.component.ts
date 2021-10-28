import { Component, Input, OnInit } from '@angular/core';
import { QuestionGroupModel } from '../../components/form/models/question-group.model';
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

  public group: QuestionGroupModel;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.group = {
      key: 'example',
      label: '',
      questions: this.formService.setQuestionList(this.questions),
      formGroup: this.formService.setFormGroup(this.questions),
    };
  }
}
