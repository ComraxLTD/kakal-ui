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
import { FormChangeEvent } from '../models/form.options';
import { FormActions } from '../models/form.actions';

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

  @Output() autocomplete: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() optionSelected: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() multiOptionsSelected: EventEmitter<FormChangeEvent> = new EventEmitter();

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

  // private onAutocompleteEvent(): Observable<FormChangeEvent> {
  //   return this.formDataSource.listen.autocomplete().pipe(
  //     debounceTime(500),
  //     distinctUntilKeyChanged('value'),
  //     tap((FormChangeEvent: FormChangeEvent) => {
  //       const option: SelectOption = this.options.find((option) =>
  //         option.label.indexOf(FormChangeEvent.value)
  //       );

  //       this.autocomplete.emit({
  //         key: this.key,
  //         option,
  //         value: FormChangeEvent.value,
  //         value$: of(FormChangeEvent.value),
  //       });
  //       return FormChangeEvent;
  //     })
  //   );
  // }

  public search(query: string): void {
    const option: SelectOption = this.options.find((option) =>
      option.label.indexOf(query)
    );

    const FormChangeEvent = {
      key: this.key,
      option,
      query,
      query$: of(query),
      action : FormActions.QUERY_CHANGED

    };

    this.formDataSource.dispatch.queryChanged(FormChangeEvent);
  }

  public onOptionSelected(event: MatAutocompleteSelectedEvent) {
    const option: SelectOption = event.option.value;
    // this.optionSelected.emit({
    //   key: this.key,
    //   value: option.value,
    //   option,
    // });

    const FormChangeEvent: FormChangeEvent = {
      key: this.key,
      value: option.value,
      action : FormActions.OPTION_SELECTED
    };

    this.formDataSource.dispatch.optionSelected(FormChangeEvent);
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
      action : FormActions.MULTI_SELECTED
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
