import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QuestionBase } from '../../../form/models/question.model';

@Component({
  selector: 'kkl-ngx-table-form',
  templateUrl: './table-form.component.html',
})
export class TableFormComponent implements OnInit  {
  @Input() question!: QuestionBase;
  @Input() initial!: any;

  control: FormControl | FormGroup;

  @Output() rowEdited = new EventEmitter<any>();

  constructor() {
  }
  ngOnInit(): void {
    const data = this.getCellData(this.question.key);
    switch (this.question.controlType) {
      case 'dateRange':
      case 'range':
        this.control = new FormGroup({start: new FormControl(data?.start), end: new FormControl(data?.end)});
        break;
      case 'currency':
        this.control = new FormGroup({sum: new FormControl(data?.sum), currency: new FormControl(data?.currency)});
        break;
      // case 'costum':
      //   break;
      default:
        this.control = new FormControl(data);
        break;
    }
  }

  getCellData(key: string) {
    if(this.initial) {
      return this.initial[key];
    } else {
      return null;
    }
  }



  // onQueryChanged(event, control: ControlBase) {
  //   this.rowEdited.emit();
  //   if(control.queryChanged) {
  //     control.queryChanged({value: event.value, query: event.query});
  //   }
  // }
  onSelectChanged(event) {
    this.rowEdited.emit(event);
  }
  // onOpenedChange(event, control: ControlBase) {
  //   this.rowEdited.emit();
  //   if(control.openedChange) {
  //     control.openedChange({value: event.value, opened: event.action === KklFormActions.OPENED_SELECT});
  //   }
  // }
  onValueChanged(event) {
    this.rowEdited.emit(event);
  }
  // onFocusChanged(event, control: ControlBase) {
  //   this.rowEdited.emit();
  //   if(control.focusChanged) {
  //     control.focusChanged(event.value);
  //   }
  // }


}
