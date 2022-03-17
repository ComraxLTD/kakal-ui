import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { skip, take, filter, takeUntil, Subject } from 'rxjs';
import { FilterRange } from '../../filters/filters.types';
import { FormService, Question } from '../services/form.service';

@Component({
  selector: 'kkl-form-range',
  templateUrl: './form-range.component.html',
  styleUrls: ['./form-range.component.scss'],
})
export class FormRangeComponent implements OnInit {
  @Input() control: FormControl;
  @Input() questions: Question[];

  constructor(private formService: FormService) {}

  public formGroup: FormGroup;

  private destroy: Subject<void>;

  @Output() rangeChange: EventEmitter<FilterRange<number>> = new EventEmitter();

  ngOnInit(): void {
    this.destroy = new Subject();
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
    this.formGroup.valueChanges
      .pipe(skip(1), take(1), takeUntil(this.destroy))
      .subscribe((range: FilterRange<number>) => {
        this.control.setValue({
          ...range,
        });
        this.rangeChange.emit(range);
      });
  }
}
