import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { QuestionBase } from '../../../form/models/question.model';
import { ControlBase } from '../../../mei-form/models/control.model';
import { KklFormActions } from '../../../mei-form/models/kkl-form-events';

@Component({
  selector: 'kkl-table-form',
  templateUrl: './table-form.component.html',
})
export class TableFormComponent implements OnInit  {
  @Input() public question!: QuestionBase;


  constructor(public controlContainer: ControlContainer) {
  }
  ngOnInit(): void {
  }



  onQueryChanged(event, control: ControlBase) {
    if(control.queryChanged) {
      control.queryChanged({value: event.value, query: event.query});
    }
  }
  onSelectChanged(event, control: ControlBase) {
    if(control.selectChanged) {
      control.selectChanged(event.value);
    }
  }
  onOpenedChange(event, control: ControlBase) {
    if(control.openedChange) {
      control.openedChange({value: event.value, opened: event.action === KklFormActions.OPENED_SELECT});
    }
  }
  onValueChanged(event, control: ControlBase) {
    if(control.valueChanged) {
      control.valueChanged(event.value);
    }
  }
  onFocusChanged(event, control: ControlBase) {
    if(control.focusChanged) {
      control.focusChanged(event.value);
    }
  }


}
