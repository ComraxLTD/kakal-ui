import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { distinctUntilChanged, startWith } from 'rxjs';
import { MeiMessageService } from '../mei-services/message.service';
import { MeiFormActions, MeiFormChangeEvent } from '../models/form-events';
import { Appearance } from '../models/question.types';

@Component({
  selector: 'mei-range-datepicker',
  templateUrl: './mei-range-datepicker.component.html',
  styleUrls: ['./mei-range-datepicker.component.scss']
})
export class MeiRangeDatepickerComponent implements OnInit {

  @Input() groupControl!: FormGroup;
  @Input() key: string;
  @Input() label: string;
  @Input() appearance: Appearance;

  @Output() valueChanged: EventEmitter<MeiFormChangeEvent> = new EventEmitter();
  @Output() focusChanged: EventEmitter<MeiFormChangeEvent> = new EventEmitter();
  constructor(private meiMessageService: MeiMessageService) { }

  ngOnInit(): void {

    this.groupControl.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged(),
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
      action: MeiFormActions.VALUE_CHANGED,
    });
  }

  onFocus(): void {
    this.focusChanged.emit({
      key: this.key,
      value: this.groupControl.value,
      action: MeiFormActions.FOCUS_IN,
    });
  }



}
