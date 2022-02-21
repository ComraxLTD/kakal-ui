import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatSelectionList } from '@angular/material/list';
import { QuestionAutocompleteModel } from '../models/question-autocomplete';
import { SelectOption } from '../models/question-select.model';
import { FormDataSource, FormOption } from '../models/form-data-source.model';
import {
  debounceTime,
  distinctUntilKeyChanged,
  map,
  mapTo,
  startWith,
  tap,
} from 'rxjs/operators';
import { merge, Observable, of } from 'rxjs';

@Component({
  selector: 'kkl-form-autocomplete',
  templateUrl: './form-autocomplete.component.html',
  styleUrls: ['./form-autocomplete.component.scss'],
})
export class FormAutocompleteComponent implements OnInit {
  @Input() public question: QuestionAutocompleteModel;
  @Input() public control: FormControl;
  @Input() public formDataSource: FormDataSource;
  @Input() public optionsSlot: ElementRef;

  @Output() autocomplete: EventEmitter<FormOption> = new EventEmitter();
  @Output() optionSelected: EventEmitter<FormOption> = new EventEmitter();
  @Output() multiOptionsSelected: EventEmitter<FormOption> = new EventEmitter();

  public autocomplete$: Observable<string>;

  constructor() {}

  ngOnInit(): void {
    this.formDataSource = new FormDataSource();
    this.autocomplete$ = this.mergeFormEvents().pipe(mapTo(''));
  }

  private mergeFormEvents() {
    return merge(
      this.onAutocompleteEvent(),
      this.formDataSource.listen.optionSelected()
    );
  }

  private onAutocompleteEvent(): Observable<FormOption> {
    return this.formDataSource.listen.autocomplete().pipe(
      debounceTime(500),
      distinctUntilKeyChanged('value'),
      tap((formOption: FormOption) => {
        this.autocomplete.emit({
          key: this.question.key,
          value: formOption.value,
          value$: of(formOption.value),
        });
        return formOption;
      })
    );
  }

  public search(value: string): void {
    this.formDataSource
      .getActions()
      .autocomplete({ key: this.question.key, value });
  }

  public onOptionSelected(event: MatAutocompleteSelectedEvent) {
    const option: SelectOption = event.option.value;

    this.optionSelected.emit({
      key: this.question.key,
      value: option.value,
      option,
    });
  }

  public onSelectionChange(option: MatSelectionList): void {
    const options = option.selectedOptions.selected;

    const selected: string[] = options.map((option) => {
      return option.value;
    });

    let selectedLabel: any = this.question.options.filter((option) =>
      selected.includes(option.value)
    );

    selectedLabel = selectedLabel.map((option) => option.label);

    if (options.length === 0) {
      this.multiOptionsSelected.emit({ key: this.question.key, value: [] });
      if (this.control) {
        if (options.length == 0) this.control.setValue([]);
      }
      return;
    }

    const arr = this.question.options.filter(
      (option: SelectOption) => selected.indexOf(option.value) >= 0
    );

    this.multiOptionsSelected.emit({
      key: this.question.key,
      value: selected,
      options: this.question.options.filter(
        (option: SelectOption) => selected.indexOf(option.value) >= 0
      ),
    });
  }

  public displayFn(option: SelectOption): string {
    return option?.label || ''
  }
}
