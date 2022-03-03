import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { QuestionGroupModel } from '../../../form/models/question-group.model';
import { QuestionBase } from '../../../form/services/form.service';


@Component({
  selector: 'kkl-table-cell-form',
  templateUrl: './table-cell-form.component.html',
  styleUrls: ['./table-cell-form.component.scss'],
})
export class TableCellFormComponent implements OnInit {
  @Input() public form: QuestionGroupModel;
  @Input() public columnDef: string;
  @Input() public slot: ElementRef;

  public question: QuestionBase;

  constructor() {}

  ngOnInit(): void {
    this.question = this.form.group[this.columnDef.toString()];
  }
}
