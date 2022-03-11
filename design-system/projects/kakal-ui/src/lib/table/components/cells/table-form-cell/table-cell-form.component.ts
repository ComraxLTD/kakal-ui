import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { QuestionGroupModel } from '../../../../form/models/question-group.model';
import { QuestionBase } from '../../../../form/models/question.model';

@Component({
  selector: 'kkl-form-cell',
  templateUrl: './table-cell-form.component.html',
  styleUrls: ['./table-cell-form.component.scss'],
})
export class TableFormCellComponent implements OnInit {
  @Input() public group: QuestionGroupModel;
  @Input() public columnDef: string;
  @Input() public template: TemplateRef<any>;
  @Input() public index: number;

  public question: QuestionBase;

  public questionTemplate: { [key: string]: TemplateRef<any> };

  constructor() {}

  ngOnInit(): void {
    this.question = this.group.controls[this.columnDef];

  }

  private setQuestionTemplate(template: TemplateRef<any>) {
    return this.group.questions.reduce((acc, question) => {
      return {
        ...acc,
        [question.key]: question.controlType,
      };
    }, {});
  }
}
