import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ControlBase,
  OptionsModel,
  CardStatus,
  NavbarService,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  status: CardStatus[] = [
    {
      key: 'first',
      label: 'תהליכי רישום',
      svgIcon: 'home',
      value: 4,
      path: 'records',
      options: [],
    },
  ];
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
      placeHolder: 'jfhdhdfh',
    },
  ];

  editData = 'ert';
  //{
  //select: { label: 'editData', value: 88 }
  //}

  constructor(private navbarService: NavbarService) {}

  ngOnInit() {}

  onQueryChanged(event: any) {
    console.log(event);
  }
}
