import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { SelectOption } from '../models/question-select.model';
import { of } from 'rxjs';
import { FormOption } from '../models/form-options';

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

  @Input() public optionSlot: TemplateRef<any>;

  @Input() public selector: (config: {
    selector: string;
    options: SelectOption[];
  }) => SelectOption;

  @Output() autocomplete: EventEmitter<FormOption> = new EventEmitter();
  @Output() optionSelected: EventEmitter<FormOption> = new EventEmitter();
  @Output() multiOptionsSelected: EventEmitter<FormOption> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.optionSlot);
  }

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
    this.autocomplete.emit(formOption);
  }

  public onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    const option: SelectOption = event.option.value;

    const formOption: FormOption = {
      key: this.key,
      value: option.value,
      option,
    };

    this.optionSelected.emit(formOption);
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
