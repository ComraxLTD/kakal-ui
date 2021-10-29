import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ColumnModel } from '../../components/columns/column.model';
import { RowModel } from '../../components/table/models/row.model';
import {
  TableOptions,
  TableState,
} from '../../components/table/table.component';

@Component({
  selector: 'kkl-table-ex',
  templateUrl: './table-ex.component.html',
  styleUrls: ['./table-ex.component.scss'],
})
export class TableExComponent<T> implements OnInit {
  @Input() public theme: ThemePalette;

  @Input() public data: T[];
  @Input() public columns: ColumnModel<T>[];
  @Input() public model: T;
  @Input() public options: TableOptions<T>;

  @Input() public paginator: boolean;
  @Input() public expendable: boolean;
  @Input() public accordion: boolean;
  @Input() public selectable: boolean;
  @Input() public hasState: boolean;
  @Input() public hasFooter: boolean;
  @Input() public hasActions: boolean;
  @Input() public hasForm: boolean;

  public data$: Observable<T[]>;

  private tableState$: BehaviorSubject<TableState<T>>;

  constructor() {}

  ngOnInit(): void {
    this.data$ = of(this.data);

    console.log(this.accordion)
    console.log(this.expendable)

    if (this.expendable) {
      this.columns[3].type = 'custom';
    }

  }

  public onRegister(event: BehaviorSubject<TableState<T>>): void {
    this.tableState$ = event;

    if(this.hasForm) {
      this.tableState$.next({ mode: 'form' });
    }
  }

  public onExpand(row: RowModel<T>, column: ColumnModel<T>) {
    this.tableState$.next({ mode: 'expand', ids: [row.item['id'], 3], column });
  }
}
