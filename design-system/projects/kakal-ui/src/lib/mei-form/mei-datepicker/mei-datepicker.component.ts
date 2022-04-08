import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable, startWith, Subject } from 'rxjs';
import { MessageService } from '../mei-services/message.service';
import { FormActions, FormChangeEvent } from '../models/form-events';
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

  @Output() valueChanged: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() focusChanged: EventEmitter<FormChangeEvent> = new EventEmitter();

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.error$ = new BehaviorSubject<string>('');
    this.control.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged(),
    ).subscribe(a => this.onValueChanged());
  }

  private setErrorMessage() {
    const error = this.messageService.getErrorMessage(this.control, this.placeHolder);

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
      action: FormActions.VALUE_CHANGED,
    });
  }

  onFocus(): void {
    this.focusChanged.emit({
      key: this.key,
      value: this.control.value,
      action: FormActions.FOCUS_IN,
    });
  }

}
