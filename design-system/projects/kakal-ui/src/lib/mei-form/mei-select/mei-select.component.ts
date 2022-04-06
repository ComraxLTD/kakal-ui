import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, take } from 'rxjs';
import { QuestionBase } from '../models/question.model';
import { MeiSelectOption } from '../models/select.model';
import { FormActions } from '../models/form-events';
import { FormChangeEvent } from '../models/form-events';
import { MessageService } from '../mei-services/message.service';

@Component({
  selector: 'mei-select',
  templateUrl: './mei-select.component.html',
  styleUrls: ['./mei-select.component.scss']
})
export class MeiSelectComponent implements OnInit {

  @Input() control!: FormControl;
  @Input() question!: QuestionBase;

  options$: BehaviorSubject<MeiSelectOption[]>;

  @Output() selectChanged: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() openChanged: EventEmitter<FormChangeEvent> = new EventEmitter();
  // @Output() focus: EventEmitter<FormChangeEvent> = new EventEmitter();

  error$: BehaviorSubject<string>;


  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.options$ = new BehaviorSubject<MeiSelectOption[]>([]);
    if(Array.isArray(this.question.options)) {
      this.options$.next(this.question.options);
    } else {
      (this.question.options as BehaviorSubject<MeiSelectOption[]>).subscribe((a: MeiSelectOption[]) => {
        if(this.question.multi){
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
    (this.question.options as BehaviorSubject<MeiSelectOption[]>).pipe(take(1)).subscribe((a: MeiSelectOption[]) => {
      a.forEach(b => {
        b.selected = false;
      })
      this.options$.next(a);
    });
  }

  setErrorMessage() {
    const error = this.messageService.getErrorMessage(
      this.control as FormControl,
      this.question.placeHolder
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
    if(this.question.multi) {
      event.value.forEach(v => v.selected = true);
    } else {
      event.value.selected = true;
    }

    this.selectChanged.emit({
      key: this.question.key,
      value: this.control.value,
      action: this.question.multi? FormActions.MULTI_SELECT_CHANGED : FormActions.SELECT_CHANGED
    });
  }
  onOpenChanged() {
    this.openChanged.emit({
      key: this.question.key,
      value: this.control.value,
      action: FormActions.OPEN_CHANGED
    });
  }



}
