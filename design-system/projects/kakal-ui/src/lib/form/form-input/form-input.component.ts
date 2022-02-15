import { MessageService } from './../services/message.service';
import { FormControl, FormControlStatus } from '@angular/forms';
import { QuestionBase } from '../services/form.service';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  QuestionSelectModel,
  SelectOption,
} from './../models/question-select.model';
import { Appearance, ControlType, GridProps } from '../models/question.model';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Palette } from '../../../styles/theme';
import { QuestionAutocompleteModel } from '../models/question-autocomplete';
import { FormOption } from '../models/form-data-source.model';
import { MatSelectionList } from '@angular/material/list';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
} from 'rxjs/operators';

@Component({
  selector: 'kkl-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit {
  @Input() public question: QuestionBase;
  @Input() public control: FormControl;
  @Input() public appearance: Appearance;
  @Input() public optionsSlot: ElementRef;
  @Input() public index: number;

  public controlType: ControlType;
  public label: string;
  public icon: string;
  public options: SelectOption[];

  public error$: BehaviorSubject<string>;
  public color$: Observable<Palette>;

  public gridProps: GridProps;
  public iconType: string = 'svg';
  public iconRotate: number = 0;
  public autocompleteValue$: Observable<string>;
  public optionSelected$: Observable<any>;

  public localFilter: boolean;
  public filteredOptions: Observable<any[]>;

  @Output() public selected: EventEmitter<FormOption> = new EventEmitter();
  @Output() public optionSelected: EventEmitter<FormOption> =
    new EventEmitter();
  @Output() autocomplete: EventEmitter<FormOption> = new EventEmitter();
  @Output() focusoutEvent: EventEmitter<FormOption> = new EventEmitter();
  @Output() focus: EventEmitter<FormOption> = new EventEmitter();

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.error$ = new BehaviorSubject<string>('');
    this.color$ = this.setColor$();

    if (this.question) {
      this.appearance = this.question?.appearance;
      this.controlType = this.question?.controlType;
      this.gridProps = this.question?.gridProps;
      this.label = this.question?.label || '';
      this.icon = this.question?.icon || '';
      this.localFilter = this.question?.localFilter;
    }

    if (this.question instanceof QuestionSelectModel) {
      this.options = this.question.options;
    }

    if (
      this.question instanceof QuestionAutocompleteModel ||
      this.question.autocomplete
    ) {
      this.autocompleteValue$ = this.onAutocomplete();
    }

    if (!this.localFilter) {
      this.localFilter = true;
    }

    if (this.localFilter) {
      this.filteredOptions = this.control.valueChanges.pipe(
        startWith(''),
        map((value) => this.filter(value))
      );
    }
  }

  private setColor$() {
    const startStatus: FormControlStatus = this.control.disabled
      ? 'DISABLED'
      : 'VALID';

    return this.control.statusChanges.pipe(
      startWith(startStatus),
      map((status: FormControlStatus) => {
        let color: Palette = 'primary';

        switch (status) {
          case 'DISABLED':
            color = 'disable';
            break;
          case 'INVALID':
            if (this.control.touched) {
              color = 'warn';
            }
            break;
          default:
            color;
            break;
        }

        return color;
      })
    );
  }

  private filter(value: string): SelectOption[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option: any) =>
      option.label.toLowerCase().includes(filterValue)
    );
  }

  private setErrorMessage() {
    const error = this.messageService.getErrorMessage(
      this.control,
      this.question.placeHolder
    );

    this.error$.next(error);
    if (error && this.control.touched) {
      this.control.updateValueAndValidity();
    }
  }

  public validate() {
    this.setErrorMessage();
  }
  private getOption(value: any): SelectOption | null {
    const question = this.question as
      | QuestionSelectModel
      | QuestionAutocompleteModel;

    if (question?.options) {
      return question.options.find(
        (option: SelectOption) => option.value === value
      );
    } else {
      return null;
    }
  }

  private getFormOption(value?: string): FormOption {
    const formOption: FormOption = {
      key: this.question.key,
      control: this.control,
      index: this.index,
      value$: of(value),
      option: this.getOption(value),
    };

    return formOption;
  }

  // EVENTS SECTION

  public onSelectChange() {
    const formOption: FormOption = this.getFormOption(this.control.value);
    if (
      this.question instanceof QuestionSelectModel &&
      this.question.onSelectChange
    ) {
      this.question.onSelectChange(formOption);
    }

    this.selected.emit(formOption);
  }

  public onAutocomplete(): Observable<string> {
    return this.control.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      map((value: string) => {
        const formOption: FormOption = this.getFormOption(value);
        this.autocomplete.emit(formOption);
        return value;
      })
    );
  }

  public onOptionSelected(event: MatAutocompleteSelectedEvent) {
    const value = event.option.value;
    const formOption: FormOption = this.getFormOption(value);

    this.optionSelected.emit(formOption);

    if (
      this.question instanceof QuestionAutocompleteModel &&
      this.question.onOptionSelect
    ) {
      this.question.onOptionSelect(formOption);
    }
  }

  public onMultiOptionSelected(event: MatSelectionList) {
    const options = event.selectedOptions.selected;
    const list = options.map((option) => option.value);
    const filteredList = this.question['options'].filter(
      (option) => list.indexOf(option.value) >= 0
    );

    const formOption: FormOption = {
      key: this.question.key,
      control: this.control,
      multi: this.question['multi'],
      options: filteredList,
      value$: of(filteredList),
    };

    this.optionSelected.emit(formOption);

    if (
      this.question instanceof QuestionAutocompleteModel &&
      this.question.onOptionSelect
    ) {
      this.question.onOptionSelect(formOption);
    }
  }

  public onAutocompleteFocusout() {
    this.focusoutEvent.emit(this.getFormOption());
  }

  public onFocus() {
    this.focus.emit(this.getFormOption());
  }
}
