import { Component, OnInit } from '@angular/core';
import {
  CardStepModel,
  FormActions,
  FormGrid,
  FormService,
  Question,
  QuestionGroupModel,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  dataSource = [
    {
      poCodes: 'asdasdas',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '---------',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '{[]}[{}]({[]})[){})]',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'sfd45sfd45',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'fgd56gd56fgfd56gd',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '[][][][][][][]',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'asdasdas',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'qqqqqqq',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '---------',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '{}{}{}{}{}{}{}{}{}',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'fgd56gd56fgfd56gd',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'fgd56gd56fgfd56gd',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'qqqqqqq',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'asdasdas',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'asdasdas',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '[][][][][][][]',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '---------',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'asdasdas',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '{[]}[{}]({[]})[){})]',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'qqqqqqq',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '{[]}[{}]({[]})[){})]',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'fgd56gd56fgfd56gd',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '---------',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '{}{}{}{}{}{}{}{}{}',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'qqqqqqq',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'qqqqqqq',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'asdasdas',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'asdasdas',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'fgd56gd56fgfd56gd',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '_________',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '[][][][][][][]',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'asdasdas',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '[][][][][][][]',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '_________',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '{}{}{}{}{}{}{}{}{}',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'asdasdas',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'fgd56gd56fgfd56gd',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'fgd56gd56fgfd56gd',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'asdasdas',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '{[]}[{}]({[]})[){})]',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '_________',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '123123',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '[][][][][][][]',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '{}{}{}{}{}{}{}{}{}',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'fgd56gd56fgfd56gd',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '_________',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '123123',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '[][][][][][][]',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'fgd56gd56fgfd56gd',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '{[]}[{}]({[]})[){})]',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '_________',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '123123',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '{}{}{}{}{}{}{}{}{}',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'fgd56gd56fgfd56gd',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '[][][][][][][]',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '_________',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '123123',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '123123',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '{[]}[{}]({[]})[){})]',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'fgd56gd56fgfd56gd',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '{}{}{}{}{}{}{}{}{}',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '_________',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '123123',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'sfd45sfd45',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '[][][][][][][]',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'fgd56gd56fgfd56gd',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '[][][][][][][]',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'sfd45sfd45',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '_________',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '---------',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'fgd56gd56fgfd56gd',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'qqqqqqq',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '{}{}{}{}{}{}{}{}{}',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'sfd45sfd45',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'sfd45sfd45',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'sfd45sfd45',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'qqqqqqq',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'asdasdas',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '{}{}{}{}{}{}{}{}{}',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '---------',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'sfd45sfd45',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'qqqqqqq',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '{[]}[{}]({[]})[){})]',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '{[]}[{}]({[]})[){})]',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '---------',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'qqqqqqq',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'sfd45sfd45',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '{}{}{}{}{}{}{}{}{}',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '[][][][][][][]',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '---------',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '{[]}[{}]({[]})[){})]',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'sfd45sfd45',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'asdasdas',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'asdasdas',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'qqqqqqq',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'asdasdas',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'asdasdas',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'asdasdas',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: '{}{}{}{}{}{}{}{}{}',
      suppliers: 'suppliers',
      status: 'status',

    },
    {
      poCodes: 'asdasdas',
      suppliers: 'suppliers',
      status: 'status',

    },
  ];
  constructor(private formService: FormService) {}

  actions = [
    { type: 'file', action: FormActions.EDIT },
    { type: 'form', action: FormActions.EDIT },
    {
      type: 'form',
      action: FormActions.SUBMIT,
    },
  ];

  steps: CardStepModel[] = [
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

  // constructor() {}

  ngOnInit(): void {
    // setTimeout(() => {
      // this.dataSource = ELEMENT_DATA;
    // }, 5000);
    // this.dataSource = [
    //   {
    //     city: { label: 'Tel Aviv', value: 5 },
    //     dob: '2022-03-28T00:00:00Z',
    //     id: 1,
    //     name: 'Hillyer Bowkley',
    //     occupation: 'Physical Therapy Assistant',
    //     yearsOfExperience: 32,
    //   },
    // ];
  }

  key: string = 'myDatePicker';

  // status:StatusBarsModel = {
  //   label : "statusBars",
  //   authorizedBars : 3,
  //   totalBars : 6
  //   }

  description: string = ''



  // control: FormControl = new FormControl();

  // constructor() { }

  // ngOnInit(): void {
  //   // this.ComraxFormService.getMultiTypeSampleObject().subscribe(res => this.control.setValue(res.email))
  // }
  // ngOnInit(): void {
  // }

  editRow(event:any) {
    console.log(event);
  }


  // rowActions: RowActionModel[] = [
  // questions: Question[] = [
  //   {
  //     key: 'name',
  //   },
  //   {
  //     key: 'select',
  //     controlType: 'select',
  //     label: 'select',
  //     options: [{ label: 'test', value: 0 }],
  //   },
  //   {
  //     key: 'email',
  //     controlType: 'email',
  //     // offset - set to none to remove padding from the end
  //     gridProps: { offset: 'none' },
  //   },
  //   {
  //     key: 'phone',
  //     controlType: 'checkbox',
  //   },
  //   {
  //     key: 'date',
  //     controlType: 'date',
  //     // offset - set to none to remove padding from the end
  //     // gridProps: { offset: 'none' },
  //   },
  //   {
  //     key: 'upload',
  //     controlType: 'upload',
  //     // offset - set to none to remove padding from the end
  //     gridProps: { offset: 'none' },
  //   },
  //   {
  //     key: 'text',
  //     controlType: 'textarea',
  //   },
  // ];
  // groupFlex!: QuestionGroupModel;

  // ngOnInit(): void {
  //   // flex form ex
  //   this.groupFlex = this.setGroup(this.questions, {
  //     cols: 3,
  //     variant: 'flex',
  //   });
  // }

  // private setGroup(questions: Question[], grid: FormGrid) {
  //   return this.formService.createQuestionGroup({
  //     questions,
  //     key: 'test',
  //     options: { gridProps: grid },
  //   });
  // }
}
