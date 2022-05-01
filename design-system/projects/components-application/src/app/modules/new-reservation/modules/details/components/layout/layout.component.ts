import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, map, Observable, of } from 'rxjs';
import { CardStep, Panel } from '../../../../../../../../../kakal-ui/src/public-api'
import { CustomerDetailsLayoutService } from '../customer-details-layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  // public steps: Step[] = [
  //   { svgIcon: 'done', label: 'פרטי לקוח',path:'details' },
  //   { svgIcon: 'done', label: 'מאפיינים ותקציב',path:'budget' },
  //   { svgIcon: 'done', label: 'פרטי הזמנה',path:'reservation' },
  // ];

  public cases: Panel[] = [
    { key: 'costumerDetails', label: 'פרטי לקוח' },
    { key: 'propertiesBudget', label: 'מאפיינים ותקציב' },
    { key: 'reservationDetails', label: 'פרטי הזמנה' },
  ];  disableNext$!: Observable<boolean>;
    // use to switch between accordion and steps ui
    complete$!: Observable<boolean>;

    // use selectIndex to navigate to desired step index
    selectedIndex$: Observable<number> = of(0);
  
    // whet set to false present steps ui, when set to true present accordion ui
    title: string = 'תיקי רמ"י חדש';
  
    steps: CardStep[] = [
      { svgIcon: 'done', label: 'פרטי לקוח',path:'costumerDetails' },
      { svgIcon: 'done', label: 'מאפיינים ותקציב',path:'propertiesBudget' },
      { svgIcon: 'done', label: 'פרטי הזמנה',path:'reservationDetails' },
    ];
  
    // // data of panels
    // cases :Panel[] = [
    //   {
    //     label: 'תיק 4903943',
    //     key : 'caseTemplate'
    //   },
    //   {
    //     label: 'תיק 4903943',
    //     key : 'caseTemplate'
    //   },
    //   {
    //     label: 'תיק 4903943',
    //     key : 'caseTemplate'
    //   },
    //   {
    //     label: 'תיק 4903943',
    //     key : 'caseTemplate'
    //   },
    // ];
  
    buttonLabel: string = 'הוסף תיק חדש';
  
    constructor(
      private customerDetailsLayoutService: CustomerDetailsLayoutService
    ) {}
  
    ngOnInit(): void {
      this.complete$ = this.customerDetailsLayoutService.listenComplete();
      this.selectedIndex$ = this.customerDetailsLayoutService.listenSelectIndex();
      this.customerDetailsLayoutService.setInnerStepsLength(this.steps.length);
    }
  }
  