import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { QuestionGroupModel } from '../../form/models/question-group.model';
import { QuestionBase } from '../../form/services/form.service';
import { TableColumnModel } from '../models/column.model';

@Component({
  selector: 'kkl-column-form',
  templateUrl: './column-form.component.html',
  styleUrls: ['./column-form.component.scss'],
})
export class ColumnFormComponent<T> implements OnInit {
  @Input() public form: QuestionGroupModel;
  @Input() public column: TableColumnModel<T>;
  @Input() public slot: ElementRef;

  public question: QuestionBase;

  constructor() {}

  ngOnInit(): void {
    this.question = this.form.controls[this.column.columnDef.toString()];
  }
}
