import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StatusBarsModel } from '../../../kakal-ui/src/lib/status-bars/status-bars.model';
import { RowActionModel, TableBase } from '../../../kakal-ui/src/public-api';

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

  columns: TableBase[] = [
    {
      controlType: 'text',
      key: 'poCodes',
        label: `PO#`,
        group: 'poCodes',
    },
    {
      controlType: 'text',
      key: 'suppliers',
        label: `Supplier`,
        group: 'poCodes',
    },
    {
      controlType: 'date',
      key: 'recordedTime',
        label: `Recorded time`,
        filter: false,
        editable: false,
        button:
          {
            type: 'inlineExpand',
            icon: 'expand',
          }
    },
    {
      controlType: 'text',
      key: 'status',
        label: `Status`,
        colIcon: 'add'
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

  status:StatusBarsModel = {
    label : "statusBars",
    authorizedBars : 3,
    totalBars : 6
    }

  description: string = ''



  control: FormControl = new FormControl();

  constructor() { }

  // ngOnInit(): void {
  //   // this.ComraxFormService.getMultiTypeSampleObject().subscribe(res => this.control.setValue(res.email))
  // }
  // ngOnInit(): void {
  // }

  editRow(event:any) {
    console.log(event);
  }


  rowActions: RowActionModel[] = [
    {
      type: 'inlineEdit',
      icon: 'edit',
      // label: 'Edit'
    },
    {
      type: 'inlineDelete',
      icon: 'cancel',
      // label: 'Delete'
    },
    {
      type: 'visibility',
      icon: 'visibility',
      // label: 'Show'
    },
  ]
}
