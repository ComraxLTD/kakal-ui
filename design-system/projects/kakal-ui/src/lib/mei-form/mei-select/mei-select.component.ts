import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { KklSelectOption } from '../models/kkl-select.model';
import { KklFormActions } from '../models/kkl-form-events';
import { KklFormChangeEvent } from '../models/kkl-form-events';
import { MessageService } from '../mei-services/message.service';
import { BehaviorSubject, take } from 'rxjs';

@Component({
  selector: 'kkl-select',
  templateUrl: './mei-select.component.html',
  styleUrls: ['./mei-select.component.scss']
})
export class MeiSelectComponent implements OnInit {

  @Input() control!: FormControl;


  options$: BehaviorSubject<KklSelectOption[]> = new BehaviorSubject<KklSelectOption[]>([]);
  tempOptions: BehaviorSubject<KklSelectOption[]> | KklSelectOption[];
  @Input() set options(val: BehaviorSubject<KklSelectOption[]> | KklSelectOption[]) {
    if(!val) return;
    if(this.control && this.multi) {
      if(Array.isArray(val)) {
        if(this.multi){
          this.control.setValue((val as KklSelectOption[]).filter(b => b.selected));
        } else {
          this.control.setValue((val as KklSelectOption[]).find(b => b.selected));
        }
        this.options$.next(val);
      } else {
        (val as BehaviorSubject<KklSelectOption[]>).subscribe((a: KklSelectOption[]) => {
          if(this.multi){
            this.control.setValue(a?.filter(b => b.selected));
          } else {
            this.control.setValue(a?.find(b => b.selected));
          }
          this.options$.next(a);
        });
      }
    } else {
      this.tempOptions = val;
    }
  }
  @Input() multi!: boolean;
  @Input() placeHolder!: string;
  @Input() label!: string;
  @Input() theme!: string;
  @Input() key!: string;
  @Input() appearance!: string;

  @Output() selectChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() openChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  // @Output() focus: EventEmitter<KklFormChangeEvent> = new EventEmitter();

  error$: BehaviorSubject<string>;


  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.error$ = new BehaviorSubject<string>('');
    if(Array.isArray(this.tempOptions)) {
      if(this.multi){
        this.control.setValue((this.tempOptions as KklSelectOption[]).filter(b => b.selected));
      } else {
        this.control.setValue((this.tempOptions as KklSelectOption[]).find(b => b.selected));
      }
    } else if(this.tempOptions) {
      (this.tempOptions as BehaviorSubject<KklSelectOption[]>).subscribe((a: KklSelectOption[]) => {
        if(this.multi){
          this.control.setValue(a?.filter(b => b.selected));
        } else {
          this.control.setValue(a?.find(b => b.selected));
        }
        this.options$.next(a);
      });
    }
  }

  compareFunction(o1: KklSelectOption, o2: KklSelectOption) {
    return JSON.stringify(o1) === JSON.stringify(o2);
  }

  deselectAll() {
    this.control.patchValue([]);
    (this.options as BehaviorSubject<KklSelectOption[]>).pipe(take(1)).subscribe((a: KklSelectOption[]) => {
      a.forEach(b => {
        b.selected = false;
      })
      this.options$.next(a);
    });
  }

  setErrorMessage() {
    const error = this.messageService.getErrorMessage(
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
  //     action: KklFormActions.FOCUS_IN
  //   });
  // }
  onSelectChanged(event) {
    if(this.multi) {
      event.value?.forEach(v => v.selected = true);
    } else {
      if(event.value){
        event.value.selected = true;
      }
    }

    this.selectChanged.emit({
      key: this.key,
      value: this.control.value,
      action: this.multi? KklFormActions.MULTI_SELECT_CHANGED : KklFormActions.SELECT_CHANGED
    });
  }
  onOpenChanged(event) {
    this.openChanged.emit({
      key: this.key,
      value: this.control.value,
      action: event? KklFormActions.OPENED_SELECT : KklFormActions.CLOSED_SELECT
    });
  }



}
