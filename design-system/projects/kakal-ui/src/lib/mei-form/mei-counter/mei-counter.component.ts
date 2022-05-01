import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith, Subject, takeUntil } from 'rxjs';
import { MessageService } from '../mei-services/message.service';
import { KklFormActions, KklFormChangeEvent } from '../models/kkl-form-events';

@Component({
  selector: 'kkl-counter',
  templateUrl: './mei-counter.component.html',
  styleUrls: ['./mei-counter.component.scss']
})
export class MeiCounterComponent implements OnInit {
  destroySubject$: Subject<void> = new Subject();


  @Input() control!: FormControl;
  @Input() key!: string;
  @Input() label!: string;
  @Input() placeHolder!: string;
  @Input() icon!: string;
  @Input() debounce!: number;

  // error$: BehaviorSubject<string>;

  @Output() focusChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() valueChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();

  constructor(
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    // this.error$ = new BehaviorSubject<string>('');
    // this.color$ = this.setColor$();
    this.control.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged(),
      debounceTime(this.debounce? this.debounce : 300),
      takeUntil(this.destroySubject$)
    ).subscribe(a => this.onValueChanged());
  }



  // private setErrorMessage() {
  //   const error = this.messageService.getErrorMessage(
  //     this.control,
  //     this.placeHolder
  //   );

  //   this.error$.next(error);
  //   if (error && this.control.touched) {
  //     this.control.updateValueAndValidity();
  //   }
  // }

  // validate() {
  //   this.setErrorMessage();
  // }


  updateNum(val: string) {
    if(val === '+') {
      this.control.setValue(this.control.value+1);
    } else {
      this.control.setValue(this.control.value-1);
    }
  }

  // EVENTS SECTION
  onFocus() {
    this.focusChanged.emit({
      key: this.key,
      value: this.control.value,
      action: KklFormActions.FOCUS_IN,
    });
  }

  onValueChanged() {
    this.valueChanged.emit({
      key: this.key,
      value: this.control.value,
      action: KklFormActions.VALUE_CHANGED,
    });
  }

  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }
}
