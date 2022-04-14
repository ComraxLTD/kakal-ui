import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageHeadlineModel } from '../../../kakal-ui/src/lib/page-headline/page-headline.model';
// import { ControlBase, OptionsModel, RowActionModel, TableBase } from '../../../kakal-ui/src/public-api';
import {PageHeadlineService} from '../../../kakal-ui/src/lib/page-headline/page-headline.service';
import {IconComponent} from '../../../kakal-ui/src/lib/icon/icon.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private pageHeadlineService: PageHeadlineService) { }
  iconComponent = IconComponent;

  iconsData = [
    {key:'search',color:'primary',size:5},
    {key:'edit',size:2},
    {key:'keyboard_arrow_down',color:'accent'},
    {key:'calendar'}
  ]
  ngOnInit() {
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

  //   columns: TableBase[] = [
  //     { key: 'committeeId', label: 'Id', controlType: 'number',},
  //     { key: 'remiTikimCount', label: 'remiTikimCount', controlType: 'text', button: {type: 'inlineExpand', icon: 'expand'}},
  //     { key: 'committeeDate', label: 'תאריך', controlType: 'text', },
  //   ];

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
