import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter, map, Observable, startWith } from 'rxjs';
import { MeiMessageService } from '../mei-services/message.service';
import { MeiFormActions, MeiFormChangeEvent } from '../models/form-events';
import { MeiSelectOption } from '../models/select.model';

@Component({
  selector: 'mei-multi-autocomplete',
  templateUrl: './mei-multi-autocomplete.component.html',
  styleUrls: ['./mei-multi-autocomplete.component.scss']
})
export class MeiMultiAutocompleteComponent {

  filteredOptions: Observable<MeiSelectOption[]>;

  separatorKeysCodes: number[] = [ENTER, COMMA];

  myAutoControl = new FormControl();

  @Input() control!: FormControl;

  @Input() options!: BehaviorSubject<MeiSelectOption[]> | MeiSelectOption[];

  @Input() placeHolder!: string;
  @Input() label!: string;
  @Input() debounce!: number;
  @Input() key!: string;
  @Input() withButton!: string;
  @Input() icon!: string;
  @Input() panelWidth!: string;
  @Input() appearance!: string;

  @Output() openChanged: EventEmitter<MeiFormChangeEvent> = new EventEmitter();
  @Output() queryChanged: EventEmitter<MeiFormChangeEvent> = new EventEmitter();
  @Output() selectChanged: EventEmitter<MeiFormChangeEvent> = new EventEmitter();

  error$: BehaviorSubject<string>;

  isArray: boolean = false;
  constructor(private meiMessageService: MeiMessageService) { }

  ngOnInit(): void {
    if(Array.isArray(this.options)) {
      this.isArray = true;
      this.filteredOptions = this.myAutoControl.valueChanges.pipe(
        startWith(''),
        map(value => (typeof value === 'string' ? value : value.label)),
        map(label => (label ? this._filter(label) : (this.options as Array<MeiSelectOption>).slice())),
      );
    } else {
      (this.options as BehaviorSubject<MeiSelectOption[]>).subscribe((a: MeiSelectOption[]) => {
        this.control.setValue(a.filter(b => b.selected));
      });
    }
    this.myAutoControl.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged(),
      debounceTime(this.debounce? this.debounce : 500),
      filter( value => (typeof value === 'string'))
    ).subscribe(a => this.search());
    if(this.control.disabled) {
      this.myAutoControl.disable();
    }
    this.error$ = new BehaviorSubject<string>('');
  }

  displayFn(mei: MeiSelectOption): string {
    return mei?.label;
  }

  private _filter(label: string): MeiSelectOption[] {
    const filterValue = label.toLowerCase();
    return (this.options as Array<MeiSelectOption>).filter(option => option.label.toLowerCase().includes(filterValue));
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
    const error = this.meiMessageService.getErrorMessage(
      this.control as FormControl,
      this.placeHolder
    );

    this.error$.next(error);
    if (error && this.control.touched) {
      this.control.updateValueAndValidity();
    }
  }


  onMultiSelectionChange(event): void {
    event.option.value.selected = true;
    this.control.setValue(this.control.value.concat([event.option.value]));
    this.myAutoControl.setValue(event.option.value.label)

    this.selectChanged.emit({
      key: this.key,
      value: this.control.value,
      action: MeiFormActions.MULTI_OPTION_SELECTED
    });
  }

  search() {
    this.queryChanged.emit({
      key: this.key,
      value: this.control.value,
      action: MeiFormActions.QUERY_CHANGED,
      query: this.myAutoControl.value
    });
  }


  onOpenChanged(event) {
    this.openChanged.emit({
      key: this.key,
      value: this.control.value,
      action: event ? MeiFormActions.OPENED_SELECT : MeiFormActions.CLOSED_SELECT,
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

  remove(meiSelect: MeiSelectOption): void {
    meiSelect.selected = true;
    const index = this.control.value.indexOf(meiSelect);
    if (index >= 0) {
      this.control.value.splice(index, 1);
      this.selectChanged.emit({
        key: this.key,
        value: this.control.value,
        action: MeiFormActions.MULTI_OPTION_SELECTED
      });
    }
  }


}




