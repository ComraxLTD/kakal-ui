import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';
import { BehaviorSubject, debounceTime, distinctUntilChanged, startWith, Subject, takeUntil } from 'rxjs';
import { MessageService } from '../mei-services/message.service';
import { KklFormActions, KklFormChangeEvent } from '../models/kkl-form-events';

@Component({
  selector: 'kkl-text-editor',
  templateUrl: './mei-text-editor.component.html',
  styleUrls: ['./mei-text-editor.component.scss']
})
export class MeiTextEditorComponent implements OnInit {
  destroySubject$: Subject<void> = new Subject();
  
  @Input() control!: FormControl;
  @Input() key!: string;
  @Input() placeHolder: string = '';
  @Input() debounce!: number;

  // error$: BehaviorSubject<string>;

  // @Output() focusChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() valueChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();

  constructor(private messageService: MessageService) {}

  editor: Editor;

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline'],
    ['ordered_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['image'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  ngOnInit(): void {
    this.editor = new Editor();
    if (this.control.value) {
      this.editor.setContent(this.control.value);
    }
    this.control.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged(),
      debounceTime(this.debounce? this.debounce : 300),
      takeUntil(this.destroySubject$)
    ).subscribe(a => this.onValueChanged());
    // this.error$ = new BehaviorSubject<string>('');
  }

  // private setErrorMessage() {
  //   const error = this.messageService.getErrorMessage(
  //     this.control,
  //     this.placeHolder
  //   );

  //   // this.error$.next(error);
  //   if (error && this.control.touched) {
  //     this.control.updateValueAndValidity();
  //   }
  // }

  // validate() {
  //   this.setErrorMessage();
  // }

  // onFocus() {
  //   console.log('kjhkhj');

  //   this.focusChanged.emit({
  //     key: this.key,
  //     value: this.control.value,
  //     action: KklFormActions.FOCUS_IN,
  //   });
  // }

  onValueChanged() {
    this.valueChanged.emit({
      key: this.key,
      value: this.control.value,
      action: KklFormActions.VALUE_CHANGED,
    });
  }

  ngOnDestroy(): void {
    this.editor.destroy();
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

}
