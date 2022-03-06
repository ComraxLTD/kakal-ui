import { Component, OnInit } from '@angular/core';
import { QuestionGroupModel } from '../../../kakal-ui/src/lib/form/models/question-group.model';
import {
  FormService,
  Question,
} from '../../../kakal-ui/src/lib/form/services/form.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'components-application';
  constructor(private formService: FormService) {}


  questions: Question[] = [
    {
      key: 'textEditor',
      controlType: 'textEditor',
      type: 'textEditor',
    },
    {
      key: 'timeInput',
      label: 'time',
      controlType: 'time',
    },
    {
      key: 'name',
    },
    {
      key: 'email',
      controlType: 'email',
    },
    {
      key: 'phone',
      controlType: 'phone',
    },
    {
      key: 'date',
      type: 'date',
    },
    {
      key: 'text',
      controlType: 'textarea',
    },
    {
      key: 'file',
      type: 'file',
      controlType: 'file',
    },
    {
      key: 'cities',
      type: 'select',
      controlType: 'select',
      options: [{ label: 'test', value: 0 }],
    },
  ];
  public formGroup: QuestionGroupModel;
  public control: FormControl = new FormControl();

  ngOnInit(): void {
    this.control.setValue({
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          attrs: {
            align: null,
          },
          content: [
            {
              type: 'text',
              text: 'dsfsdf',
            },
          ],
        },
      ],
    });
  }
}
