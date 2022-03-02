import { Component, OnInit } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import {
  TableDataSource,
  FormService,
  TableColumnModel,
} from '../../../../../kakal-ui/src/public-api';

export interface Item {
  id: number;
  status: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public dataSource = new TableDataSource<Item>();

  // demo data from server
  private demoStore$: Observable<Item[]> = of([
    { id: 1, status: 'active' },
    { id: 2, status: 'disable' },
    { id: 3, status: 'active' },
  ]);

  private columns: TableColumnModel<Item>[] = [
    { columnDef: 'id', label: 'id' },
    { columnDef: 'status', label: 'status' },
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
        this.dataSource.load(data);
        return this.dataSource.connect();
      })
    );
  }

  private setColumns$() {
    return this.dataSource.connectColumns(this.columns);
  }
}
