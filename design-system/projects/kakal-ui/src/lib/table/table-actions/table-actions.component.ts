import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';

import { filter, map, mapTo } from 'rxjs/operators';
import { TableColumnModel } from '../../columns/column.model';
import { TableEvent } from '../models/table-event';
import { TableRowModel } from '../models/table-row.model';
import { merge, Observable, of } from 'rxjs';
import { ActionState } from './table-actions.model';
import { RowsState } from '../models/table.state';
import { TableDataSource } from '../models/table-datasource';

export interface ButtonActionState {
  edit?: ActionState;
  delete?: ActionState;
}

@Component({
  selector: 'kkl-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss'],
})
export class TableActionsComponent implements OnInit {
  @Input() index: number;
  @Input() item: any;
  @Input() column: TableColumnModel;
  @Input() dataSource: TableDataSource;

  @Input() hasEdit: boolean;
  @Input() hasDelete: boolean;

  @Input() event$: Observable<TableEvent>;
  @Input() buttonsActionState: ButtonActionState;

  // custom button slot
  @Input() public startSlot: TemplateRef<any>;
  @Input() public endSlot: TemplateRef<any>;

  @Output() edit: EventEmitter<RowsState> = new EventEmitter<RowsState>();
  @Output() delete: EventEmitter<RowsState> = new EventEmitter<RowsState>();
  @Output() cancel: EventEmitter<RowsState> = new EventEmitter<RowsState>();
  @Output() save: EventEmitter<RowsState> = new EventEmitter<RowsState>();

  public editState$: Observable<ActionState>;
  public deleteState$: Observable<ActionState>;

  constructor() {}

  ngOnInit(): void {
    this.editState$ = this.setEditState();

    this.deleteState$ = this.setDeleteState();
  }

  private setEditStateOnDefault() {
    return this.dataSource.connectTableState().pipe(
      filter((tableState) => tableState.event === 'default'),
      map((tableState) => {
        return tableState.editing;
      }),
      mapTo({
        show: true,
        disabled: false,
      } as ActionState)
    );
  }

  private setEditStateOnEdit() {
    return this.dataSource.connectTableState().pipe(
      filter((tableState) => tableState.event === 'edit'),
      map((tableState) => {
        return tableState.editing;
      }),
      // filter((editing) => editing.indexOf(this.item.id) !== -1),
      map((editing) => {

        console.log(editing)

        return {
          show: editing.indexOf(this.item.id) === -1,
          disabled: editing.indexOf(this.item.id) !== -1,
        } as ActionState;
      })
    );
  }

  private setEditState() {
    const default$ = this.setEditStateOnDefault();
    const edit$ = this.setEditStateOnEdit();

    return merge(default$, edit$);

    // return this.dataSource.connectTableState().pipe(
    //   map((tableState) => {
    //     console.log(tableState);
    //     return tableState.editing;
    //   }),
    //   // filter((editing) => !!editing[this.index]),
    //   map((editing: number[]) => {
    //     return {
    //       show: true,
    //       disabled: editing.indexOf(this.item.id) === -1,
    //     } as ActionState;
    //   })
    // );
  }

  // private setEditStateByEvent$() {
  //   const onEdit$ = this.dataSource.listen$.edit().pipe(
  //     filter((state) => state.row.item.id === this.row.item.id),
  //     map((state: RowsState) => {
  //       const { row, event } = state;
  //       const disabled = !row.editable;
  //       const show = !row.editable;

  //       return { show, event, disabled, valid: row.form.formGroup.valid };
  //     })
  //   );

  //   const onDefault$ = this.dataSource.listen$.default().pipe(
  //     map((state: RowsState) => {
  //       const { event } = state;
  //       const disabled = false;
  //       const show = true;

  //       return { show, event, disabled, valid: false };
  //     })
  //   );

  //   return merge(onDefault$, onEdit$);
  // }
  // private setDeleteStateByEvent$() {
  //   return this.event$.pipe(
  //     map((event: TableEvent) => {
  //       const disabled = this.row.editable;
  //       const show =
  //         (event === 'edit' || event === 'create') && this.row.editable;
  //       return { show, event, disabled };
  //     })
  //   );
  // }

  private setDeleteState(): Observable<ActionState> {
    if (this.buttonsActionState) {
      return of(this.buttonsActionState.delete);
    } else {
      return of({ show: this.hasDelete, disabled: !this.hasDelete });
    }
  }

  public onDelete() {
    this.delete.emit({ item: this.item, itemIndex: this.index });
  }

  public onEdit() {
    this.edit.emit({ item: this.item, itemIndex: this.index });
  }

  public onCancel(event: TableEvent) {
    this.cancel.emit({
      item: this.item,
      column: this.column,
      event,
      itemIndex: this.index,
    });
  }

  public onSave(event: TableEvent) {
    this.save.emit({
      item: this.item,
      column: this.column,
      event,
      itemIndex: this.index,
    });
  }
}
