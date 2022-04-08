import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MeiSelectOption } from '../models/select.model';
import { MeiFormActions } from '../models/form-events';
import { MeiFormChangeEvent } from '../models/form-events';
import { MeiMessageService } from '../mei-services/message.service';
import { BehaviorSubject, take } from 'rxjs';

@Component({
  selector: 'mei-select',
  templateUrl: './mei-select.component.html',
  styleUrls: ['./mei-select.component.scss']
})
export class MeiSelectComponent implements OnInit {

  @Input() control!: FormControl;


  @Input() options!: BehaviorSubject<MeiSelectOption[]> | MeiSelectOption[];
  @Input() multi!: boolean;
  @Input() placeHolder!: string;
  @Input() label!: string;
  @Input() theme!: string;
  @Input() key!: string;
  @Input() appearance!: string;

  options$: BehaviorSubject<MeiSelectOption[]>;

  @Output() selectChanged: EventEmitter<MeiFormChangeEvent> = new EventEmitter();
  @Output() openChanged: EventEmitter<MeiFormChangeEvent> = new EventEmitter();
  // @Output() focus: EventEmitter<MeiFormChangeEvent> = new EventEmitter();

  error$: BehaviorSubject<string>;


  constructor(private meiMessageService: MeiMessageService) { }

  ngOnInit(): void {
    this.options$ = new BehaviorSubject<MeiSelectOption[]>([]);
    if(Array.isArray(this.options)) {
      this.options$.next(this.options);
    } else {
      (this.options as BehaviorSubject<MeiSelectOption[]>).subscribe((a: MeiSelectOption[]) => {
        if(this.multi){
          this.control.setValue(a.filter(b => b.selected));
        } else {
          this.control.setValue(a.find(b => b.selected));
        }
        this.options$.next(a);
      });
    }
    this.error$ = new BehaviorSubject<string>('');
  }

  compareFunction(o1: MeiSelectOption, o2: MeiSelectOption) {
    return JSON.stringify(o1) === JSON.stringify(o2);
  }

  deselectAll() {
    this.control.patchValue([]);
    (this.options as BehaviorSubject<MeiSelectOption[]>).pipe(take(1)).subscribe((a: MeiSelectOption[]) => {
      a.forEach(b => {
        b.selected = false;
      })
      this.options$.next(a);
    });
  }

  setErrorMessage() {
    const error = this.meiMessageService.getErrorMessage(
      this.control as FormControl,
      this.placeHolder
    );

    this.error$.next(error);
    if (error && this.control.touched) {
      this.control.updateValueAndValidity();
    }
  }

  // onFocus() {
  //   this.focus.emit({
  //     key: this.question.key,
  //     value: this.control.value,
  //     action: FormActions.FOCUS_IN
  //   });
  // }
  onSelectChanged(event) {
    if(this.multi) {
      event.value.forEach(v => v.selected = true);
    } else {
      event.value.selected = true;
    }

    this.selectChanged.emit({
      key: this.key,
      value: this.control.value,
      action: this.multi ? MeiFormActions.MULTI_SELECT_CHANGED : MeiFormActions.SELECT_CHANGED
    });
  }
  onOpenChanged(event) {
    this.openChanged.emit({
      key: this.key,
      value: this.control.value,
      action: event ? MeiFormActions.OPENED_SELECT : MeiFormActions.CLOSED_SELECT
    });
  }



}
