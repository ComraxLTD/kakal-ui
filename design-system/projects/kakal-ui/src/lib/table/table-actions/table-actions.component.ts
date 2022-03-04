import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';

import { TableEvent } from '../models/table.events';
import { ActionState, ActionStateRules } from './table-actions.model';
import { RowsState, TableState } from '../models/table.state';
import { TableDataSource } from '../models/table-datasource';

import { merge, Observable } from 'rxjs';
import { filter, map, mapTo, take, tap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

export interface ButtonActionState {
  editState?: ActionState;
  deleteState?: ActionState;
}

@Component({
  selector: 'kkl-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss'],
})
export class TableActionsComponent implements OnInit {

  @Input() rowState: RowsState;
  // @Input() dataSource: TableDataSource;
  @Input() tableState: TableState;
  @Input() actionStateRules: ActionStateRules;

  @Input() hasEdit: boolean;
  @Input() hasDelete: boolean;

  // custom button slot
  @Input() public startSlot: TemplateRef<any>;
  @Input() public endSlot: TemplateRef<any>;

  @Output() edit: EventEmitter<RowsState> = new EventEmitter<RowsState>();
  @Output() delete: EventEmitter<RowsState> = new EventEmitter<RowsState>();
  @Output() close: EventEmitter<RowsState> = new EventEmitter<RowsState>();
  @Output() save: EventEmitter<RowsState> = new EventEmitter<RowsState>();

  public buttonActionState$: Observable<ButtonActionState>;

  constructor(private dataSource: TableDataSource<any>) {}

  private validate() {
    if (!this.dataSource) {
      throw new Error('TableDataSource instance is required');
    }
  }

  ngOnInit(): void {
    this.validate();
    this.buttonActionState$ = this.setButtonActionState();
  }

  private setButtonActionState() {
    const defaultState$ = this.onButtonsStateDefault();
    const editState$ = this.onButtonsStateOnEdit();
    const closeState$ = this.onButtonStateOnClose();

    return merge(defaultState$, editState$, closeState$);
  }

  private setButtonsStateOnDefault() {
    const editState = {
      show: this.actionStateRules?.showEdit(this.rowState.item) || this.hasEdit,
      disabled: this.actionStateRules?.disableEdit(this.rowState.item),
    } as ActionState;

    const deleteState = {
      show:
        this.actionStateRules?.showDelete(this.rowState.item) || this.hasDelete,
      disabled: this.actionStateRules?.disableDelete(this.rowState.item),
    } as ActionState;
    return { editState, deleteState };
  }

  private onButtonsStateDefault(): Observable<ButtonActionState> {
    return this.dataSource
      .getTableStateByEvent([TableEvent.DEFAULT])
      .pipe(mapTo(this.setButtonsStateOnDefault()));
  }

  private onButtonsStateOnEdit(): Observable<ButtonActionState> {
    const id = this.rowState.item[this.rowState.key];
    return this.dataSource.listen$.edit().pipe(
      filter((rowState: RowsState) => rowState.item[rowState.key] === id),
      map((rowState: RowsState) => rowState.group.formGroup),
      map((formGroup: FormGroup) => {
        const editState = {
          show: false,
          valid: formGroup.valid,
          event: 'edit',
        } as ActionState;

        const deleteState = {
          show: false,
          event: 'edit',
        } as ActionState;
        return { editState, deleteState };
      })
    );
  }

  private onButtonStateOnClose() {
    const id = this.rowState.item[this.rowState.key];
    return this.dataSource.listen$.close().pipe(
      filter((rowState: RowsState) => rowState.item[rowState.key] === id),
      mapTo(this.setButtonsStateOnDefault())
    );
  }

  public onDelete() {
    this.delete.emit({ ...this.rowState });
  }

  public onEdit() {
    this.edit.emit({ ...this.rowState });
  }

  public onClose(event: TableEvent) {
    this.close.emit({
      ...this.rowState,
      event,
    });
  }

  public onSave(event: TableEvent) {
    this.save.emit({
      ...this.rowState,
      event,
      item: { ...this.rowState.item, ...this.rowState.group.getValue() },
    });
  }
}
