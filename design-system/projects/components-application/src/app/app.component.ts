import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
// import { StatusBarsModel } from '../../../kakal-ui/src/lib/status-bars/status-bars.model';
import {
  CardInfoComponent,
  CardStepModel,
  Panel,
  PageHeadlineService,
  FormActions,
  FormService,
  Question,
  QuestionGroupModel,
  IconComponent,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
//   control = new FormControl();
//   component = CardInfoComponent;
//   iconComponent = IconComponent
//   iconsData = [
//     {key:'search',color:'primary',size:5},
//     {key:'edit',size:2},
//     {key:'keyboard_arrow_down',color:'accent'},
//     {key:'calendar'}
//   ]
//   cards = [

ngOnInit(): void {
    
}
//   // dataSource = [];

//   // columns: TableBase[] = [
//   //   {
//   //     controlType: 'text',
//   //     key: 'poCodes',
//   //       label: `PO#`,
//   //       group: 'poCodes',
//   //   },
//   //   {
//   //     controlType: 'text',
//   //     key: 'suppliers',
//   //       label: `Supplier`,
//   //       group: 'poCodes',
//   //   },
//   //   {
//   //     controlType: 'date',
//   //     key: 'recordedTime',
//   //       label: `Recorded time`,
//   //       filter: false,
//   //       editable: false,
//   //       button:
//   //         {
//   //           type: 'inlineExpand',
//   //           icon: 'expand',
//   //         }
//   //   },
//   //   {
//   //     controlType: 'text',
//   //     key: 'status',
//   //       label: `Status`,
//   //       colIcon: 'add'
//   //   },
//   // ];

//   // // constructor() {}

//   // ngOnInit(): void {
//   //   // setTimeout(() => {
//   //     this.dataSource = ELEMENT_DATA;
//   //   // }, 5000);
//   //   // this.dataSource = [
//   //   //   {
//   //   //     city: { label: 'Tel Aviv', value: 5 },
//   //   //     dob: '2022-03-28T00:00:00Z',
//   //   //     id: 1,
//   //   //     name: 'Hillyer Bowkley',
//   //   //     occupation: 'Physical Therapy Assistant',
//   //   //     yearsOfExperience: 32,
//   //   //   },
//   //   // ];
//   // }

//   // key: string = 'myDatePicker';

//   // status:StatusBarsModel = {
//   //   label : "statusBars",
//   //   authorizedBars : 3,
//   //   totalBars : 6
//   //   }

//   // description: string = ''



//   // control: FormControl = new FormControl();



//   // constructor() { }

//   // // ngOnInit(): void {
//   // //   // this.ComraxFormService.getMultiTypeSampleObject().subscribe(res => this.control.setValue(res.email))
//   // // }

//   // // columns: TableBase[] = [
//   // //   { key: 'id', label: 'Id', controlType: 'number', button: {type: 'visibility', icon: ''} },
//   // //   { key: 'name', label: 'Name', controlType: 'text', },
//   // //   { key: 'yearsOfExperience', label: 'YearsOfExperience', controlType: 'number', },
//   // //   { key: 'occupation', label: 'Occupation', controlType: 'text', },
//   // //   { key: 'city', label: 'עיר', controlType: 'select'},
//   // //   { key: 'dob', label: 'תאריך', controlType: 'date', colIcon:'tree'},
//   // // ];

//   // onClicked(event: any) {
//   //   console.log(event);
//   //   this.description = `: (ID: ${event.row.id}, ActionName: ${event.action}, City: ${event.row.city.label}, Date: ${event.row.dob}, Occupation: ${event.row.occupation}, YearsOfExperience: ${event.row.yearsOfExperience})`
//   // }

//   // editRow(eve){
//   //   console.log(eve);

//   // }

//   // rowActions: RowActionModel[] = [
//   //   {
//   //     type: 'inlineEdit',
//   //     icon: 'edit',
//   //     // label: 'Edit'
//   //   },
//   //   {
//   //     type: 'inlineDelete',
//   //     icon: 'cancel',
//   //     // label: 'Delete'
//   //   },
//   //   {
//   //     type: 'visibility',
//   //     icon: 'visibility',
//   //     // label: 'Show'
//   //   },
//   // ]

//   editData = {select: { label: 'test1', value: 1 }}


//   myObs = new BehaviorSubject<MeiSelectOption[]>([]);
// options = [
//   {key: 'select', val: [
//     { label: 'test', value: 0 },
//     { label: 'test1', value: 1 },]}
// ]
//   ngOnInit() {
//     setTimeout(() => {
//       this.options = [
//         {key: 'select', val: [
//           { label: 'test', value: 0 },
//           { label: 'test1', value: 1 },
//           { label: 'test2', value: 2 },
//           { label: 'test3', value: 3 },]}
//       ]
//       // this.myObs.next( [
//       //     { label: 'test', value: 0 },
//       //     { label: 'test1', value: 1 },
//       //     { label: 'test2', value: 2 },
//       //     { label: 'test3', value: 3 },
//       //   ]);
//     }, 8000);

//     // setTimeout(() => {
//     //   // this.myObs.next([
//     //   //     { label: 'testgg', value: 0 },
//     //   //     { label: 'test1gg', value: 1 },
//     //   //     { label: 'test2gg', value: 2 },
//     //   //     { label: 'test3gg', value: 3 },
//     //   //   ]);
//     // }, 8000);
//   }

//   questions: QuestionBase[] = [
//     {
//       svgIcon: 'search',
//       label: '1',
//       subLabel: 'sub label',
//     },
//     {
//       svgIcon: 'search',
//       label: '2',
//       subLabel: 'sub label',
//     }, {
//       svgIcon: 'search',
//       label: '3',
//       subLabel: 'sub label',
//     }, {
//       svgIcon: 'search',
//       label: '4',
//       subLabel: 'sub label',
//     }, {
//       svgIcon: 'search',
//       label: '5',
//       subLabel: 'sub label',
//     },{
//       svgIcon: 'search',
//       label: '6',
//       subLabel: 'sub label',
//     },
//   ]

//   actions = [
//     { type: 'file', action: FormActions.EDIT },
//     { type: 'form', action: FormActions.EDIT },
//     {
//       type: 'form',
//       action: FormActions.SUBMIT,
//     },
//   ];
//   show$: Observable<boolean> = of(true);
//   constructor(
//     private formService: FormService,
//     private pageHeadlineService: PageHeadlineService
//   ) {}

//   // cards: MenuCard[] = [
//   //   { label: 'string', svgIcon: 'home', active: true, path: 'no' },
//   // ];
//   // status: StatusBarsModel = {
//   //   label: 'statusBars',
//   //   authorizedBars: 3,
//   //   totalBars: 8,
//   // };
//   ngOnInit(): void {
//     this.pageHeadlineService.emitPageHeadlineItems([
//       { value: 'כותרת' },
//       { value: 'כותרת' },
//       { value: 'כותרת' },
//       { value: new Date(), format: 'date' },
//       {
//         value: {
//           label: 'statusBars',
//           authorizedBars: 3,
//           totalBars: 6,
//         },
//         template: true,
//       },
//     ]);
//   }
}
