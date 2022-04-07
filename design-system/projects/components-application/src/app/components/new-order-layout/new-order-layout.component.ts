import { Component, OnInit } from '@angular/core';
import {
  ButtonModel,
  CardStepModel,
  DialogComponent,
  DocumentItem,
  FormActions,
  RouterService,
} from '../../../../../kakal-ui/src/public-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-order-layout',
  templateUrl: './new-order-layout.component.html',
  styleUrls: ['./new-order-layout.component.scss'],
})
export class NewOrderLayoutComponent implements OnInit {
  public disableNext!: Observable<boolean>;

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

  actions: ButtonModel[] = [
    { label: 'מסמכי תיק', type: 'file', action: FormActions.VALUE_CHANGED },
    { type: 'form', action: FormActions.EDIT },
    { type: 'form', action: FormActions.SUBMIT },
  ];


  documents : DocumentItem[] = [
    { label : 'test', dateCreated : new Date(), userCreated : 'tommy'},
    { label : 'test2', dateCreated : new Date(), userCreated : 'tommy2'},
    { label : 'test3', dateCreated : new Date(), userCreated : 'tommy3'},
    { label : 'test4', dateCreated : new Date(), userCreated : 'tommy4'}
  ]

  constructor(
    private routerService: RouterService,
  ) {}


  ngOnInit(): void {
    //decide if drawer is open or closed on init
  }
  // NAVIGATION EVENTS SECTION
  private navigate(path: string) {
    this.routerService.navigate(path);
  }

  // navigate from stepper
  public onChangeStep(step: CardStepModel) {
    this.navigate(step.path!);
  }
  // navigate from bottom-navbar - next
  public onNext(step: CardStepModel) {
    this.navigate(step.path!);
  }

  public onPrevious(): void {
    this.routerService.goBack();
  }

  onAddDocument() {
    console.log('works')
  }
}
