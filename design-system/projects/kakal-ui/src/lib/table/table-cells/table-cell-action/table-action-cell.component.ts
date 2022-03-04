import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, merge, mapTo, filter, map } from 'rxjs';
import { TableDataSource } from '../../models/table-datasource';
import { TableEvent } from '../../models/table.events';
import { RowState, TableState, ActionState } from '../../models/table.state';
import { ActionStateRules } from '../../models/table-actions';

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
  // @Input() dataSource: TableDataSource;
  @Input() tableState: TableState;
  @Input() actionStateRules: ActionStateRules;

  @Input() hasEdit: boolean;
  @Input() hasDelete: boolean;

  // custom button slot
  @Input() public startSlot: TemplateRef<any>;
  @Input() public endSlot: TemplateRef<any>;

  @Output() edit: EventEmitter<RowState> = new EventEmitter<RowState>();
  @Output() delete: EventEmitter<RowState> = new EventEmitter<RowState>();
  @Output() close: EventEmitter<RowState> = new EventEmitter<RowState>();
  @Output() save: EventEmitter<RowState> = new EventEmitter<RowState>();

  public buttonActionState$: Observable<ButtonActionState>;

  constructor(private dataSource: TableDataSource<any>) {}

  private validate() {

    console.log(this.rowState)

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
      filter((rowState: RowState) => rowState.item[rowState.key] === id),
      map((rowState: RowState) => rowState.group.formGroup),
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
      filter((rowState: RowState) => rowState.item[rowState.key] === id),
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
