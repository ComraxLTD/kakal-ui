import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { KklFormActions, KklFormChangeEvent } from '../../../mei-form/models/kkl-form-events';
import { KklSelectOption } from '../../../mei-form/models/kkl-select.model';
import { TableBase } from '../../models/table.model';
@Component({
  selector: 'kkl-filters',
  templateUrl: './mei-filters.component.html',
  styleUrls: ['./mei-filters.component.scss']
})
export class MeiFiltersComponent implements OnInit {

  @Input() formGroup!: FormGroup;

  @Input() controls: TableBase[];

  @Output() selectChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() valueChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  remove(control: TableBase): void {
    this.formGroup.get(control.key).reset();
    if(['checkbox', 'toggle'].includes(control.controlType)) {
      if(control.selectChanged) {
        control.selectChanged(undefined);
      }
      this.selectChanged.emit({
        key: control.key,
        value: false,
        action: KklFormActions.TOGGLE_CHANGED
      });
    } else {
      this.valueChanged.emit({
        key: control.key,
        value: undefined,
        action: KklFormActions.VALUE_CHANGED,
      });
    }
  }

  removeSelect(control: TableBase, item: KklSelectOption): void {
      this.formGroup.get(control.key).reset();
      item.selected = false;
      if(control.selectChanged) {
        control.selectChanged(undefined);
      }
      this.selectChanged.emit({
        key: control.key,
        value: undefined,
        action: KklFormActions.SELECT_CHANGED
      });
  }


  removeMulti(control: TableBase, item: KklSelectOption): void {
    item.selected = false;
    const index = this.formGroup.get(control.key).value.indexOf(item);
    if (index >= 0) {
      this.formGroup.get(control.key).value.splice(index, 1);
      if(control.selectChanged) {
        control.selectChanged(this.formGroup.get(control.key).value);
      }
      this.selectChanged.emit({
        key: control.key,
        value: this.formGroup.get(control.key).value,
        action: KklFormActions.MULTI_OPTION_SELECTED
      });
    }
  }

}
