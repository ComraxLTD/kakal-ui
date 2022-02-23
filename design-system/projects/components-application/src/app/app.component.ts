import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuestionGroupModel } from '../../../kakal-ui/src/lib/form/models/question-group.model';
import { FormService, Question } from '../../../kakal-ui/src/lib/form/services/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'components-application';
  constructor(private formService: FormService) { }

  questions:Question[] = [
    {
      key:'text-input',
      controlType:'email',
      label:'Enter email',
      icon:'email'
    },
    {
      key:'test',
      controlType:'phone'
    }
  ];
  public formGroup:QuestionGroupModel ;

  ngOnInit(): void {
    this.formGroup = this.formService.createQuestionGroup({
      questions: this.questions,
      key: 'test',
  });
  console.log(this.formGroup.questions)
  }
}
