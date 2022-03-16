import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { skip, take, filter, takeUntil, Subject } from 'rxjs';
import { FilterRange } from '../../filters/filters.types';
import { FormService, Question } from '../services/form.service';

@Component({
  selector: 'kkl-form-range',
  templateUrl: './form-range.component.html',
  styleUrls: ['./form-range.component.scss'],
})
export class FormRangeComponent implements OnInit {
  @Input() questions: Question[];

  constructor(private formService: FormService) {}

  public formGroup: FormGroup;

  private destroy: Subject<void>;

  @Output() rangeChange: EventEmitter<FilterRange<number>> = new EventEmitter();

  ngOnInit(): void {
    this.formGroup = this.setAmountGroup(this.questions);
  }

  public setAmountGroup(questions: Question[]): FormGroup {
    const group = this.formService.createQuestionGroup<FilterRange<number>>({
      key: 'amount',
      questions,
    });

    this.questions = group.questions;

    return group.formGroup;
  }

  public onRangeNumberChange() {
    // this.formGroup.valueChanges
    //   .pipe(
    //     skip(1),
    //     take(1),

    //     filter((range) => range.start !== null && range.end !== null),
    //     filter((range) => range.start !== '' && range.end !== ''),
    //     takeUntil(this.destroy)
    //   )
    //   .subscribe((range: FilterRange<number>) => {
    //     this.rangeChange.emit(range);
    //   });
  }
}
