import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { startWith, distinctUntilChanged, debounceTime } from 'rxjs';
import { MessageService } from '../mei-services/message.service';
import { Appearance } from '../models/control.types';
import { KklFormChangeEvent, KklFormActions } from '../models/kkl-form-events';
import { Palette } from '../../../styles/theme';

@Component({
  selector: 'kkl-range',
  templateUrl: './mei-range.component.html',
  styleUrls: ['./mei-range.component.scss']
})
export class MeiRangeComponent implements OnInit {

  @Input() groupControl!: FormGroup;
  @Input() key: string;
  @Input() label: string;
  @Input() appearance: Appearance;
  @Input() theme!: Palette;
  @Input() debounce!: number;

  @Output() valueChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() focusChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();

  // error$: BehaviorSubject<string>;


  constructor(
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    // this.error$ = new BehaviorSubject<string>('');
    this.groupControl.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged(),
      debounceTime(this.debounce? this.debounce : 300),
    ).subscribe(a => this.onValueChanged());
  }




  // private setErrorMessage() {
  //   const error = this.messageService.getErrorMessage(
  //     this.control,
  //     ''
  //   );

  //   this.error$.next(error);
  //   if (error && this.control.touched) {
  //     this.control.updateValueAndValidity();
  //   }
  // }

  // validate() {
  //   this.setErrorMessage();
  // }


  // EVENTS SECTION
  onFocus() {
    this.focusChanged.emit({
      key: this.key,
      value: this.groupControl.value,
      action: KklFormActions.FOCUS_IN,
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
