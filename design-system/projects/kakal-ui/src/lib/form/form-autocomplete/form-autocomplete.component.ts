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
    const options: MatListOption[] = selectionList.selectedOptions.selected;

    const selected: string[] = options.map((option: MatListOption) => {
      return option.value;
    });

    // let selectedLabel: any = this.options.filter((option) =>
    //   selected.includes(option.value)
    // );

    // selectedLabel = selectedLabel.map((option) => option.label);

    if (options.length === 0) {
      this.multiOptionsSelected.emit({ key: this.key, value: [] });
      return;
    }

    // const arr = this.options.filter(
    //   (option: SelectOption) => selected.indexOf(option.value) >= 0
    // );

    // console.log('multi options', options[0]);
    this.control.setValue(options);
    this.multiOptionsSelected.emit({
      key: this.key,
      value: selected,
      // options: this.options.filter(
      //   (option: SelectOption) => selected.indexOf(option.value) >= 0
      // ),
      options,
    });
  }

  public displayFn(option: any): string {
    if (option?.length) {
      const options = option as MatListOption[];
      const label = options[0].value.label;
      return options.length > 1 ? `${label} +${options.length - 1}` : label;
    }

    return option?.label || '';
  }
}
