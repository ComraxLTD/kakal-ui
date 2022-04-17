import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../models/control.model';
import { KklFormActions, KklFormChangeEvent } from '../models/kkl-form-events';

const selectTypes = ['checkbox', 'radio', 'toggle'];
@Component({
  selector: 'kkl-filters',
  templateUrl: './mei-filters.component.html',
  styleUrls: ['./mei-filters.component.scss']
})
export class MeiFiltersComponent implements OnInit {

  @Input() formGroup!: FormGroup;

  @Input() controls: ControlBase[];

  @Output() selectChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  remove(control: ControlBase): void {
    this.formGroup.get(control.key).reset();
    if(selectTypes.includes(control.controlType)) {
      if(control.selectChanged) {
        control.selectChanged(undefined);
      }
      this.selectChanged.emit({
        key: control.key,
        value: false,
        action: KklFormActions.TOGGLE_CHANGED
      });
    } else {

    }
  }


  removeSelect(control: ControlBase): void {
    this.formGroup.get(control.key).reset();
    if(control.selectChanged) {
      control.selectChanged(undefined);
    }
    this.selectChanged.emit({
      key: control.key,
      value: undefined,
      action: control.multi? KklFormActions.MULTI_SELECT_CHANGED : KklFormActions.SELECT_CHANGED
    });
  }

}
