import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { FormDataSource } from '../models/form-datasource';
import { FormChangeEvent } from '../models/form.options';
import { QuestionGroupModel } from '../models/form.types';

@Component({
  selector: 'kkl-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss'],
  providers: [FormDataSource],
})
export class FormSearchComponent implements OnInit {
  @Input() control!: FormControl | AbstractControl;
  @Input() asButton!: boolean;

  constructor() {}

  ngOnInit(): void {}

  public onQueryChanged(event: FormChangeEvent): void {}

  public onOptionSelected(event: FormChangeEvent): void {}

  public onMultiOptionSelected(event: FormChangeEvent) {}
}
