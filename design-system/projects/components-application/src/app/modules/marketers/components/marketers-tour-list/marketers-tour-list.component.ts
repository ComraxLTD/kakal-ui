import { Component, OnInit } from '@angular/core';
import { ControlBase, OptionsModel, RowActionModel, TableBase } from '../../../../../../../kakal-ui/src/public-api';
import { MarketersTourListService } from './marketers-tour-list.service';

@Component({
  selector: 'app-marketers-tour-list',
  templateUrl: './marketers-tour-list.component.html',
  styleUrls: ['./marketers-tour-list.component.scss'],
})
export class MarketersTourListComponent implements OnInit {
  dataSource: any[] = [];

  columns: TableBase[] = [];

  select: ControlBase[] = [];
  selectOptions: OptionsModel[] = [];
  autoComplete: ControlBase[] = [];
  data:any[]=[]
  constructor(private marketersTourListService: MarketersTourListService) {}

  ngOnInit(): void {
    this.select = this.marketersTourListService.select;
    this.selectOptions = this.marketersTourListService.selectOptions;
    this.dataSource = this.marketersTourListService.dataSource;
    this.columns = this.marketersTourListService.columns;
    this.autoComplete = this.marketersTourListService.autoComplete;
    this.data = this.marketersTourListService.data;
  }

  rowActions: RowActionModel[] = [{ type: 'inlineExpand', icon: 'expand' }];
  onExpand(event: any) {
    console.log(event);
  }
  onQueryChanged(event: any) {
    console.log(event);
  }

  onSelectChanged(event: any) {
    console.log(event);
  }

  onOpenChanged(event: any) {
    console.log(event);
  }
}
