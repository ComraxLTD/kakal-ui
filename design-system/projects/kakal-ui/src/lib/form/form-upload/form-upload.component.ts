import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
import { map, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'kkl-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormUploadComponent,
      multi: true,
    },
  ],
  host: {
    class: 'kkl-form-upload',
    '[class.kkl-disabled]': 'disabled',
  },
  inputs: ['disabled', 'disableRipple', 'color'],
})
export class FormUploadComponent implements OnInit, ControlValueAccessor, OnDestroy {
  @ViewChild('input') _inputElement: ElementRef<HTMLInputElement>;

  @Input() public label: string = 'העלה מסמך';
  @Input() public index: number;
  @Input() public multi: boolean = true;

  public disabled: boolean;
  public label$: Observable<string>;
  public files: File[] = [];
  private labelSub: Subscription;

  // emit the file
  @Output() fileChange = new EventEmitter<File[]>();

  constructor() { }

  private _onChange: (v: File[]) => void = (value: File[]) => { };

  ngOnInit(): void {
    this.label$ = of(this.label);
    // this.label$ = this.setLabelFormFileLength$();
    this.labelSub = this.setLabelFormFileLength$().subscribe(res => this.label$ = of(res))
  }

  ngOnDestroy(): void {
    this.labelSub.unsubscribe();
  }

  // ControlValueAccessor interface methods
  writeValue(value: File[]) {
    if (!value) {
      this.fileChange.emit([]);
    }
    this.files = value || [];
    this._emitChangeEvent();
  }

  registerOnChange(fn: (v: File[] | null) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: Function) { }

  // SET PROPS SECTION
  public setLabelFormFileLength$(): Observable<string> {
    return this.fileChange.pipe(
      map((event: File[]) => {
        return Object.values(event);
      }),
      map((files: File[]) =>
        files.length === 0
          ? this.label
          : files.length === 1
            ? '1 קובץ מצורף'
            : `${files.length} קבצים מצורפים`
      ),
    );
  }

  // private setLabel$(): Observable<string> {
  //   return merge(of(this.question.label), this.setLabelFormFileLength$());
  // }

  public onClick(fileUpload, menuTrigger: MatMenuTrigger) {
    if (this.files && this.files.length) menuTrigger.openMenu();
    else fileUpload.click();
  }

  public _onChangeEvent(event: Event) {
    event.stopPropagation();
    this.files = [
      ...this.files,
      ...Object.values(this._inputElement.nativeElement.files),
    ];

    this._emitChangeEvent();
  }

  // HTML EVENTS SECTION

  public onRemoveFile(file: File, $event: Event) {
    if (this.files.length > 1) {
      $event.stopPropagation();
    }

    const chosenFile = this.files.findIndex(
      (filter) => filter.name === file.name
    );
    this.files.splice(chosenFile, 1);
    this.fileChange.emit(this.files);
  }

  private _emitChangeEvent() {
    this._onChange(this.files);
    this.fileChange.emit(this.files);
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
