import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter, map, Observable, startWith, Subject, takeUntil } from 'rxjs';
import { MessageService } from '../mei-services/message.service';
import { Appearance } from '../models/control.types';
import { KklFormActions, KklFormChangeEvent } from '../models/kkl-form-events';
import { KklSelectOption } from '../models/kkl-select.model';

@Component({
  selector: 'kkl-multi-autocomplete',
  templateUrl: './mei-multi-autocomplete.component.html',
  styleUrls: ['./mei-multi-autocomplete.component.scss']
})
export class MeiMultiAutocompleteComponent {
  destroySubject$: Subject<void> = new Subject();

  filteredOptions: Observable<KklSelectOption[]>;

  separatorKeysCodes: number[] = [ENTER, COMMA];

  myAutoControl = new FormControl();

  @Input() control!: FormControl;

  _options!: BehaviorSubject<KklSelectOption[]> | KklSelectOption[];
  tempOptions: BehaviorSubject<KklSelectOption[]> | KklSelectOption[];
  @Input() set options(val: BehaviorSubject<KklSelectOption[]> | KklSelectOption[]) {
    if(this.tempOptions) {
      if(Array.isArray(val)) {
        this._options = val;
        this.isArray = true;
        this.control.setValue(val.filter(b => b.selected));
        if(!this.filteredOptions) {
          this.filteredOptions = this.myAutoControl.valueChanges.pipe(
            startWith(''),
            map(value => (typeof value === 'string' ? value : value.label)),
            map(label => (label ? this._filter(label) : (this._options as Array<KklSelectOption>).slice())),
          );
        }
      } else {
        this.isArray = false;
        (val as BehaviorSubject<KklSelectOption[]>).pipe(takeUntil(this.destroySubject$)).subscribe((a: KklSelectOption[]) => {
          this.control.setValue(a?.filter(b => b.selected));
        });
      }
    }
    // setTimeout(() => {
      this.tempOptions = val;
    // }, 0);
  }
  @Input() placeHolder!: string;
  @Input() label!: string;
  @Input() debounce!: number;
  @Input() key!: string;
  @Input() withButton!: string;
  @Input() icon!: string;
  @Input() panelWidth!: string;
  @Input() appearance: Appearance;

  @Output() openedChange: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() queryChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() selectChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();

  error$: BehaviorSubject<string>;

  isArray: boolean = false;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    // setTimeout(() => {
      this.myAutoControl.valueChanges.pipe(
        startWith(''),
        distinctUntilChanged(),
        debounceTime(this.debounce? this.debounce : 300),
        filter( value => (typeof value === 'string')),
        takeUntil(this.destroySubject$)
      ).subscribe(a => this.search());
      if(this.control.disabled) {
        this.myAutoControl.disable();
      }
      this._options = this.tempOptions;
      if(Array.isArray(this.tempOptions)) {
        this.isArray = true;
        this.control.setValue(this.tempOptions.filter(b => b.selected));
        if(!this.filteredOptions) {
          this.filteredOptions = this.myAutoControl.valueChanges.pipe(
            startWith(''),
            map(value => (typeof value === 'string' ? value : value.label)),
            map(label => (label ? this._filter(label) : (this._options as Array<KklSelectOption>).slice())),
          );
        }
      } else if(this.tempOptions) {
        this.isArray = false;
        (this._options as BehaviorSubject<KklSelectOption[]>).pipe(takeUntil(this.destroySubject$)).subscribe((a: KklSelectOption[]) => {
          this.control.setValue(a?.filter(b => b.selected));
        });
      }
      this.error$ = new BehaviorSubject<string>('');
    // }, 0);
  }

  displayFn(mei: KklSelectOption): string {
    return mei?.label;
  }

  private _filter(label: string): KklSelectOption[] {
    const filterValue = label.toLowerCase();
    return (this._options as Array<KklSelectOption>).filter(option => option.label.toLowerCase().includes(filterValue));
  }

  // deselectAll() {
  //   this.control.patchValue([]);
  //   (this.options as BehaviorSubject<MeiSelectOption[]>).pipe(take(1)).subscribe((a: MeiSelectOption[]) => {
  //     a.forEach(b => {
  //       b.selected = false;
  //     })
  //     this.options$.next(a);
  //   });
  // }

  setErrorMessage() {
    const error = this.messageService.getErrorMessage(
      this.control as FormControl
    );

    this.error$.next(error);
    if (error && this.control.touched) {
      this.control.updateValueAndValidity();
    }
  }


  onMultiSelectionChange(event): void {
    event.option.value.selected = true;
    this.control.setValue(this.control.value.concat([event.option.value]));
    this.myAutoControl.setValue('');

    this.selectChanged.emit({
      key: this.key,
      value: this.control.value,
      action: KklFormActions.MULTI_OPTION_SELECTED
    });
  }

  search() {
    this.queryChanged.emit({
      key: this.key,
      value: this.control.value,
      action: KklFormActions.QUERY_CHANGED,
      query: this.myAutoControl.value
    });
  }


  onOpenChanged(event) {
    this.openedChange.emit({
      key: this.key,
      value: this.control.value,
      action: event? KklFormActions.OPENED_SELECT : KklFormActions.CLOSED_SELECT,
      query: this.myAutoControl.value
    });
  }

  add(event: MatChipInputEvent): void {
    // const value = (event.value || '').trim();

    // // Add our fruit
    // if (value) {
    //   this.fruits.push(value);
    // }

    // // Clear the input value
    // event.chipInput!.clear();

    // this.fruitCtrl.setValue(null);
  }

  remove(meiSelect: KklSelectOption): void {
    meiSelect.selected = false;
    const index = this.control.value.indexOf(meiSelect);
    if (index >= 0) {
      this.control.value.splice(index, 1);
      this.selectChanged.emit({
        key: this.key,
        value: this.control.value,
        action: KklFormActions.MULTI_OPTION_SELECTED
      });
    }
  }

  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }


}




