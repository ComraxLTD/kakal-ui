import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';

import { map } from 'rxjs/operators';
import { TableColumnModel } from '../../columns/column.model';
import { TableEvent } from '../models/table-event';
import { TableRowModel } from '../models/table-row.model';
import { Observable, of } from 'rxjs';
import { ActionState } from './table-actions.model';
import { RowsState } from '../models/table.state';

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

  public editButton$: Observable<ActionState>;
  public deleteState$: Observable<ActionState>;

  constructor() {}

  ngOnInit(): void {
    this.validInputs();

    if (this.event$ && this.hasEdit) {
      this.editButton$ = this.setEditStateByEvent$();
    }

    this.deleteState$ = this.setDeleteState();
  }

  private setEditStateByEvent$() {
    return this.event$.pipe(
      map((event: TableEvent) => {
        console.log(event);

        const disabled =
          (event === 'edit' || event === 'create') && !this.row.editable;
        const show =
          (event === 'edit' || event === 'create') && this.row.editable;

        return { show, event, disabled };
      })
    );
  }
  private setDeleteStateByEvent$() {
    return this.event$.pipe(
      map((event: TableEvent) => {
        const disabled =
          (event === 'edit' || event === 'create') && !this.row.editable;
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
  //     return this.setEditButton$().pipe(
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
