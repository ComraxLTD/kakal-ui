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
    control.queryChanged({value: event.value, query: event.query});
  }
  onSelectChanged(event, control: ControlBase) {
    control.selectChanged(event.value);
  }
  onOpenChanged(event, control: ControlBase) {
    control.openChanged({value: event.value, opened: event.action === KklFormActions.OPENED_SELECT});
  }
  onValueChanged(event, control: ControlBase) {
    control.valueChanged(event.value);
  }
  onFocusChanged(event, control: ControlBase) {
    control.focusChanged(event.value);
  }

}
