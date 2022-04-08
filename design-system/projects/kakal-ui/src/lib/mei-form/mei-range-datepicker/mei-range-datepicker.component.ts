import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { distinctUntilChanged, startWith } from 'rxjs';
import { MessageService } from '../mei-services/message.service';
import { FormActions, FormChangeEvent } from '../models/form-events';
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



  @Output() valueChanged: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() focusChanged: EventEmitter<FormChangeEvent> = new EventEmitter();
  constructor(private messageService: MessageService) { }

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
      action: FormActions.VALUE_CHANGED,
    });
  }

  onFocus(): void {
    this.focusChanged.emit({
      key: this.key,
      value: this.groupControl.value,
      action: FormActions.FOCUS_IN,
    });
  }



}
