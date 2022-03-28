import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { QuestionBase } from '../../../form/models/question.model';

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


}
