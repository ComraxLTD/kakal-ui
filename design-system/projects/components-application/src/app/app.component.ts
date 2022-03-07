import { Component, OnInit } from '@angular/core';
import { QuestionGroupModel } from '../../../kakal-ui/src/lib/form/models/question-group.model';
import { CurrencyService } from '../../../kakal-ui/src/lib/form/form-currency/form-currency.service';
import {
  FormService,
  Question,
} from '../../../kakal-ui/src/lib/form/services/form.service';
import { FormControl } from '@angular/forms';
import { SelectOption } from '../../../kakal-ui/src/public-api';

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
      key:'checkbox',
      type:'checkbox',
      controlType:'checkbox',
      options: [{ label: 'test', value: 0 },{ label: 'test', value: 0 },{ label: 'test', value: 0 }]
    },
    {
      key:'radio',
      type:'radio',
      controlType:'radio',
      options: [{ label: 'test', value: 0 },{ label: 'test', value: 0 },{ label: 'test', value: 0 }]
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
  options: SelectOption[] = [{ label: 'Tel-aviv', value: 0 }, { label: 'Haifa', value: 1 }, { label: 'Ramat-gan', value: 2 }, { label: 'Herzilya', value: 3 }];
  selectedOptions: SelectOption[] = [{ label: 'Haifa', value: 1 }, { label: 'Ramat-gan', value: 2 }, { label: 'Herzilya', value: 3 }];
  radioControl = new FormControl();

  public testControl: FormControl = new FormControl();

  ngOnInit(): void { 
    this.formGroup = this.formService.createQuestionGroup({
      key:'myform',
      questions:this.questions
    });
    console.log(this.formGroup);
    
    // this.currencyService.setCurrencies$([{label:'$',value:0},{label:'*',value:1}])
    // this.testControl.patchValue([{ label: 'test2', value: 0}])
    this.radioControl.setValue({ label: 'Tel-aviv', value: 0 })
    // this.testControl.setValue(this.selectedOptions);
  }
}
