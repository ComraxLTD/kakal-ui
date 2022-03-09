import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { RangePipe } from 'projects/kakal-ui/src/public-api';
import {
  Question,
  QuestionGroupModel,
} from '../../../../../form/models/form.types';
import { FormService } from '../../../../../form/services/form.service';
import { TableDataSource } from '../../../../models/table-datasource';
import { HeaderCellModel } from '../../models/header-cell.model';

export interface Range {
  start: any;
  end: any;
  type?: string;
}

@Component({
  selector: 'kkl-filter-range-cell',
  templateUrl: './filter-range-cell.component.html',
  styleUrls: ['./filter-range-cell.component.scss'],
})
export class FilterRangeCellComponent implements OnInit {
  @Input() public column: HeaderCellModel;
  @Input() public value: Range = { start: 0, end: 0 };

  public amountGroup: QuestionGroupModel<Range>;
  public dateControl: FormControl = new FormControl();

  private amountQuestions: Question[] = [
    {
      key: 'start',
      label: 'מסכום',
      controlType: 'sum',
    },
    {
      key: 'end',
      label: 'עד סכום',
      controlType: 'sum',
    },
  ];

  @Output() rangeChange: EventEmitter<Range> = new EventEmitter();

  constructor(
    private formService: FormService,
    private tableDataSource: TableDataSource,
    private rangePipe: RangePipe
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

  public onRangeDateEvent(event: Range) {
    const range: Range = { start: event.start, end: event.end, type: 'date' };
    this.rangeChange.emit(range);
  }
}
