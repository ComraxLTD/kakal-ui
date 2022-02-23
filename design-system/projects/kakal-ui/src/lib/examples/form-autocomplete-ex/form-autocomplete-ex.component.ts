import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectOption } from '../../form/models/question-select.model';
import {
  FormDataSource,
  FormOption,
} from '../../form/models/form-data-source.model';
import { FormService } from '../../form/services/form.service';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'pl-form-autocomplete-ex',
  templateUrl: './form-autocomplete-ex.component.html',
  styleUrls: ['./form-autocomplete-ex.component.scss'],
})
export class FormAutocompleteExComponent implements OnInit {
  @Input() public control: FormControl;
  @Input() public key: string;
  @Input() public icon: string;
  @Input() public label: string;
  @Input() public options: SelectOption[];
  @Input() public panelWidth: boolean;
  @Input() public multi: boolean;
  @Input() public formDataSource: FormDataSource;
  @Input() public optionsSlot: ElementRef;

  public options$: Observable<SelectOption[]>;


  @Output() autocomplete: EventEmitter<FormOption> = new EventEmitter();
  @Output() optionSelected: EventEmitter<FormOption> = new EventEmitter();
  @Output() multiOptionsSelected: EventEmitter<FormOption> = new EventEmitter();

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.control = this.formService.getFieldControl({ key: this.key });
    this.options$ = of(this.options);
  }

  onAutoComplete(formOption: FormOption): void {

    this.options$ = of(this.options).pipe(
      map((options: SelectOption[]) => {

        return options.filter((option: SelectOption) =>
          option.label.includes(formOption.value)
        );
      })
    );
  }
}
