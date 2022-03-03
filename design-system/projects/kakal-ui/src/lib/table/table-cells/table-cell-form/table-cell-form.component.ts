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

  public questionTemplate: { [key: string]: TemplateRef<any> };

  constructor() {}

  ngOnInit(): void {

    console.log(this.group.controls)
    console.log(this.columnDef)

    this.question = this.group.controls[this.columnDef];

    // if(!this.question) {
    //   throw new Error(`Error : Object question of ${this.columnDef} columns in undefined. Please add a question or tag the column editable as false`)
    // }

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
