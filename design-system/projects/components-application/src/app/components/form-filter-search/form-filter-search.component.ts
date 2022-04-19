import { Component, OnInit } from '@angular/core';
import {
  FilterState,
  OptionMap,
  Question,
  QuestionGroupModel,
  RouterService,
  RowActionModel,
  TableBase,
} from '../../../../../kakal-ui/src/public-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-filter-search',
  templateUrl: './form-filter-search.component.html',
  styleUrls: ['./form-filter-search.component.scss'],
})
export class FormFilterSearchComponent implements OnInit {
  dataSource: any[] = [];

  // set questions array for the advanced form
  columns: TableBase[] = [
    {
      key: 'committeeId',
      label: 'מספר ועדה',
      controlType: 'number',
      button: { type: '', icon: '' },
    },
    {
      key: 'remiTikim',
      label: 'תיקי רמ"י',
      controlType: 'number',
      button: { type: 'inlineExpand', icon: 'keyboard_arrow_down' },
    },
    { key: 'date', label: 'תאריך', controlType: 'date' },
    { key: 'observer', label: 'שם משקיף', controlType: 'number' },
    { key: 'amount', label: 'ערך כספי', controlType: 'number' },
    { key: 'status', label: 'סטטוס' },
  ];

  portfolioDataSource: any[] = [];

  portfolioColumns: TableBase[] = [
    { key: 'portfolioId', label: 'מס תיק', button: { type: 'inlineDelete' } },
    { key: 'estates', label: 'נכסים' },
    { key: 'observer', label: 'עמדת משקיף' },
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

  questions!: Question[];

  public searchGroup!: QuestionGroupModel<any>;

  public optionsMap$!: Observable<OptionMap>;

  public filtersState$!: Observable<FilterState>;

  constructor(private routerService: RouterService) {}

  ngOnInit(): void {
    this.questions = [
      {
        key: 'search',
        controlType: 'autocomplete',
      },
      {
        key: 'committeeId',
        label: 'מס ועדה',
      },
      {
        key: 'remiTikOptions',
        label: 'מס תיק רמ"י',
        controlType: 'autocomplete',
      },
      {
        key: 'gushOptions',
        label: 'גוש',
        controlType: 'autocomplete',
      },
      {
        key: 'chelkaOptions',
        label: 'חלקה',
        controlType: 'autocomplete',
        gridProps: { offset: 'none' },
      },
      {
        key: 'observerOptions',
        label: 'שם משקיף',
        controlType: 'select',
      },
      {
        key: 'migrashOptions',
        label: 'מגרש',
        controlType: 'autocomplete',
      },
      {
        key: 'tabaNumOptions',
        label: 'מס תב"ע',
        controlType: 'autocomplete',
      },
      {
        key: 'regionOptions',
        label: 'מרחב',
        controlType: 'select',
        gridProps: { offset: 'none' },
      },
    ];
  }

  // DOM EVENTS SECTION

  onCreateNewCommittee() {}
}
