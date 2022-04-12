import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlBase, OptionsModel } from '../../../kakal-ui/src/public-api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  options:OptionsModel[] = [
    {
      //this key should be the same
      key: 'firstQuestion',
      val: [
        { label: 'initial option1', value: 0 },
        { label: 'initial option2', value: 1, },
        { label: 'initial option3', value: 2,  },
        { label: 'initial option4', value: 3,selected:true},
      ],
    },
    {
      //this key should be the same
      key: 'secondQuestion',
      val: [
        { label: 'test1', value: 1,  },
        { label: 'test2', value: 3, disabled: true },
        { label: 'test3', value: 2, selected: true },
      ],
    },
  ]

  formGroup = new FormGroup({});

  questions: ControlBase[] = [
    // {
    //   key: 'first',
    //   controlType: 'select',
    //   options: 'firstQuestion',
    //   multi: false,
    //   label: 'בחירה ראשונה',
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
    // {
    //   key: 'autocomplete',
    //   controlType: 'autocomplete',
    //   options: 'firstQuestion',
    //   multi: true,
    //   label: 'local autocomplete',
    //   // disabled: true
    //   //,
    // },
    {
      key: 'currency',
      controlType: 'currency'
    }
  ];

  editData =  'ert'
  //{
    //select: { label: 'editData', value: 88 }
  //}

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.formGroup);
      this.questions = this.questions.concat([{
        key: 'time',
        controlType: 'time'
      }])
      // this.editData = { number: 65657 };
    }, 4000);
  }

  onQueryChanged(event:any) {
    console.log(event);
  }

  onSelectChanged(event:any) {
    console.log(event);

    if (event.key === 'first') {
      this.options = [
        {
          //this key should be the same
          key: 'firstQuestion',
          val: [
            { label: 'server option1', value: 0 },
            { label: 'server option2', value: 2,  selected: true},
            { label: 'server option3', value: 3, },
          ],
        },
        {
          //this key should be the same
          key: 'secondQuestion',
          val: [
            { label: 'test1', value: 1 },
            { label: 'test2', value: 3, selected: true },
            { label: 'test3', value: 2},
          ],
        },
      ];
    }
  }

  // onOpenChanged(event:any) {
  //   console.log(event);

  // options: OptionsModel[] = [
  //   {
  //     //this key should be the same
  //     key: 'firstQuestion',
  //     val: [
  //       { label: 'test', value: 0 },
  //       { label: 'test1', value: 1, disabled: true },
  //       { label: 'test3', value: 2 },
  //       { label: 'test2', value: 3 },
  //     ],
  //   },
  //   {
  //     //this key should be the same
  //     key: 'secondQuestion',
  //     val: [
  //       { label: 'test1', value: 1, disabled: true },
  //       { label: 'test3', value: 2, selected: true },
  //       { label: 'test2', value: 3, disabled: true },
  //     ],
  //   },
  //   {
  //     //this key should be the same
  //     key: 'autocomplete',
  //     val: [
  //       { label: 'test1', value: 1, disabled: true },
  //       { label: 'test3', value: 2, selected: true },
  //       { label: 'test2', value: 3, disabled: true },
  //     ],
  //   },
  // ];

  // questions: Question[] = [
  //   {
  //     key: 'contact',
  //     controlType: 'radio',
  //     options: [
  //       {
  //         label: 'מייל לעו"ד בא כוחו',
  //         checked: true,
  //         value: 'attorney',
  //       } as RadioOption,
  //       {
  //         label: 'מייל למנהלת ספר נכסים',
  //         value: 'administrator',
  //       } as RadioOption,
  //     ],
  //   },
  //   { key: 'topic', label: 'נושא' },
  //   {
  //     key: 'content',
  //     controlType: 'texteditor',
  //     label: 'תוכן הפנייה לעורך דין',
  //     value: '',
  //     gridProps: { rows: 4 },
  //   },
  //   { key: 'file', label: 'לחץ להוספץת מסמך', controlType: 'upload' },
  // ];

  // cards = {
  //   1: {
  //     id: 1,
  //     svgIcon: 'home',
  //     category: 'הסכם חליפין',
  //   },
  //   2: {
  //     id: 2,
  //     svgIcon: 'home',
  //     category: 'הסכם רכישה',
  //   },
  //   3: {
  //     id: 3,
  //     svgIcon: 'home',
  //     category: 'הסכם מכר',
  //   },
  // };

  // onGrigChanged(event) {
  //   console.log(event);
  // }
}
