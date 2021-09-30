import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { SelectOption } from '../models/question-select.model';
import { QuestionBase } from '../services/form.service';

@Component({
  selector: 'app-form-autocomplete',
  templateUrl: './form-autocomplete.component.html',
  styleUrls: ['./form-autocomplete.component.scss']
})
export class FormAutocompleteComponent implements OnInit {

  @Input() public question: QuestionBase;
  @Input() public control: FormControl;

  public type: string;
  public label: string;
  public icon: string;
  public options: SelectOption[]
  public error: string = ''
  public disabled: boolean

  @Output() autocomplete: EventEmitter<FormControl> = new EventEmitter()
  @Output() optionSelected: EventEmitter<MatAutocompleteSelectedEvent> = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  public onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.optionSelected.emit(event)
  }


}
