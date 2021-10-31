import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { QuestionAutocompleteModel } from '../models/question-autocomplete';
import { SelectOption } from '../models/question-select.model';



@Component({
  selector: 'kkl-form-autocomplete',
  templateUrl: './form-autocomplete.component.html',
  styleUrls: ['./form-autocomplete.component.scss']
})

export class FormAutocompleteComponent implements OnInit {

  @Input() public question: QuestionAutocompleteModel;
  @Input() public control: FormControl;
  @Input() public options$: Observable<SelectOption[]>;
  @Input() public optionsSlot: {};

  public type: string;
  public label: string;
  public icon: string;
  public options: SelectOption[];
  public error: string = '';
  public disabled: boolean;

  @Output() autocomplete: EventEmitter<FormControl> = new EventEmitter();
  @Output() optionSelected: EventEmitter<MatAutocompleteSelectedEvent> =
    new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.label = this.question?.label || '';
    this.icon = this.question?.icon || '';
    this.options = this.question.options;
  }

  public onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.optionSelected.emit(event);
  }



}
