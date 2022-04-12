import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MessageService } from '../mei-services/message.service';
import { KklFormChangeEvent, KklFormActions } from '../models/kkl-form-events';
import { KklSelectOption } from '../models/kkl-select.model';

@Component({
  selector: 'kkl-multi-checkbox',
  templateUrl: './mei-checkbox.component.html',
  styleUrls: ['./mei-checkbox.component.scss']
})
export class MeiCheckboxComponent {

  // @Input() control!: FormControl;

  // options$: BehaviorSubject<KklSelectOption[]> = new BehaviorSubject<KklSelectOption[]>([]);
  // tempOptions: BehaviorSubject<KklSelectOption[]> | KklSelectOption[] | KklSelectOption;
  // @Input() set options(val: BehaviorSubject<KklSelectOption[]> | KklSelectOption[]) {
  //   if(!val) return;
  //   if(this.tempOptions) {
  //     if(Array.isArray(val)) {
  //       this.control.setValue((val as KklSelectOption[]).filter(b => b.selected));
  //       this.options$.next(val);
  //     } else {
  //       (val as BehaviorSubject<KklSelectOption[]>).subscribe((a: KklSelectOption[]) => {
  //         this.control.setValue(a?.filter(b => b.selected));
  //         this.options$.next(a);
  //       });
  //     }
  //   } else {
  //     this.tempOptions = val;
  //   }
  // }

  // @Input() placeHolder!: string;
  // @Input() label!: string;
  // @Input() theme!: string;
  // @Input() key!: string;
  // @Input() appearance!: string;

  // @Output() selectChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  // // @Output() focus: EventEmitter<KklFormChangeEvent> = new EventEmitter();

  // error$: BehaviorSubject<string>;


  // constructor(private messageService: MessageService) { }

  // ngOnInit(): void {
  //   setTimeout(() => {
  //     this.error$ = new BehaviorSubject<string>('');
  //     if(Array.isArray(this.tempOptions)) {
  //       this.control.setValue((this.tempOptions as KklSelectOption[]).filter(b => b.selected));
  //       this.options$.next(this.tempOptions);
  //     } else if(this.tempOptions) {
  //       (this.tempOptions as BehaviorSubject<KklSelectOption[]>).subscribe((a: KklSelectOption[]) => {
  //         this.control.setValue(a?.filter(b => b.selected));
  //         this.options$.next(a);
  //       });
  //     }
  //   }, 0);
  // }


  // setErrorMessage() {
  //   const error = this.messageService.getErrorMessage(
  //     this.control as FormControl,
  //     this.placeHolder
  //   );

  //   this.error$.next(error);
  //   if (error && this.control.touched) {
  //     this.control.updateValueAndValidity();
  //   }
  // }

  // // onFocus() {
  // //   this.focus.emit({
  // //     key: this.question.key,
  // //     value: this.control.value,
  // //     action: KklFormActions.FOCUS_IN
  // //   });
  // // }
  // onSelectChanged(event) {
  //   event.value?.forEach(v => v.selected = true);

  //   this.selectChanged.emit({
  //     key: this.key,
  //     value: this.control.value,
  //     action: KklFormActions.MULTI_SELECT_CHANGED
  //   });
  // }
}
