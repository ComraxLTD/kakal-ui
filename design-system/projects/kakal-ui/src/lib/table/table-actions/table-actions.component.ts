import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';


import { map } from 'rxjs/operators';
import { ColumnModel } from '../../columns/column.model';
import { TableEvent } from '../models/table-events';
import { TableRowModel } from '../models/table-row.model';
import { Observable, of } from 'rxjs';

export interface ActionState {
  show: boolean;
  disabled: boolean;
  event?: TableEvent;
  event$?: Observable<TableEvent>;
}

export interface ButtonActionState {
  add$?: Observable<ActionState>;
  edit$?: Observable<ActionState>;
  delete$?: Observable<ActionState>;
  events$?: Observable<TableEvent>;
}

@Component({
  selector: 'kkl-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss'],
})
export class TableActionsComponent implements OnInit {
  @Input() row: TableRowModel<Object>;
  @Input() column: ColumnModel<Object>;
  @Input() panel: MatExpansionPanel;
  @Input() tableActionState: ButtonActionState;

  // boolean for render default actions
  @Input() public hasDelete: boolean;

  // handle table events
  @Input() public events$: Observable<TableEvent>;

  // custom button slot
  @Input() public startSlot: ElementRef;
  @Input() public endSlot: ElementRef;

  @Output() edit: EventEmitter<void> = new EventEmitter<void>();
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancel: EventEmitter<TableEvent> = new EventEmitter<TableEvent>();
  @Output() save: EventEmitter<TableEvent> = new EventEmitter<TableEvent>();

  public editButton$: Observable<ActionState>;
  public deleteState$: Observable<ActionState>;

  constructor() {}

  ngOnInit(): void {
    this.validInputs();

    if (this.events$) {
      this.editButton$ = this.setEditButton$();
    }

    this.deleteState$ = this.setDeleteState();
  }

  private setEditButton$() {
    return this.events$.pipe(
      map((event: TableEvent) => {
        const disabled =
          (event === 'edit' || event === 'create') && !this.row.editable;
        const show = (event === 'edit' || event === 'create') && this.row.editable;
        return { show, event, disabled };
      })
    );
  }

  private setDeleteState(): Observable<ActionState> {
    if (this.tableActionState) {
      return this.tableActionState.delete$;
    } else {
      return this.handleShowDelete();
    }
  }

  private handleShowDelete(): Observable<ActionState> {
    if (this.events$ && this.hasDelete) {
      return this.setEditButton$().pipe(
        map(({ show, event }) => {
          return { show: !show, disabled: show, event };
        })
      );
    } else {
      return of({ show: this.hasDelete, disabled: !this.hasDelete });
    }
  }

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
      throw new Error('kkl-table-actions must get row input');
    }
  }
}
