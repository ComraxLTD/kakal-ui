import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  Question,
  QuestionGroupModel,
} from '../../../../../form/models/form.types';
import { FormService } from '../../../../../form/services/form.service';
import { FilterRange, FilterType } from '../../models/header.types';
import { filter, Observable, skip, Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'kkl-filter-range-cell',
  templateUrl: './filter-range-cell.component.html',
  styleUrls: ['./filter-range-cell.component.scss'],
})
export class FilterRangeCellComponent implements OnInit {
  @Input() public filterType: FilterType.NUMBER_RANGE | FilterType.DATE_RANGE;
  @Input() public value: FilterRange;
  @Input() public value$: Observable<FilterRange>;

  public amountGroup: QuestionGroupModel<FilterRange<number>>;
  public dateControl: FormControl;

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

    if (this.filterType === FilterType.NUMBER_RANGE) {
      this.amountQuestions = this.setQuestionWithValue(this.amountQuestions);
      this.amountGroup = this.setAmountGroup(this.amountQuestions);
    }

    if (this.filterType === FilterType.DATE_RANGE) {
      this.dateControl = new FormControl({
        start: this.value.start,
        end: this.value.end,
      });
    }

    this.value$
      .pipe(
        skip(1),
        filter((range: FilterRange) => !range.start && !range.end),
        takeUntil(this.destroy)
      )
      .subscribe((range: FilterRange) => {
        if (this.filterType === FilterType.DATE_RANGE) {
          console.log('reset DATE');
          this.dateControl.reset();
        }

        if (this.filterType === FilterType.NUMBER_RANGE) {
          console.log('reset NUMBER');
          this.amountGroup.formGroup.reset();
        }
      });
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
    this.amountGroup.formGroup.valueChanges
      .pipe(skip(1), take(1), takeUntil(this.destroy))
      .subscribe((range: FilterRange<number>) => this.rangeChange.emit(range));
    // }}
  }
}
