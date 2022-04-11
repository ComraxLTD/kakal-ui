import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CardAddComponent } from '../../../kakal-ui/src/lib/cards/card-add/card-add.component';
import { ControlBase, OptionsModel } from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  actions = [{ svgIcon: 'edit' }, { svgIcon: 'delete' }];

  eventClicked(event) {
    console.log(event);
  }
  //calendar
  arr = [
    {
      backgroundColor: '#F0F6FE',
      start: '2022-04-10',
      // end: "2022-04-10T09:00",
      editable: true,
      svg: 'tree',
      textColor: 'black',
      title: 'מגרש ספורט',
      type: 'facility',
    },
    {
      backgroundColor: '#F0F6FE',
      start: '2022-04-10T08:00',
      end: '2022-04-10T09:00',
      editable: true,
      svg: 'tree',
      textColor: 'black',
      title: 'מגרש ספורט',
      type: 'facility',
    },
    {
      backgroundColor: '#F0F6FE',
      start: '2022-04-10T09:00',
      end: '2022-04-10T10:00',
      editable: true,
      svg: 'tree',
      textColor: 'black',
      title: 'מגרש ספורט',
      type: 'activity',
    },
  ];

  //
  component = CardAddComponent;
  cards = [
    { title: '1', content: 'test' },
    { title: '2', content: 'test' },
    { title: '3', content: 'test' },
    { title: '4', content: 'test' },
    { title: '5', content: 'test' },
    { title: '6', content: 'test' },
    { title: '7', content: 'test' },
    { title: '8', content: 'test' },
  ];

  ngOnInit() {
    // setTimeout(() => {
    //   console.log(this.formgroup);
    // this.editData = {number: 65657};
    //   this.questions = this.questions.concat([{
    //       key: 'password',
    //       controlType: 'password',
    //     }]);
    // }, 4000);
  }

  options:OptionsModel[] = [
    {
      //this key should be the same
      key: 'firstQuestion',
      val: [
        { label: 'test', value: 0 },
        { label: 'test1', value: 1, disabled: true },
        { label: 'test3', value: 2,  },
        { label: 'test2', value: 3, },
      ],
    },
    {
      //this key should be the same
      key: 'secondQuestion',
      val: [
        { label: 'test1', value: 1, disabled: true },
        { label: 'test3', value: 2, selected: true },
        { label: 'test2', value: 3, disabled: true },
      ],
    },
    {
      //this key should be the same
      key: 'autocomplete',
      val: [
        { label: 'test1', value: 1, disabled: true },
        { label: 'test3', value: 2, selected: true },
        { label: 'test2', value: 3, disabled: true },
      ],
    },
  ];
  
  questions: ControlBase[] = [
    {
      key: 'autocomplete',
      controlType: 'autocomplete',
      options: [
        { label: 'test', value: 0 },
        { label: 'test1', value: 1 },
        { label: 'test2', value: 2 },
        { label: 'test3', value: 3 },],
      // multi: true,
      label: 'local autocomplete',
      // disabled: true
      //,
    },
    {
      key: 'email',
      controlType: 'email'
    },
    {
      controlType:'calendar',
      key:'calendar'
    },
    {
      controlType:'counter',
      key:'counter',
      icon:'tree'
    },
    // {
    //   controlType:'currency',
    //   key:'currency'
    // },
    // {controlType:'date',key:'date'},
    // {controlType:'dateRange',key:'dateRange'},
    // {controlType:'phone',key:'phone'},
    // {controlType:'range',key:'range'},
    // {controlType:'sum',key:'sum'},
    // {controlType:'texteditor',key:'texteditor'},
    // {controlType:'time',key:'time'},
    // {controlType:'upload',key:'upload'},
    // {controlType:'toggle',key:'toggle'},
    // {controlType:'checkbox',key:'checbox'},
    // {controlType:'radio',key:'radio'}
  ]
}
