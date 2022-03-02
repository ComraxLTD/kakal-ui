import { Component, OnInit } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import {
  TableDataSource,
  FormService,
  TableColumnModel,
} from '../../../../../kakal-ui/src/public-api';
import { DEMO_DATA } from './mock_data';

export interface RootObject {
  _id: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  email: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public tableDataSource = new TableDataSource<RootObject>();

  // demo data from server
  private demoStore$: Observable<RootObject[]> = of(DEMO_DATA);

  private columns: TableColumnModel<RootObject>[] = [
    { columnDef: 'isActive', label: 'status' },
    { columnDef: 'balance', label: 'balance' },
    { columnDef: 'age', label: 'age' },
    { columnDef: 'email', label: 'email' },
  ];

  public data$: Observable<any[]>;
  public columns$: Observable<TableColumnModel[]>;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.data$ = this.setData();
    this.columns$ = this.setColumns$();
  }

  private setData() {
    const storeData$ = this.demoStore$;

    return storeData$.pipe(
      switchMap((data) => {
        this.tableDataSource.load(data);
        return this.tableDataSource.connect();
      })
    );
  }

  private setColumns$() {
    return this.tableDataSource.connectColumns(this.columns);
  }
}
