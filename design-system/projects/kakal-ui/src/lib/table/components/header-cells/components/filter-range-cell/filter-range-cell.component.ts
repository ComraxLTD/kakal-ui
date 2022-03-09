import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SortDirection } from '@angular/material/sort';
import {
  Question,
  QuestionGroupModel,
} from '../../../../../form/models/form.types';
import { FormService } from '../../../../../form/services/form.service';
import { TableDataSource } from '../../../../models/table-datasource';
import { HeaderCellModel } from '../../models/header-cell.model';

export interface Range {
  from: any;
  to: any;
}

@Component({
  selector: 'kkl-filter-range-cell',
  templateUrl: './filter-range-cell.component.html',
  styleUrls: ['./filter-range-cell.component.scss'],
})
export class FilterRangeCellComponent implements OnInit {
  @Input() public column: HeaderCellModel;
  @Input() public value: Range = { from: 0, to: 0 };

  public amountGroup: QuestionGroupModel<Range>;

  private amountQuestions: Question[] = [
    {
      key: 'from',
      label: 'מסכום',
      controlType: 'sum',
    },
    {
      key: 'to',
      label: 'עד סכום',
      controlType: 'sum',
    },
  ];
  constructor(
    private formService: FormService,
    private tableDataSource: TableDataSource
  ) {}

  ngOnInit(): void {
    this.amountQuestions = this.setQuestionWithValue(this.amountQuestions);
    this.amountGroup = this.setAmountGroup(this.amountQuestions);
  }

  private setQuestionWithValue(questions: Question[]) {
    return questions.map((q: Question) => {
      return {
        ...q,
        value: this.value[q.key],
      } as Question;
    });
  }

  public setAmountGroup(questions: Question[]): QuestionGroupModel<Range> {
    return this.formService.createQuestionGroup({
      key: 'amount',
      questions,
    });
  }

  public onSortChange(event: SortDirection) {
    console.log(event);
  }
}
