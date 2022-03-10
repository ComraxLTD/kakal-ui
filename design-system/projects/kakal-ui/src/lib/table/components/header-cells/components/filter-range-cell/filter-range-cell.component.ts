import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  Question,
  QuestionGroupModel,
} from '../../../../../form/models/form.types';
import { FormService } from '../../../../../form/services/form.service';
import { Observable, skip, Subject, take, takeUntil } from 'rxjs';
import { FilterType } from '../../models/header.types';

export interface FilterRange<T = any> {
  start?: T;
  end?: T;
  type?: FilterType;
}

@Component({
  selector: 'kkl-filter-range-cell',
  templateUrl: './filter-range-cell.component.html',
  styleUrls: ['./filter-range-cell.component.scss'],
})
export class FilterRangeCellComponent implements OnInit {
  @Input() public filterType: FilterType.NUMBER_RANGE | FilterType.DATE_RANGE;
  @Input() public range$: Observable<FilterRange>;
  @Input() public value: FilterRange;

  public amountGroup: QuestionGroupModel<FilterRange<number>>;
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

  @Output() rangeChange: EventEmitter<FilterRange> = new EventEmitter();

  constructor(private formService: FormService) {}

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

  public setAmountGroup(
    questions: Question[]
  ): QuestionGroupModel<FilterRange<number>> {
    return this.formService.createQuestionGroup({
      key: 'amount',
      questions,
    });
  }

  public onRangeDateChange(event: FilterRange) {
    const range: FilterRange<FilterRange<Date>> = {
      start: event.start,
      end: event.end,
    };
    this.rangeChange.emit(range);
  }

  public onRangeNumberChange() {
    // this.rangeChange.emit(this.amountGroup.getValue());
    this.amountGroup.formGroup.valueChanges
      .pipe(skip(1), take(1), takeUntil(this.destroy))
      .subscribe((range: FilterRange<number>) => this.rangeChange.emit(range));
    // }}
  }
}
