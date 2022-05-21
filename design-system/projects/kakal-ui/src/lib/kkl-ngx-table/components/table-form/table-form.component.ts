import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QuestionBase } from '../../../form/models/question.model';

@Component({
  selector: 'kkl-ngx-table-form',
  templateUrl: './table-form.component.html',
})
export class TableFormComponent implements OnInit  {
  @Input() question!: QuestionBase;

  control: FormControl | FormGroup;

  @Output() rowEdited = new EventEmitter<any>();

  constructor() {
  }
  ngOnInit(): void {
    switch (this.question.controlType) {
      case 'dateRange':
      case 'range':
        this.control = new FormGroup({start: new FormControl(''), end: new FormControl('')});
        break;
      case 'currency':
        this.control = new FormGroup({sum: new FormControl(''), currency: new FormControl('')});
        break;
      // case 'costum':
      //   break;
      default:
        this.control = new FormControl('');
        break;
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
