import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlBase, OptionsModel, RowActionModel, TableBase } from '../../../kakal-ui/src/public-api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor() { }

  ngOnInit() {
    this.data = [{ key: 'First', label: 'בדיקה' }, { key: 'Second', label: 'test' }, { key: 'Third', label: 'עמוד 3' }];
  }

  dataSource: any[] = [
    {
      committeeId: '1',
      remiTikimCount: 'remiTikimCount',
      committeeDate: 'committeeDate'
    },
    {
      committeeId: '2',
      remiTikimCount: 'remiTikimCount',
      committeeDate: 'committeeDate'
    },
    {
      committeeId: '3',
      remiTikimCount: 'remiTikimCount',
      committeeDate: 'committeeDate'
    },
    {
      committeeId: '4',
      remiTikimCount: 'remiTikimCount',
      committeeDate: 'committeeDate'
    },
  ]

    columns: TableBase[] = [
      { key: 'committeeId', label: 'Id', controlType: 'number',},
      { key: 'remiTikimCount', label: 'remiTikimCount', controlType: 'text', button: {type: 'inlineExpand', icon: 'expand'}},
      { key: 'committeeDate', label: 'תאריך', controlType: 'text', },
    ];

  rowActions: RowActionModel[] = [
    {
      type: 'inlineEdit',
      icon: 'edit',
      label: 'Edit'
    },
    {
      type: 'inlineDelete',
      icon: 'cancel',
      label: 'Delete'
    },
    {
      type: 'visibility',
      icon: 'visibility',
      label: 'Show'
    },
  ]

  data!: { key: string, label: string }[];


  onQueryChanged(event:any) {
    console.log(event);
  }

  onOpenChanged(event:any) {
    console.log(event);
  }

  onExpand(event: any) {
    console.log(event);
  }

}
