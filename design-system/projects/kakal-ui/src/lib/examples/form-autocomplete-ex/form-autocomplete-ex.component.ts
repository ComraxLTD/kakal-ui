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
import { QuestionAutocompleteModel } from '../../form/models/question-autocomplete';
import {
  FormDataSource,
  FormOption,
} from '../../form/models/form-data-source.model';
import { FormService } from '../../form/services/form.service';

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

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.control = this.formService.getFieldControl({ key: this.key });
  }

  onAutoComplete(formOption: FormOption): void {
    const options = this.options.filter((item) =>
      item.value.includes(formOption.value)
    );
    this.options = [...options];
  }
}
