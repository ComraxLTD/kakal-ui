import { Component, OnInit } from '@angular/core';
import {
  ButtonModel,
  CardStep,
  ControlBase,
  DialogComponent,
  DocumentItem,
  FormActions,
  NavbarBottomComponent,
  RouterService,
} from '../../../../../kakal-ui/src/public-api';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-order-layout',
  templateUrl: './new-order-layout.component.html',
  styleUrls: ['./new-order-layout.component.scss'],
})
export class NewOrderLayoutComponent implements OnInit {

  bottomNavbarComp = NavbarBottomComponent

  public disableNext!: Observable<boolean>;

  steps: CardStep[] = [
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

  controls: ControlBase[] = [
    {
      key: 'name',
    },
    {
      key: 'select',
      controlType: 'select',
      label: 'select',
      options: [{ label: 'test', value: 0 }],
    },
    {
      key: 'email',
      controlType: 'email',
      // offset - set to none to remove padding from the end
    },
    {
      key: 'phone',
      controlType: 'phone',
    },
    {
      key: 'date',
      controlType: 'dateRange',
      // offset - set to none to remove padding from the end
      // gridProps: { offset: 'none' },
    },
    {
      key: 'upload',
      controlType: 'upload',
      // offset - set to none to remove padding from the end
    },
    {
      key: 'text',
      controlType: 'textarea',
    },
  ];

  formGroup!: FormGroup;

  constructor(
    private routerService: RouterService,
  ) {}


  ngOnInit(): void {
    this.formGroup = new FormGroup({});

    //decide if drawer is open or closed on init
  }
  // NAVIGATION EVENTS SECTION
  private navigate(path: string) {
    this.routerService.navigate(path);
  }

  // navigate from stepper
  public onChangeStep(step: CardStep) {
    this.navigate(step.path!);
  }
  // navigate from bottom-navbar - next
  public onNext(step: CardStep) {
    this.navigate(step.path!);
  }

  public onPrevious(): void {
    this.routerService.goBack();
  }

  onAddDocument() {
    console.log('works')
  }
}
