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
  @Input() row: TableRowModel<Object>;
  @Input() column: TableColumnModel<Object>;

  @Input() hasEdit: boolean;
  @Input() hasDelete: boolean;

  @Input() event$: Observable<TableEvent>;
  @Input() buttonsActionState: ButtonActionState;

  // custom button slot
  @Input() public startSlot: TemplateRef<any>;
  @Input() public endSlot: TemplateRef<any>;

  @Output() edit: EventEmitter<void> = new EventEmitter<void>();
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancel: EventEmitter<TableEvent> = new EventEmitter<TableEvent>();
  @Output() save: EventEmitter<TableEvent> = new EventEmitter<TableEvent>();

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
    this.delete.emit();
  }

  public onEdit() {
    this.edit.emit();
  }

  public onCancel(event: TableEvent) {
    this.cancel.emit(event);
  }

  public onSave(event: TableEvent) {
    this.save.emit(event);
  }

  private validInputs() {
    // add validation
    if (!this.row) {
      throw new Error('kkl-table-actions must get row model as Input');
    }
  }
}
