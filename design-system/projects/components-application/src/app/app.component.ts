import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlBase, FormChangeEvent, OptionsModel, RowActionModel, TableBase } from '../../../kakal-ui/src/public-api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  // iles!: any[];


  // public control: FormControl = new FormControl();




  // updateFiles(formEvent: FormChangeEvent) {
  //   const { value } = formEvent;
  //   console.log(value);
  // }

  // options:OptionsModel[] = [
  //   {
  //     //this key should be the same
  //     key: 'firstQuestion',
  //     val: [
  //       { label: 'initial option1', value: 0 },
  //       { label: 'initial option2', value: 1, },
  //       { label: 'initial option3', value: 2,  },
  //       { label: 'initial option4', value: 3,selected:true},
  //     ],
  //   },
  //   {
  //     //this key should be the same
  //     key: 'secondQuestion',
  //     val: [
  //       { label: 'test1', value: 1,  },
  //       { label: 'test2', value: 3, disabled: true },
  //       { label: 'test3', value: 2, selected: true },
  //     ],
  //   },
  // ]

  // formGroup = new FormGroup({});

  // questions: ControlBase[] = [
  //   // {
  //   //   key: 'first',
  //   //   controlType: 'select',
  //   //   options: 'firstQuestion',
  //   //   multi: true,
  //   //   label: 'בחירה ראשונה',
  //   // },
  //   // {
  //   //   key: 'second',
  //   //   controlType: 'select',
  //   //   options: 'secondQuestion',
  //   //   multi: false,
  //   //   label: ' בחירה שניה',
  //   //   // disabled: true
  //   //   //,
  //   // },
  //   {
  //     key: 'autocomplete',
  //     controlType: 'autocomplete',
  //     options: 'firstQuestion',
  //     multi: true,
  //     label: 'local autocomplete',
  //     // disabled: true
  //     //,
  //   },
  //   // {
  //   //   key: 'currency',
  //   //   controlType: 'currency'
  //   // }
  // ];

  // dataSource: any[] = [
  //   {
  //     committeeId: 'wtwrt',
  //     remiTikimCount: 'werwsfwe',

  //   }
  // ]

  // rowActions: RowActionModel[] = [
  //   {
  //     type: 'inlineEdit',
  //     icon: 'edit',
  //     label: 'Edit'
  //   },
  //   {
  //     type: 'inlineDelete',
  //     icon: 'cancel',
  //     label: 'Delete'
  //   },
  //   {
  //     type: 'visibility',
  //     icon: 'visibility',
  //     label: 'Show'
  //   },
  // ]


  // columns: TableBase[] = [
  //   { key: 'committeeId', label: 'Id', controlType: 'number',},
  //   { key: 'remiTikimCount', label: 'remiTikimCount', controlType: 'number', button: {type: 'inlineExpand', icon: 'expand'}},
  //   { key: 'committeeDate', label: 'תאריך', controlType: 'date', },
  // ];

  // editData =  'ert'
  // //{
  //   //select: { label: 'editData', value: 88 }
  // //}

  // constructor() { }

  // ngOnInit() {
  //   setTimeout(() => {
  //     this.columns = [
  //       { key: 'committeeId', label: 'Id mm', controlType: 'number',},
  //       { key: 'remiTikimCount', label: 'remiTikimCount mm', controlType: 'number', button: {type: 'inlineExpand', icon: 'expand'}},
  //       { key: 'committeeDate', label: 'תאריך  mm', controlType: 'date', },
  //     ];
  //     console.log(this.formGroup);
  //     console.log(this.control.value);

  //     this.questions = this.questions.concat([{
  //       key: 'time',
  //       controlType: 'time'
  //     }])
  //     // this.editData = { number: 65657 };
  //   }, 4000);
  // }

  // onQueryChanged(event:any) {
  //   console.log(event);
  // }

  // onSelectChanged(event:any) {
  //   console.log(event);

  //   if (event.key === 'first') {
  //     this.options = [
  //       {
  //         //this key should be the same
  //         key: 'firstQuestion',
  //         val: [
  //           { label: 'server option1', value: 0 },
  //           { label: 'server option2', value: 2,  selected: true},
  //           { label: 'server option3', value: 3, },
  //         ],
  //       },
  //       {
  //         //this key should be the same
  //         key: 'secondQuestion',
  //         val: [
  //           { label: 'test1', value: 1 },
  //           { label: 'test2', value: 3, selected: true },
  //           { label: 'test3', value: 2},
  //         ],
  //       },
  //     ];
  //   }
  // }

  // onOpenChanged(event:any) {
  //   console.log(event);

  // }

  // onValueChanged(event:any) {
  //   console.log(event);

  // }

  constructor() { }

  // iconComponent = IconComponent;
  // iconsData = [
  //   {key:'search',color:'primary',size:5},
  //   {key:'edit',size:2},
  //   {key:'keyboard_arrow_down',color:'accent'},
  //   {key:'calendar'}
  // ]
  // component = CardInfoComponent;
  cards = [
    {
      svgIcon: 'search',
      label: '1',
      subLabel: 'sub label',
    },
    {
      svgIcon: 'search',
      label: '2',
      subLabel: 'sub label',
    }, {
      svgIcon: 'search',
      label: '3',
      subLabel: 'sub label',
    }, {
      svgIcon: 'search',
      label: '4',
      subLabel: 'sub label',
    }, {
      svgIcon: 'search',
      label: '5',
      subLabel: 'sub label',
    },{
      svgIcon: 'search',
      label: '6',
      subLabel: 'sub label',
    },
  ]

  ngOnInit(): void {
  }

}
