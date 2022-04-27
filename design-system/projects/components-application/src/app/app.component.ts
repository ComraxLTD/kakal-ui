import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardInfoComponent, ControlBase, FormChangeEvent, IconComponent, OpenMotionService, OptionsModel, PageHeadlineService, RowActionModel, TableBase, StatusBars, CardLobbyModel, CardStepModel, CardStatusModel, CardFilter, MenuCard, Panel, GridProps, NavbarBottomService, StepsSelectionEvent, RouterService, ButtonModel, SelectOption, KklFormChangeEvent } from '../../../kakal-ui/src/public-api';
import heLocale from '@fullcalendar/core/locales/he';
import { Step } from '../../../kakal-ui/src/lib/vertical-steps/step/step.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  control = new FormControl({})


  tabs: { key: string, label: string }[] = [{ key: 'First', label: 'בדיקה' }, { key: 'Second', label: 'test' }, { key: 'Third', label: 'עמוד 3' }];
  onValueChanged(event: KklFormChangeEvent) {
    console.log(event);
  }


  steps: CardStepModel[] = [
    {
      label: 'פרטי ההתקשרות',
      svgIcon: 'contact',
      // add a 'path' to navigate with
      path: 'details',
      // showing the first step as active at first
      selected: true,
    },
    {
      label: 'בניית הצעת מחיר',
      svgIcon: 'offer',
      path: 'bid',
      disabled: true
    },
    {
      label: 'בחירת ספקים',
      svgIcon: 'send_mail',
      path: 'supplier',
    },
    {
      label: 'ספק זוכה',
      svgIcon: 'medal',
      path: 'winning',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelectStep(event: any) {
    const { selectedStep } = event;
    console.log(selectedStep);
  }
}
