import { Component, OnInit } from '@angular/core';
import { QuestionGroupModel } from '../../../kakal-ui/src/lib/form/models/question-group.model';
import { CurrencyService } from '../../../kakal-ui/src/lib/form/form-currency/form-currency.service';
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
  constructor(private formService: FormService, private currencyService: CurrencyService) { }

  questions: Question[] = [
    {
      key: 'textEditor',
      controlType: 'texteditor',
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
  options = [{ label: 'test', value: 0} ,{ label: 'test2', value: 0}];
  public testControl: FormControl = new FormControl();

  ngOnInit(): void { 
    // this.testControl.setValue(this.options);
  }
}
