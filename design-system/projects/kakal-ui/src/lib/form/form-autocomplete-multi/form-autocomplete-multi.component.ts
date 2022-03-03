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
import { FormDataSource } from '../models/form-datasource';
import { Observable, of } from 'rxjs';
import { FormOption } from '../models/form-options';

@Component({
  selector: 'kkl-form-autocomplete-multi',
  templateUrl: './form-autocomplete-multi.component.html',
  styleUrls: ['./form-autocomplete-multi.component.scss'],
})
export class FormAutocompleteComponentMulti implements OnInit {
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
    // this.autocomplete$ = this.mergeFormEvents().pipe(mapTo(''));
  }

  // private mergeFormEvents() {
  //   return merge(
  //     this.onAutocompleteEvent(),
  //     this.formDataSource.listen.optionSelected()
  //   );
  // }

  // private onAutocompleteEvent(): Observable<FormOption> {
  //   return this.formDataSource.listen.autocomplete().pipe(
  //     debounceTime(500),
  //     distinctUntilKeyChanged('value'),
  //     tap((formOption: FormOption) => {
  //       const option: SelectOption = this.options.find((option) =>
  //         option.label.indexOf(formOption.value)
  //       );

  //       this.autocomplete.emit({
  //         key: this.key,
  //         option,
  //         value: formOption.value,
  //         value$: of(formOption.value),
  //       });
  //       return formOption;
  //     })
  //   );
  // }

  public search(query: string): void {
    const option: SelectOption = this.options.find((option) =>
      option.label.indexOf(query)
    );

    const formOption = {
      key: this.key,
      option,
      query,
      query$: of(query),
    };

    this.formDataSource.actions.autocomplete(formOption);
  }

  public onOptionSelected(event: MatAutocompleteSelectedEvent) {
    console.log(event);
    const option: SelectOption = event.option.value;
    // this.optionSelected.emit({
    //   key: this.key,
    //   value: option.value,
    //   option,
    // });

    const formOption: FormOption = {
      key: this.key,
      value: option.value,
      option,
    };

    this.formDataSource.actions.optionSelected(formOption);
  }

  public onSelectionChange(selectionList: MatSelectionList): void {
    const optionsList: MatListOption[] = selectionList.selectedOptions.selected;

    const options: SelectOption[] = optionsList.map((option: MatListOption) => {
      return option.value;
    });

    this.control.setValue(options);

    this.multiOptionsSelected.emit({
      key: this.key,
      value: options,
    });
  }

  public displayFn(option: any): string {
    if (option?.length) {
      const options = option as SelectOption[];
      const label = options[0].label;
      return options.length > 1 ? `${label} +${options.length - 1}` : label;
    }

    return option?.label || '';
  }
}
