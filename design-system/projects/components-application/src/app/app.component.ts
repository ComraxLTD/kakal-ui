import { Component, OnInit } from '@angular/core';
import { QuestionGroupModel } from '../../../kakal-ui/src/lib/form/models/question-group.model';
import { CurrencyService } from '../../../kakal-ui/src/lib/form/form-currency/form-currency.service';
import {
  FormService,
  Question,
} from '../../../kakal-ui/src/lib/form/services/form.service';
import { FormControl } from '@angular/forms';
import { CardStepModel, SelectOption } from '../../../kakal-ui/src/public-api';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'components-application';
  constructor(private formService: FormService, private currencyService: CurrencyService) { }
  public control = new FormControl();
  public steps$!: Observable<CardStepModel[]>;
  public testArr = ['test','new'];
  private steps: CardStepModel[] = [
    new CardStepModel({
      label: 'פרטי ההתקשרות',
      svgUrl: 'contact',
      path: 'details',
      size: 3,
      variant: 'circle',
      type: 'step',
      spacer: true,
      isActive:true
    }),
    new CardStepModel({
      label: 'בניית הצעת מחיר',
      svgUrl: 'offer',
      path: 'bid',
      size: 3,
      variant: 'circle',
      type: 'step',
      spacer: true,
      stroke: true,
    }),
    new CardStepModel({
      label: 'בחירת ספקים',
      svgUrl: 'send_mail',
      path: 'supplier',
      size: 3,
      variant: 'circle',
      type: 'step',
      spacer: true,
      disabled:true
    }),
    new CardStepModel({
      label: 'ספק זוכה',
      svgUrl: 'medal',
      path: 'winning',
      size: 3,
      variant: 'circle',
      type: 'step',
      spacer: true,
    }),
  ];
  ngOnInit(): void { 
    this.steps$ = of(this.steps)
  }

  logOption(event):void{
    console.log(event);
    
  }
}
