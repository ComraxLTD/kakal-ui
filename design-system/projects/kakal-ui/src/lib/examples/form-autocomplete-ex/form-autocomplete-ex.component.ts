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
import { map, merge, Observable, of } from 'rxjs';

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

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.control = this.formService.getFieldControl({ key: this.key });
    this.options$ = merge(of(this.options), this.onAutocompleteEvent());
    this.formDataSource.listen.optionSelected().subscribe((opt) => console.log(opt));

  }

  private onAutocompleteEvent() {
    return this.formDataSource.listen.autocomplete().pipe(
      map((formOption: FormOption) => formOption.query),
      map((query: string) => {
        return this.options.filter((option: SelectOption) =>
          option.label.includes(query)
        );
      })
    );
  }

  public onOptionSelected(formOption: FormOption) {
    console.log(formOption);
  }

  public onMultiOptionsSelected(formOption: FormOption) {

  }
}
