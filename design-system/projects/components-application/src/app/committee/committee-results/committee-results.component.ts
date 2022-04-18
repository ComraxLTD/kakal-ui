import { Component, Inject, OnInit } from '@angular/core';
import { CommitteeResultsService } from './committee-results.service';
import { COMMITTEE_DATA, PORTFOLIO_DATA } from './mock_data';
import { Observable } from 'rxjs';
import {
  TableBase,
  RowActionModel,
  Question,
  QuestionGroupModel,
  OptionMap,
  FilterState,
  RouterService,
} from '../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-committee-results',
  templateUrl: './committee-results.component.html',
  styleUrls: ['./committee-results.component.scss'],
})
export class CommitteeResultsComponent implements OnInit {
  // TABLE PROPS

  dataSource: any[] = COMMITTEE_DATA;

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

  portfolioDataSource: any[] = PORTFOLIO_DATA;

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

  constructor(
    private committeeResultService: CommitteeResultsService,

    private routerService: RouterService,

    // @Inject(ROOT_PREFIX) private projectPrefix: string,
    // @Inject(MODULE_PREFIX) private modulePrefix: string
  ) {}

  ngOnInit(): void {
    this.questions = this.committeeResultService.getFormQuestions();
  }

  // DOM EVENTS SECTION

  onCreateNewCommittee() {
    const path: string = `new`;
    this.routerService.navigate(path);
  }
}
