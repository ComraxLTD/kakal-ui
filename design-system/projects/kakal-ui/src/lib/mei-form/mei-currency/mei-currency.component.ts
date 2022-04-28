import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, debounceTime, distinctUntilChanged, startWith, take } from 'rxjs';
import { MessageService } from '../mei-services/message.service';
import { Appearance } from '../models/control.types';
import { KklFormChangeEvent, KklFormActions } from '../models/kkl-form-events';
import { KklSelectOption } from '../models/kkl-select.model';

@Component({
  selector: 'kkl-currency',
  templateUrl: './mei-currency.component.html',
  styleUrls: ['./mei-currency.component.scss']
})
export class MeiCurrencyComponent implements OnInit {

  @Input() groupControl!: FormGroup;

  options$: BehaviorSubject<KklSelectOption[]> = new BehaviorSubject<KklSelectOption[]>([]);
  tempOptions: BehaviorSubject<KklSelectOption[]> | KklSelectOption[];
  @Input() set options(val: BehaviorSubject<KklSelectOption[]> | KklSelectOption[]) {
    if(!val) return;
    if(this.tempOptions) {
      if(Array.isArray(val)) {
        this.groupControl.get('currency').setValue((val as KklSelectOption[]).find(b => b.selected));
        this.options$.next(val);
      } else {
        (val as BehaviorSubject<KklSelectOption[]>).subscribe((a: KklSelectOption[]) => {
          this.groupControl.get('currency').setValue(a?.find(b => b.selected));
          this.options$.next(a);
        });
      }
    } else {
      this.tempOptions = val;
    }
  }

  @Input() placeHolder!: string;
  @Input() label!: string;
  @Input() theme!: string;
  @Input() key!: string;
  @Input() appearance: Appearance;
  @Input() debounce!: number;

  @Output() valueChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() selectChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() focusChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();

  error$: BehaviorSubject<string>;


  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.error$ = new BehaviorSubject<string>('');
      if(Array.isArray(this.tempOptions)) {
        this.groupControl.get('currency').setValue((this.tempOptions as KklSelectOption[]).find(b => b.selected));
        this.options$.next(this.tempOptions);
      } else if(this.tempOptions) {
        (this.tempOptions as BehaviorSubject<KklSelectOption[]>).subscribe((a: KklSelectOption[]) => {
          this.groupControl.get('currency').setValue(a?.find(b => b.selected));
          this.options$.next(a);
        });
      }
      this.groupControl.get('sum').valueChanges.pipe(
        startWith(''),
        distinctUntilChanged(),
        debounceTime(this.debounce? this.debounce : 300),
      ).subscribe(a => this.onValueChanged());
    }, 0);
  }

  compareFunction(o1: KklSelectOption, o2: KklSelectOption) {
    return JSON.stringify(o1) === JSON.stringify(o2);
  }

  setErrorMessage() {
    const error = this.messageService.getErrorMessage(
      this.groupControl.get('sum') as FormControl
    );

    this.error$.next(error);
    if (error && this.groupControl.touched) {
      this.groupControl.updateValueAndValidity();
    }
  }

  onFocus() {
    this.focusChanged.emit({
      key: this.key,
      value: this.groupControl.value,
      action: KklFormActions.FOCUS_IN,
    });
  }
  onSelectChanged(event) {
    if(event.value){
      event.value.selected = true;
    }

    this.selectChanged.emit({
      key: this.key,
      value: this.groupControl.value,
      action: KklFormActions.SELECT_CHANGED
    });
  }

  onValueChanged() {
    this.valueChanged.emit({
      key: this.key,
      value: this.groupControl.value,
      action: KklFormActions.VALUE_CHANGED,
    });
  }


}
