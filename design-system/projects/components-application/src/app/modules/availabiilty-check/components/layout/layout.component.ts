import { Component, OnInit } from '@angular/core';
import {
  BreakpointService,
  ButtonModel,
  CardStep,
  ControlBase,
  FormChangeEvent,
  FormDataSource,
  FormService,
  GridChangedEvent,
  Question,
  QuestionGroupModel,
  RouterService,
  SelectOption,
  StepsLayoutService,
} from '../../../../../../../kakal-ui/src/public-api';
import { map, mergeMap, Observable, of } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [FormDataSource, StepsLayoutService],
})
export class LayoutComponent implements OnInit {
  steps: CardStep[] = [
    {
      label: 'פרטי הזמנה',
      svgIcon: 'plant',
      path: 'search',
    },
    {
      label: 'מרכיבי הזמנה',
      svgIcon: 'tree',
      path: 'parts',
    },
    {
      label: 'סיכום הזמנה',
      svgIcon: 'list',
      path: 'summary',
    },
  ];

  formValues = { select: '', date: '' };

  // form variables
  group!: QuestionGroupModel<any>;

  options: SelectOption[] = [
    {
      label: 'ציפורי',
      value: 'any',
    },
    {
      label: 'לביא',
      value: 'any',
    },
    {
      label: 'נס הרים',
      value: 'any',
    },
    {
      label: 'יתיר',
      value: 'any',
    },
    {
      label: 'שוני',
      value: 'any',
    },
  ];

  questions: ControlBase[] = [
    {
      key: 'select',
      controlType: 'select',
      options: this.options,
      label: 'מרכז שדה',
    },
    {
      key: 'range',
      controlType: 'dateRange',
      label: 'תאריך הזמנה',
    },
  ];
  groupGrid!: QuestionGroupModel;
  groupFlex!: QuestionGroupModel;

  constructor(
    private breakpointsService: BreakpointService,
    private routerService: RouterService,
    private stepperLayoutService: StepsLayoutService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    //decide if drawer is open or closed on init
    // this.stepperLayoutService.emitDisplayDrawer(false);
    // form group
    // this.groupFlex = this.setGroup(this.questions, {
    //   cols: 2,
    //   variant: 'flex',
    // });
  }

  onCardSelect(event: GridChangedEvent) {
    const { selectedCard } = event;
  }
}
