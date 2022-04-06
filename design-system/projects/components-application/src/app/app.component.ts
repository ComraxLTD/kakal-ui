import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { StatusBarsModel } from '../../../kakal-ui/src/lib/status-bars/status-bars.model';
import {
  CardInfoComponent,
  CardStepModel,
  Panel,
  PageHeadlineService,
  FormActions,
  FormGrid,
  FormService,
  Question,
  QuestionGroupModel,
  MenuCard,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private formService: FormService) {}
  control = new FormControl();
  component = CardInfoComponent;
  actions = [
    { type: 'file', action: FormActions.EDIT },
    { type: 'form', action: FormActions.EDIT },
    {
      type: 'form',
      action: FormActions.SUBMIT,
    },
  ];

  steps: CardStepModel[] = [
    {
      label: 'פרטי נכס',
      svgIcon: 'home',
      path: 'details',
    },
    {
      label: 'טיוטות והסכמים',
      svgIcon: 'portfolio',
      path: 'documents',
    },
    {
      label: 'שליחת מייל',
      svgIcon: 'mail',
      path: 'mails',
    },
  ];
  questions: Question[] = [
    {
      key: 'name',
    },
    {
      key: 'select',
      controlType: 'select',
      label: 'select',
    },
    {
      key: 'email',
      controlType: 'email',
      // offset - set to none to remove padding from the end
      gridProps: { offset: 'none' },
    },
    {
      key: 'phone',
      controlType: 'checkbox',
    },
    {
      key: 'date',
      controlType: 'date',
      // offset - set to none to remove padding from the end
      // gridProps: { offset: 'none' },
    },
    {
      key: 'upload',
      controlType: 'upload',
      // offset - set to none to remove padding from the end
      gridProps: { offset: 'none' },
    },
    {
      key: 'text',
      controlType: 'textarea',
    },
  ];
  status: StatusBarsModel = {
    label: 'statusBars',
    authorizedBars: 3,
    totalBars: 8,
  };
  ngOnInit(): void {
    // this.pageHeadlineService.emitPageHeadlineItems([
    //   { value: 'כותרת' },
    //   { value: 'כותרת' },
    //   { value: 'כותרת' },
    //   { value: new Date(), format: 'date' },
    //   {
    //     value: {
    //       label: 'statusBars',
    //       authorizedBars: 3,
    //       totalBars: 6,
    //     },
    //     template: true,
    //   },
    // ]);
  }
}
