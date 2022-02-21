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
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { SelectOption } from '../models/question-select.model';
import { FormDataSource, FormOption } from '../models/form-data-source.model';
import {
  debounceTime,
  distinctUntilKeyChanged,
  mapTo,
  tap,
} from 'rxjs/operators';
import { merge, Observable, of } from 'rxjs';

@Component({
  selector: 'kkl-form-autocomplete',
  templateUrl: './form-autocomplete.component.html',
  styleUrls: ['./form-autocomplete.component.scss'],
})
export class FormAutocompleteComponent implements OnInit {
  @Input() public control: FormControl;
  @Input() public key: string;
  @Input() public icon: string;
  @Input() public label: string;
  @Input() public options: SelectOption[];
  @Input() public panelWidth: boolean;
  @Input() public multi: boolean;

  @Input() public optionsSlot: ElementRef;
  @Input() public selector: (config: {
    selector: string;
    options: SelectOption[];
  }) => SelectOption;

  @Input() public formDataSource: FormDataSource;

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
        const option: SelectOption = this.options.find((option) =>
          option.label.indexOf(formOption.value)
        );

        this.autocomplete.emit({
          key: this.key,
          option,
          value: formOption.value,
          value$: of(formOption.value),
        });
        return formOption;
      })
    );
  }

  public search(value: string): void {
    this.formDataSource.getActions().autocomplete({ key: this.key, value });
  }

  public onOptionSelected(event: MatAutocompleteSelectedEvent) {
    const option: SelectOption = event.option.value;
    this.optionSelected.emit({
      key: this.key,
      value: option.value,
      option,
    });
  }

  public onSelectionChange(option: MatSelectionList): void {
    const options = option.selectedOptions.selected;

    const selected: string[] = options.map((option: MatListOption) => {
      return option.value;
    });

    let selectedLabel: any = this.options.filter((option) =>
      selected.includes(option.value)
    );

    selectedLabel = selectedLabel.map((option) => option.label);

    if (options.length === 0) {
      this.multiOptionsSelected.emit({ key: this.key, value: [] });
      if (this.control) {
        if (options.length == 0) this.control.setValue([]);
      }
      return;
    }

    const arr = this.options.filter(
      (option: SelectOption) => selected.indexOf(option.value) >= 0
    );

    this.multiOptionsSelected.emit({
      key: this.key,
      value: selected,
      options: this.options.filter(
        (option: SelectOption) => selected.indexOf(option.value) >= 0
      ),
    });
  }

  public displayFn(option: any): string {
    return option?.label || '';
  }
}
