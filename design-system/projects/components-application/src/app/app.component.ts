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
      key:'textEditor',
      controlType:'textEditor',
      type:'textEditor'
    },
    {
      key: 'timeInput',
      label:'time',
      controlType:'time'
    },
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
      type: 'date',
    },
    {
      key: 'text',
      controlType: 'textarea'
    },
    {
      key:'file',
      type:'file',
      controlType:'file'
    },
    {
      key:'cities',
      type:'select',
      controlType:'select',
      options:[{label:'test',value:0}]
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
