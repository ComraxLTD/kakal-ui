import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../models/control.model';
import { KklFormActions, KklFormChangeEvent } from '../models/kkl-form-events';
import { KklSelectOption } from '../models/kkl-select.model';

const selectTypes = ['autocomplete', 'select', 'checkbox', 'radio', 'toggle'];
@Component({
  selector: 'kkl-filters',
  templateUrl: './mei-filters.component.html',
  styleUrls: ['./mei-filters.component.scss']
})
export class MeiFiltersComponent implements OnInit {

  @Input() formGroup!: FormGroup;

  @Input() controls: ControlBase[];

  @Output() selectChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() valueChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  remove(control: ControlBase): void {
    this.formGroup.get(control.key).reset();
    if(selectTypes.includes(control.controlType)) {
      if(control.selectChanged) {
        control.selectChanged(undefined);
      }
      if(['autocomplete', 'select'].includes(control.controlType)) {
        this.selectChanged.emit({
          key: control.key,
          value: undefined,
          action: KklFormActions.SELECT_CHANGED
        });
      } else {
        this.selectChanged.emit({
          key: control.key,
          value: false,
          action: KklFormActions.TOGGLE_CHANGED
        });
      }
    } else {
      this.valueChanged.emit({
        key: control.key,
        value: undefined,
        action: KklFormActions.VALUE_CHANGED,
      });
    }
  }


  removeMulti(control: ControlBase, item: KklSelectOption): void {
    item.selected = true;
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
