import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable, startWith, Subject } from 'rxjs';
import { MeiMessageService } from '../mei-services/message.service';
import { MeiFormActions, MeiFormChangeEvent } from '../models/form-events';
import { Appearance } from '../models/question.types';

@Component({
  selector: 'mei-datepicker',
  templateUrl: './mei-datepicker.component.html',
  styleUrls: ['./mei-datepicker.component.scss']
})
export class MeiDatepickerComponent implements OnInit {

  @Input() control!: FormControl;
  @Input() key: string;
  @Input() placeHolder: string;
  @Input() label: string;
  @Input() appearance: Appearance;

  @Input() maxDate: Date;
  @Input() minDate: Date;

  // MatFormFieldAppearance
  error$: BehaviorSubject<string>;

  @Output() valueChanged: EventEmitter<MeiFormChangeEvent> = new EventEmitter();
  @Output() focusChanged: EventEmitter<MeiFormChangeEvent> = new EventEmitter();

  constructor(private meiMessageService: MeiMessageService) {}

  ngOnInit(): void {
    this.error$ = new BehaviorSubject<string>('');
    this.control.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged(),
    ).subscribe(a => this.onValueChanged());
  }

  private setErrorMessage() {
    const error = this.meiMessageService.getErrorMessage(this.control, this.placeHolder);

    this.error$.next(error);
    if (error && this.control.touched) {
      this.control.updateValueAndValidity();
    }
  }

  validate() {
    this.setErrorMessage();
  }

  onValueChanged() {
    this.valueChanged.emit({
      key: this.key,
      value: this.control.value,
      action: MeiFormActions.VALUE_CHANGED,
    });
  }

  onFocus(): void {
    this.focusChanged.emit({
      key: this.key,
      value: this.control.value,
      action: MeiFormActions.FOCUS_IN,
    });
  }

}
