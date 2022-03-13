import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { FormControlStatus, FormGroup } from '@angular/forms';
import {
  Observable,
  merge,
  filter,
  map,
  switchMap,
  startWith,
  distinctUntilChanged,
  tap,
  pairwise,
} from 'rxjs';
import { TableDataSource } from '../../../models/table-datasource';
import { RowState, TableState, ActionState } from '../../../models/table.state';
import { ActionStateRules } from '../../../models/table-actions';
import { FormActions } from '../../../../form/models/form.actions';
import { TableSelector } from '../../../models/table.selectors';

export interface ButtonActionState {
  editState?: ActionState;
  deleteState?: ActionState;
}

@Component({
  selector: 'kkl-actions-cell',
  templateUrl: './table-action-cell.component.html',
  styleUrls: ['./table-action-cell.component.scss'],
})
export class TableActionCellComponent implements OnInit {
  @Input() rowState: RowState;
  @Input() actionStateRules: ActionStateRules;

  @Input() hasEdit: boolean;
  @Input() hasDelete: boolean;

  // custom button slot
  @Input() public startSlot: TemplateRef<any>;
  @Input() public endSlot: TemplateRef<any>;

  @Output() edit: EventEmitter<RowState> = new EventEmitter<RowState>();
  @Output() delete: EventEmitter<RowState> = new EventEmitter<RowState>();
  @Output() cancel: EventEmitter<RowState> = new EventEmitter<RowState>();
  @Output() submit: EventEmitter<RowState> = new EventEmitter<RowState>();

  public buttonActionState$: Observable<ButtonActionState>;

  constructor(private tableDataSource: TableDataSource) {}

  ngOnInit(): void {
    this.buttonActionState$ = this.setButtonActionState();
  }

  private setButtonActionState() {
    const defaultState$ = this.onDefaultButtonsState();
    const editState$ = this.onEditButtonsState();
    const cancelState$ = this.onCancelButtonState();
    const createState$ = this.onCreateButtonState();

    return merge(defaultState$, editState$, cancelState$, createState$);
  }

  private getButtonsStateOnDefault() {
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

  private onDefaultButtonsState(): Observable<ButtonActionState> {
    return this.tableDataSource
      .listenByAction({ action: FormActions.DEFAULT })
      .pipe(map((_) => this.getButtonsStateOnDefault()));
  }

  private setFormState(formGroup: FormGroup, event: FormActions) {
    return formGroup.statusChanges.pipe(
      startWith(formGroup.status),
      distinctUntilChanged(),
      map((status: FormControlStatus) => {
        const editState = {
          show: false,
          valid: status === 'VALID',
          event,
        } as ActionState;

        const deleteState = {
          show: false,
          event,
        } as ActionState;
        return { editState, deleteState };
      })
    );
  }

  private getRowEditState(selectAction: FormActions) {
    return this.tableDataSource.listenByAction({ action: selectAction }).pipe(
      map((tableState: TableState) => {
        const id = this.rowState.item[this.rowState.key];
        const { forms, editing, action } = tableState;
        const group = forms[id];
        const isEditing = editing.indexOf(id) !== -1;
        return { group, isEditing, action };
      })
    );
  }

  private onEditButtonsState(): Observable<ButtonActionState> {
    return this.getRowEditState(FormActions.EDIT).pipe(
      filter(({ group, isEditing }) => isEditing),
      switchMap(({ group, isEditing }) => {
        const { formGroup } = group;
        return this.setFormState(formGroup, FormActions.EDIT);
      })
    );
  }

  private onCancelButtonState() {
    const editClose$ = this.getRowEditState(FormActions.CANCEL).pipe(
      filter(({ group, isEditing }) => !isEditing),
      map((_) => this.getButtonsStateOnDefault())
    );

    const createClose$ = this.tableDataSource.select(TableSelector.ACTION).pipe(
      pairwise(),
      filter(([prev, current]) => prev === FormActions.CREATE),
      map((_) => this.getButtonsStateOnDefault())
    );

    return merge(createClose$, editClose$);
  }

  private onCreateButtonState() {
    const createTrue$ = this.getRowEditState(FormActions.CREATE).pipe(
      filter(({ group, isEditing }) => isEditing),
      switchMap(({ group, isEditing }) => {
        const { formGroup } = group;
        return this.setFormState(formGroup, FormActions.CREATE);
      })
    );

    const createFalse$ = this.getRowEditState(FormActions.CREATE).pipe(
      filter(({ isEditing }) => !isEditing),
      map((_) => {
        const defaultState = this.getButtonsStateOnDefault();
        return {
          ...defaultState,
          editState: { ...defaultState.editState, disabled: true },
        };
      })
    );

    return merge(createTrue$, createFalse$);
  }

  public onDelete() {
    this.delete.emit({ ...this.rowState });
  }

  public onEdit() {
    this.edit.emit({ ...this.rowState });
  }

  public onCancel(event: FormActions) {
    this.cancel.emit({
      ...this.rowState,
      event,
    });
  }

  public onSave(event: FormActions) {
    this.submit.emit({
      ...this.rowState,
      event,
      item: { ...this.rowState.item },
      group:
        this.tableDataSource.getTableState().forms[
          this.rowState.item[this.rowState.key]
        ],
    });
  }
}
