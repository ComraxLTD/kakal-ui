import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardInfoComponent, ControlBase, FormChangeEvent, IconComponent, OpenMotionService, OptionsModel, PageHeadlineService, RowActionModel, TableBase, StatusBars } from '../../../kakal-ui/src/public-api';
import heLocale from '@fullcalendar/core/locales/he';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  options: OptionsModel[] = [
    {
      //this key should be the same
      key: 'firstQuestion',
      val: [
        { label: 'initial option1', value: 0 },
        { label: 'initial option2', value: 1 },
        { label: 'initial option3', value: 2 },
        { label: 'initial option4', value: 3, selected: true },
      ],
    },
    {
      //this key should be the same
      key: 'secondQuestion',
      val: [
        { label: 'test1', value: 1 },
        { label: 'test2', value: 3, disabled: true },
        { label: 'test3', value: 2, selected: true },
      ],
    },
  ];

  formGroup = new FormGroup({});

  questions: ControlBase[] = [
    // {
    //   key: 'first',
    //   controlType: 'select',
    //   options: 'firstQuestion',
    //   multi: true,
    //   label: 'בחירה ראשונה',
    //   // disabled: true
    // },
    // {
    //   key: 'second',
    //   controlType: 'select',
    //   options: 'secondQuestion',
    //   multi: false,
    //   label: ' בחירה שניה',
    //   // disabled: true
    //   //,
    // },
    {
      key: 'autocomplete',
      controlType: 'autocomplete',
      options: [
        { label: 'test', value: 0 },
        { label: 'test1', value: 1 },
        { label: 'test2', value: 2 },
        { label: 'test3', value: 3 },
      ],
      // multi: true,
      label: 'local autocomplete',
      // disabled: true
      //,
    },
    {
      key: 'date',
      controlType: 'text',
      label: 'coungdh',
      icon: 'add',
      placeHolder: 'jfhdhdfh'
    },
  ];

  editData =  'ert'
  //{
    //select: { label: 'editData', value: 88 }
  //}

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      console.log(this.formGroup);
      // this.questions = this.questions.concat([
      //   {
      //     key: 'time',
      //     controlType: 'time',
      //   },
      // ]);
      // this.editData = { number: 65657 };
    }, 4000);
  }

  onQueryChanged(event: any) {
    console.log(event);
  }

  onSelectChanged(event: any) {
    // if (event.key === 'first') {
    //   this.options = [
    //     {
    //       //this key should be the same
    //       key: 'firstQuestion',
    //       val: [
    //         { label: 'server option1', value: 0 },
    //         { label: 'server option2', value: 2, selected: true },
    //         { label: 'server option3', value: 3 },
    //       ],
    //     },
    //     {
    //       //this key should be the same
    //       key: 'secondQuestion',
    //       val: [
    //         { label: 'test1', value: 1 },
    //         { label: 'test2', value: 3, selected: true },
    //         { label: 'test3', value: 2 },
    //       ],
    //     },
    //   ];
    // }
  }

  onOpenChanged(event: any) {
    console.log(event);
  }
}
