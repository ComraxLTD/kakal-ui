import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, map, Observable, startWith } from 'rxjs';
import { MessageService } from '../mei-services/message.service';
import { KklFormActions, KklFormChangeEvent } from '../models/kkl-form-events';
import { KklSelectOption } from '../models/kkl-select.model';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'kkl-autocomplete',
  templateUrl: './mei-autocomplete.component.html',
  styleUrls: ['./mei-autocomplete.component.scss']
})
export class MeiAutocompleteComponent implements OnInit {

  filteredOptions: Observable<KklSelectOption[]>;

  separatorKeysCodes: number[] = [ENTER, COMMA];

  @Input() control!: FormControl;

  _options!: BehaviorSubject<KklSelectOption[]> | KklSelectOption[];
  tempOptions: BehaviorSubject<KklSelectOption[]> | KklSelectOption[];
  @Input() set options(val: BehaviorSubject<KklSelectOption[]> | KklSelectOption[]) {
    if(this.control){
      this._options = val;
      if(Array.isArray(val)) {
        this.isArray = true;
        this.control.setValue(val.find(b => b.selected));
        if(!this.filteredOptions) {
          this.filteredOptions = this.control.valueChanges.pipe(
            startWith(''),
            map(value => (typeof value === 'string' ? value : value.label)),
            map(label => (label ? this._filter(label) : (this._options as Array<KklSelectOption>).slice())),
          );
        }
      } else {
        this.isArray = false;
        (val as BehaviorSubject<KklSelectOption[]>).subscribe((a: KklSelectOption[]) => {
          this.control.setValue(a.find(b => b.selected));
        });
      }
    } else {
      this.tempOptions = val;
    }

  }
  @Input() placeHolder!: string;
  @Input() label!: string;
  @Input() debounce!: number;
  @Input() key!: string;
  @Input() withButton!: string;
  @Input() icon!: string;
  @Input() panelWidth!: string;
  @Input() appearance!: string;

  @Output() openChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() queryChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() selectChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();

  error$: BehaviorSubject<string>;

  isArray: boolean = false;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.control.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged(),
      debounceTime(this.debounce? this.debounce : 300),
      filter( value => (typeof value === 'string'))
    ).subscribe(a => this.search());
    this.error$ = new BehaviorSubject<string>('');
    if(Array.isArray(this.tempOptions)) {
      this._options = this.tempOptions;
      this.isArray = true;
      this.control.setValue(this.tempOptions.find(b => b.selected));
      if(!this.filteredOptions) {
        this.filteredOptions = this.control.valueChanges.pipe(
          startWith(''),
          map(value => (typeof value === 'string' ? value : value.label)),
          map(label => (label ? this._filter(label) : (this._options as Array<KklSelectOption>).slice())),
        );
      }
    } else if(this.tempOptions) {
      this.isArray = false;
      this._options = this.tempOptions;
      (this.tempOptions as BehaviorSubject<KklSelectOption[]>).subscribe((a: KklSelectOption[]) => {
        this.control.setValue(a.find(b => b.selected));
      });
    }
  }

  displayFn(mei: KklSelectOption): string {
    return mei?.label;
  }

  private _filter(label: string): KklSelectOption[] {
    const filterValue = label.toLowerCase();
    return (this._options as Array<KklSelectOption>).filter(option => option.label.toLowerCase().includes(filterValue));
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


  onSelectionChange(event): void {
    event.option.value.selected = true;
    this.selectChanged.emit({
      key: this.key,
      value: this.control.value,
      action: KklFormActions.OPTION_SELECTED
    });
  }

  search() {
    this.queryChanged.emit({
      key: this.key,
      value: this.control.value !== 'string'? this.control.value : null,
      action: KklFormActions.QUERY_CHANGED,
      query: this.control.value === 'string'? this.control.value : null
    });
  }

  onOpenChanged(event) {
    this.openChanged.emit({
      key: this.key,
      value: this.control.value !== 'string'? this.control.value : null,
      action: event? KklFormActions.OPENED_SELECT : KklFormActions.CLOSED_SELECT,
      query: this.control.value === 'string'? this.control.value : null
    });
  }

}
