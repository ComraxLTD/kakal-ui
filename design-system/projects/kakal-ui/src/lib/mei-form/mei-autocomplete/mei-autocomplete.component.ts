import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, map, Observable, startWith } from 'rxjs';
import { MeiMessageService } from '../mei-services/message.service';
import { MeiFormActions, MeiFormChangeEvent } from '../models/form-events';
import { QuestionBase } from '../models/question.model';
import { MeiSelectOption } from '../models/select.model';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'mei-autocomplete',
  templateUrl: './mei-autocomplete.component.html',
  styleUrls: ['./mei-autocomplete.component.scss']
})
export class MeiAutocompleteComponent implements OnInit {

  filteredOptions: Observable<MeiSelectOption[]>;

  separatorKeysCodes: number[] = [ENTER, COMMA];

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
      this.filteredOptions = this.control.valueChanges.pipe(
        startWith(''),
        map(value => (typeof value === 'string' ? value : value.label)),
        map(label => (label ? this._filter(label) : (this.options as Array<MeiSelectOption>).slice())),
      );
    } else {
      (this.options as BehaviorSubject<MeiSelectOption[]>).subscribe((a: MeiSelectOption[]) => {
        this.control.setValue(a.find(b => b.selected));
      });
    }
    this.control.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged(),
      debounceTime(this.debounce? this.debounce : 500),
      filter( value => (typeof value === 'string'))
    ).subscribe(a => this.search());
    this.error$ = new BehaviorSubject<string>('');
  }

  displayFn(mei: MeiSelectOption): string {
    return mei?.label;
  }

  private _filter(label: string): MeiSelectOption[] {
    const filterValue = label.toLowerCase();
    return (this.options as Array<MeiSelectOption>).filter(option => option.label.toLowerCase().includes(filterValue));
  }

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


  onSelectionChange(event): void {
    event.option.value.selected = true;
    this.selectChanged.emit({
      key: this.key,
      value: this.control.value,
      action: MeiFormActions.OPTION_SELECTED
    });
  }

  search() {
    this.queryChanged.emit({
      key: this.key,
      value: this.control.value !== 'string'? this.control.value : null,
      action: MeiFormActions.QUERY_CHANGED,
      query: this.control.value === 'string'? this.control.value : null
    });
  }

  onOpenChanged(event) {
    this.openChanged.emit({
      key: this.key,
      value: this.control.value !== 'string'? this.control.value : null,
      action: event ? MeiFormActions.OPENED_SELECT : MeiFormActions.CLOSED_SELECT,
      query: this.control.value === 'string'? this.control.value : null
    });
  }

}
