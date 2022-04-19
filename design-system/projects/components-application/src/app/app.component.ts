import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardInfoComponent, ControlBase, FormChangeEvent, IconComponent, OpenMotionService, OptionsModel, PageHeadlineModel, PageHeadlineService, RowActionModel, TableBase, StatusBars } from '../../../kakal-ui/src/public-api';
import heLocale from '@fullcalendar/core/locales/he';
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

  // data  = [{label:'בדיקה',value:5},{label:'test',value:'test' , icon:'tree'}]

  // constructor() { }

  // iconComponent = IconComponent;
  // iconsData = [
  //   {key:'search',color:'primary',size:5},
  //   {key:'edit',size:2},
  //   // {key:'keyboard_arrow_down',color:'accent'},
  //   // {key:'calendar'},
  // ]
  // component = CardInfoComponent;
  // cards = [
  //   {
  //     svgIcon: 'search',
  //     label: '1',
  //     subLabel: 'sub label',
  //   },
  //   {
  //     svgIcon: 'search',
  //     label: '2',
  //     subLabel: 'sub label',
  //   }, {
  //     svgIcon: 'search',
  //     label: '3',
  //     subLabel: 'sub label',
  //   }, {
  //     svgIcon: 'search',
  //     label: '4',
  //     subLabel: 'sub label',
  //   }, {
  //     svgIcon: 'search',
  //     label: '5',
  //     subLabel: 'sub label',
  //   },{
  //     svgIcon: 'search',
  //     label: '6',
  //     subLabel: 'sub label',
  //   },
  // ]

  // ngOnInit(): void {
  // }
  // testArr: any[] = ['test', 'test2', 'test3'];
  // selected!: string;
  // customSelected!: string;
  // constructor() { }

  // ngOnInit(): void {
  // }
  // updateOption(option: any) {
  //   this.selected = option;
  // }
  // updateCustomOption(option: any) {
  //   this.customSelected = option;
  // }

  // @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;
  // // @ViewChild('testTemplate', { read: TemplateRef, static: true }) testTemplate!: TemplateRef<any>;

  // constructor(private motionService: OpenMotionService) { }

  // ngOnInit(): void {
  // }

  // onClick(template:TemplateRef<any>) {
  //   this.motionService.createDynamicSideNav(this.container, 'test', template);
  // }

  // status: StatusBars = {
  //   label: 'statusBars',
  //   authorizedBars: 3,
  //   totalBars: 6,
  // };
  // headlineItems: PageHeadlineModel[] = [
  //   { value: 'אקליפטוס יער', },
  //   { value: 'אקליפטוס ', },
  //   { value:this.status, status:true },
  //   { value: new Date(), format:'date'},
  // ];

  // headlineItems2: PageHeadlineModel[] = [
  //   { value: 'אקליפטוס יgggער', },
  //   { value: 'אקליפטgggוס ', },
  //   { value:this.status, status:true },
  //   { value: new Date(), format:'date'},
  // ];
  // expression = true;

  // constructor(private pageHeadlineService: PageHeadlineService) {}
  // ngOnInit(): void {
  //   // this.headlineItems = this.headlineItems.map((item, index) => ({
  //   //   ...item,
  //   //   size: index != 0 ? 1.8 : 2.9,
  //   // }));
  //   this.pageHeadlineService.emitPageHeadlineItems(this.headlineItems);
  //   setTimeout(() => {
  //     this.pageHeadlineService.addPageHeadlineItems(this.headlineItems2);
  //     this.expression = false;
  //   }, 1000);

  //   setTimeout(() => {
  //     this.expression = true;
  //   }, 5000);

  // }




  // iconComponent = IconComponent;
  // iconsData = [
  //   {key:'search',color:'primary',size:5},
  //   {key:'edit',size:2},
  //   {key:'keyboard_arrow_down',color:'accent'},
  //   {key:'calendar'}
  // ]
  // component = CardInfoComponent;
  // cards = [
  //   {
  //     svgIcon: 'search',
  //     label: '1',
  //     subLabel: 'sub label',
  //   },
  //   {
  //     svgIcon: 'search',
  //     label: '2',
  //     subLabel: 'sub label',
  //   }, {
  //     svgIcon: 'search',
  //     label: '3',
  //     subLabel: 'sub label',
  //   }, {
  //     svgIcon: 'search',
  //     label: '4',
  //     subLabel: 'sub label',
  //   }, {
  //     svgIcon: 'search',
  //     label: '5',
  //     subLabel: 'sub label',
  //   },{
  //     svgIcon: 'search',
  //     label: '6',
  //     subLabel: 'sub label',
  //   },
  // ]

  // @ViewChild('calendar', { static: true }) myCalendarComponent:any;


  // eventClicked(event:any) {
  //   console.log(event);
  // }

  // arr = [
  //   {
  //     backgroundColor: "#F0F6FE",
  //     start: this.todayDate(),
  //     // end: "2022-04-10T09:00",
  //     editable: true,
  //     svg: "tree",
  //     textColor: "black",
  //     title: "מגרש ספורט",
  //     type: "facility",
  //   },
  //   {
  //     backgroundColor: "#F0F6FE",
  //     start: this.todayDate() + "T08:00",
  //     end: this.todayDate() + "T09:00",
  //     editable: true,
  //     svg: "tree",
  //     textColor: "black",
  //     title: "מגרש ספורט",
  //     type: "facility"
  //   },
  //   {
  //     backgroundColor: "#F0F6FE",
  //     start: this.todayDate() + "T09:00",
  //     end: this.todayDate() + "T10:00",
  //     editable: true,
  //     // svg: "tree",
  //     textColor: "black",
  //     title: "מגרש ספורט",
  //     type: "activity"
  //   }
  // ]

  // constructor() { }

  // ngOnInit(): void {
  // }

  // todayDate():string {
  //   const date = new Date();
  //   let day:string | number = date.getMonth() +1;
  //   if(day.toString().length == 1) day = `0${day}`;
  //   return `${date.getFullYear()}-${day}-${date.getDate()}`;
  // }

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
