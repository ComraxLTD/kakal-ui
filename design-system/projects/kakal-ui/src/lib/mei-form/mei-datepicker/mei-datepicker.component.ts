import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable, startWith, Subject, takeUntil } from 'rxjs';
import { MessageService } from '../mei-services/message.service';
import { KklFormActions, KklFormChangeEvent } from '../models/kkl-form-events';
import { Appearance } from '../models/control.types';

@Component({
  selector: 'kkl-datepicker',
  templateUrl: './mei-datepicker.component.html',
  styleUrls: ['./mei-datepicker.component.scss']
})
export class MeiDatepickerComponent implements OnInit {
  destroySubject$: Subject<void> = new Subject();

  @Input() control!: FormControl;
  @Input() key: string;
  @Input() placeHolder: string;
  @Input() label: string;
  @Input() appearance: Appearance;

  @Input() maxDate: Date;
  @Input() minDate: Date;

  // MatFormFieldAppearance
  error$: BehaviorSubject<string>;

  @Output() valueChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() focusChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.error$ = new BehaviorSubject<string>('');
    this.control.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged(),
      takeUntil(this.destroySubject$)
    ).subscribe(a => this.onValueChanged());
  }

  private setErrorMessage() {
    const error = this.messageService.getErrorMessage(this.control);

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
      action: KklFormActions.VALUE_CHANGED,
    });
  }

  onFocus(): void {
    this.focusChanged.emit({
      key: this.key,
      value: this.control.value,
      action: KklFormActions.FOCUS_IN,
    });
  }

  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

}
