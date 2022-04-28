import { Component, OnInit } from '@angular/core';
import { RowActionModel, TableBase } from '../../../../../../../../../kakal-ui/src/public-api';
import { ReservationSummaryService } from './reservation-summary.service';

@Component({
  selector: 'app-reservation-summary',
  templateUrl: './reservation-summary.component.html',
  styleUrls: ['./reservation-summary.component.scss'],
})
export class ReservationSummaryComponent implements OnInit {
  showCancel: boolean = false;
  datasource!: any[];
  expandDatasource!: any[];
  columns!: TableBase[];

  expandColumns!: TableBase[];

  rowActions!: RowActionModel[];
  constructor(private reservationSummaryService: ReservationSummaryService) {}

  ngOnInit(): void {
    this.datasource = this.reservationSummaryService.dataSource;
    this.expandDatasource = this.reservationSummaryService.expandDatasource;
    this.expandColumns = this.reservationSummaryService.expandColumns;
    this.columns = this.reservationSummaryService.columns;
    this.rowActions = this.reservationSummaryService.rowActions;
  }
  onExpand(event: any): void {
    console.log(event);
  }
  toggleShow(): void {
    this.expandColumns = this.showCancel
      ? this.reservationSummaryService.expandColumns
      : this.reservationSummaryService.canceldExpandColumns;
    this.expandDatasource = this.showCancel
      ? this.reservationSummaryService.expandDatasource
      : this.reservationSummaryService.canceldExpandDatasource;
    this.showCancel = !this.showCancel;
  }
}
