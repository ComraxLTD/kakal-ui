import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Observable, of } from 'rxjs';
import { ColumnModel } from '../../components/columns/column.model';
import { TableOptions } from '../../components/table/table.component';

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
  
  public data$: Observable<T[]>;

  constructor() {}

  ngOnInit(): void {
    this.data$ = of(this.data);
    console.log(this.options)
  }
}
