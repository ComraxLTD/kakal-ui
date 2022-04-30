import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { distinctUntilChanged, startWith, Subject, takeUntil } from 'rxjs';
import { MessageService } from '../mei-services/message.service';
import { KklFormActions, KklFormChangeEvent } from '../models/kkl-form-events';
import { Appearance } from '../models/control.types';

@Component({
  selector: 'kkl-range-datepicker',
  templateUrl: './mei-range-datepicker.component.html',
  styleUrls: ['./mei-range-datepicker.component.scss']
})
export class MeiRangeDatepickerComponent implements OnInit {
  destroySubject$: Subject<void> = new Subject();
  
  @Input() groupControl!: FormGroup;
  @Input() key: string;
  @Input() label: string;
  @Input() appearance: Appearance;

  @Input() maxDate: Date;
  @Input() minDate: Date;

  @Output() valueChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() focusChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

    this.groupControl.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged(),
      takeUntil(this.destroySubject$)
    ).subscribe(a => this.onValueChanged());
  }

  // private setErrorMessage() {
  //   const error = this.messageService.getErrorMessage(this.groupControl, this.placeHolder);

  //   this.error$.next(error);
  //   if (error && this.control.touched) {
  //     this.control.updateValueAndValidity();
  //   }
  // }

  // validate() {
  //   this.setErrorMessage();
  // }

  onValueChanged() {
    this.valueChanged.emit({
      key: this.key,
      value: this.groupControl.value,
      action: KklFormActions.VALUE_CHANGED,
    });
  }

  onFocus(): void {
    this.focusChanged.emit({
      key: this.key,
      value: this.groupControl.value,
      action: KklFormActions.FOCUS_IN,
    });
  }


  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

}
