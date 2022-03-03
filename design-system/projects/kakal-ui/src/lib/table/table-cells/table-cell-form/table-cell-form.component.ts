import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { QuestionGroupModel } from '../../../form/models/question-group.model';
import { QuestionBase } from '../../../form/services/form.service';

@Component({
  selector: 'kkl-table-cell-form',
  templateUrl: './table-cell-form.component.html',
  styleUrls: ['./table-cell-form.component.scss'],
})
export class TableCellFormComponent implements OnInit {
  @Input() public group: QuestionGroupModel;
  @Input() public columnDef: string;
  @Input() public template: TemplateRef<any>;

  public question: QuestionBase;

  constructor() {}

  ngOnInit(): void {

    console.log(this.columnDef)

    this.question = this.group.controls[this.columnDef];
    console.log(this.question)
  }
}
