import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  Question,
  QuestionGroupModel,
} from '../../../../../form/models/form.types';
import { FormService } from '../../../../../form/services/form.service';
import { TableDataSource } from '../../../../models/table-datasource';
import { skip, Subject, take, takeUntil } from 'rxjs';

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

  @Input() public filterType: 'numberRange' | 'dateRange';
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

  private destroy: Subject<void>;

  @Output() rangeChange: EventEmitter<Range> = new EventEmitter();

  constructor(
    private formService: FormService,
    private tableDataSource: TableDataSource
  ) {}

  ngOnInit(): void {
    this.destroy = new Subject();
    this.amountQuestions = this.setQuestionWithValue(this.amountQuestions);
    this.amountGroup = this.setAmountGroup(this.amountQuestions);
  }

  ngOnDestroy(): void {
    this.destroy.next();
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

  public onRangeDateChange(event: Range) {
    const range: Range = { start: event.start, end: event.end, type: 'date' };
    this.rangeChange.emit(range);
  }

  public onRangeNumberChange() {
    // this.rangeChange.emit(this.amountGroup.getValue());
    this.amountGroup.formGroup.valueChanges
      .pipe(skip(1), take(1), takeUntil(this.destroy))
      .subscribe((range) => this.rangeChange.emit(range));
    // }}
  }
}
