import { Component, Inject, OnInit } from '@angular/core';

import { DetailsService } from '../costumer-details.service';
import { Observable, of, pluck } from 'rxjs';
import {
  FormChangeEvent,
  FormDataSource,
  FormService,
  PageHeadlineService,
  Question,
  RowActionModel,
  TableBase,
} from '../../../../../../../../../kakal-ui/src/public-api';
import { FormGrid } from '../../../../../../../../../kakal-ui/src/lib/form/models/question.types';
@Component({
  selector: 'app-costumer-details',
  templateUrl: './costumer-details.component.html',
  styleUrls: ['./costumer-details.component.scss'],
  providers: [FormDataSource],
})
export class CostumerDetailsComponent implements OnInit {
  // TABLE PROPS

  columns: TableBase[] = [
    { key: 'costumerName', label: 'שם לקוח', controlType: 'autocomplete' },
    { key: 'costumerType', label: 'סוג לקוח', controlType: 'autocomplete' },
    { key: 'contactName', label: 'שם איש קשר', controlType: 'autocomplete' },
    { key: 'cellPhone', label: 'נייד', controlType: 'autocomplete' },
    { key: 'email', label: 'דוא"ל', controlType: 'autocomplete' },
    { key: 'address', label: 'כתובת', controlType: 'autocomplete' },
    { key: 'payingCostumer', label: 'לקוח משלם', controlType: 'autocomplete' },
  ];

  rowActions: RowActionModel[] = [
    {
      type: 'inlineEdit',
      icon: 'edit',
    },
    {
      type: 'deleteEdit',
      icon: 'delete',
    },
  ];

  //  FORM PROPS

  // set questions array for the advanced form
  public questions: Question[] = [
    // first object for the general search
    // key must be search!
    {
      key: 'search',
      label: 'חפש',
      controlType: 'autocomplete',
    },
    {
      key: 'city',
      label: 'עיר',
      controlType: 'text',
    },
    {
      key: 'calendar',
      label: 'סוג לקוח',
      controlType: 'text',
    },
  ];

  formGrid!: FormGrid;
  searchKey: string = 'search';
  constructor(
    private detailsService: DetailsService,
    private formDataSource: FormDataSource,
    private formService: FormService,
    private pageHeadlineService: PageHeadlineService
  ) {}

  ngOnInit(): void {
    // this.questions = this.detailsService.getFormQuestions();
    this.formGrid = { cols: 2 };
    this.pageHeadlineService.emitPageHeadlineItems([
      { value: 'הוספת הזמנה חדשה' },
    ]);
  }

  // DOM EVENTS SECTION
  onCreateNewCommittee() {
    console.log('onCreateNewCommittee');
  }

  // listen to formChanged events
  onFormChanged(event: FormChangeEvent) {
    this.formDataSource.dispatch(event);
  }
}
