import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';

import { filter, map } from 'rxjs/operators';
import { TableColumnModel } from '../../columns/column.model';
import { TableEvent } from '../models/table-event';
import { TableRowModel } from '../models/table-row.model';
import { merge, Observable, of } from 'rxjs';
import { ActionState } from './table-actions.model';
import { RowsState } from '../models/table.state';
import { TableDataSource } from '../models/table-datasource';

export interface ButtonActionState {
  edit$?: Observable<ActionState>;
  delete$?: Observable<ActionState>;
}

@Component({
  selector: 'kkl-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss'],
})
export class TableActionsComponent implements OnInit {
  @Input() row: TableRowModel;
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
    this.validInputs();

    if (this.event$ && this.hasEdit) {
      this.editState$ = this.setEditStateByEvent$();
    }

    this.deleteState$ = this.setDeleteState();
  }

  private setEditStateByEvent$() {
    const onEdit$ = this.dataSource.listen$.edit().pipe(
      filter((state) => state.row.item.id === this.row.item.id),
      map((state: RowsState) => {
        const { row, event } = state;
        const disabled = !row.editable;
        const show = !row.editable;

        return { show, event, disabled, valid: row.form.formGroup.valid };
      })
    );

    const onDefault$ = this.dataSource.listen$.default().pipe(
      map((state: RowsState) => {
        const { event } = state;
        const disabled = false;
        const show = true;

        return { show, event, disabled, valid: false };
      })
    );

    return merge(onDefault$, onEdit$);
  }
  private setDeleteStateByEvent$() {
    return this.event$.pipe(
      map((event: TableEvent) => {
        const disabled = this.row.editable;
        const show =
          (event === 'edit' || event === 'create') && this.row.editable;
        return { show, event, disabled };
      })
    );
  }

  private setDeleteState(): Observable<ActionState> {
    if (this.buttonsActionState) {
      return this.buttonsActionState.delete$;
    } else {
      return of({ show: this.hasDelete, disabled: !this.hasDelete });
    }
  }

  // private handleShowDelete(): Observable<ActionState> {
  //   if (this.event$ && this.hasDelete) {
  //     return this.setEditState$().pipe(
  //       map(({ show, event }) => {
  //         return { show: !show, disabled: show, event };
  //       })
  //     );
  //   } else {
  //     return of({ show: this.hasDelete, disabled: !this.hasDelete });
  //   }
  // }

  public onDelete() {
    this.delete.emit({ row: this.row });
  }

  public onEdit() {
    this.edit.emit({ row: this.row });
  }

  public onCancel(event: TableEvent) {
    this.cancel.emit({ row: this.row, column: this.column, event });
  }

  public onSave(event: TableEvent) {
    this.save.emit({ row: this.row, column: this.column, event });
  }

  private validInputs() {
    // add validation
    if (!this.row) {
      throw new Error('kkl-table-actions must get row model as Input');
    }
  }
}
