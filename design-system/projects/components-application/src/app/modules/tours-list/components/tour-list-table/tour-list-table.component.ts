import { Component, OnInit } from '@angular/core';
import { TableBase }from '../../../../../../../kakal-ui/src/public-api';
import { TourListTableService } from './tour-list-table.service';

@Component({
  selector: 'app-tour-list-table',
  templateUrl: './tour-list-table.component.html',
  styleUrls: ['./tour-list-table.component.scss'],
})
export class TourListTableComponent implements OnInit {
  dataSource!: any[];
  columns!: TableBase[];
  expandColumns!: TableBase[];

  constructor(private tourListTableService: TourListTableService) {}

  ngOnInit(): void {
    this.dataSource = [...this.tourListTableService.dataSource];
    this.columns = [...this.tourListTableService.columns];
    this.expandColumns = [...this.tourListTableService.providerColumns];
  }
  onExpand(event: any) {
    console.log(event);
  }
}
