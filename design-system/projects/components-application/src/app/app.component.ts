import { Component, OnInit } from '@angular/core';
import { StepperLayoutService } from '../../../kakal-ui/src/screens/stepper-layout/stepper-layout.service';
import { RouterService } from '../../../kakal-ui/src/services/route.service';
import { BreakpointService } from '../../../kakal-ui/src/services/breakpoint.service';
import { PageHeadlineService } from '../../../kakal-ui/src/lib/page-headline/page-headline.service';
import {
  CardLobbyModel,
  CardStepModel,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'components-application';
  data = [
    { label: 'גיל היער המחטני', value: 'קבוצת גיל' },
    { label: 'מספר שכבות יער', value: 'חד שכבתי' },
    { label: 'תצורת צומח יערנית קיימת', value: 'בוסתני ומטעים' },
    { label: 'רמת צפיפות קיימת', value: 'מספר עצים לדונם' },
    {
      label: 'רמת כיסוי צמרות קיימת',
      value: 'בשכבות המטופלות ללא מינים פולשים',
    },
    { label: 'מצב היער', value: 'סכנה בטיחותית' },
    { label: 'גיל היער המחטני', value: 'קבוצת גיל' },
    { label: 'מספר שכבות יער', value: 'חד שכבתי' },
    { label: 'תצורת צומח יערנית קיימת', value: 'בוסתני ומטעים' },
  ];

  public cards: CardLobbyModel[] = [
    {
      label: 'ספר נכסים',
      svgUrl: 'estate',
      path: 'estate',
    },
    {
      label: 'בקרת רישום',
      svgUrl: 'evaluation',
      path: 'evaluation',
    },
    {
      label: 'בקרת הכנסות',
      svgUrl: 'incoming',
      path: 'incoming',
      size: 7,
    },
    {
      label: 'בקרת הוצאות',
      svgUrl: 'expense',
      path: 'expense',
      size: 7,
    },
    {
      label: 'משקיפים',
      svgUrl: 'committee',
      path: 'committee',
    },
    {
      label: 'בקרה תכנונית',
      svgUrl: 'planing',
      path: 'planing',
    },
  ];

  constructor(private stepperLayoutService: StepperLayoutService) {}
  public steps: CardStepModel[] = [
    new CardStepModel({
      label: 'פרטי ההתקשרות',
      svgUrl: 'contact',
      path: 'details',
      size: 3,
      variant: 'circle',
      type: 'step',
      spacer: true,
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
  ];
  ngOnInit(): void {
    //init steps
    this.stepperLayoutService.setSteps(this.steps);
  }

  onStepChange(args: any) {}

  onNext(args: any) {}
  onPrevious() {}
}
