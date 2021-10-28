import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { QuestionGroupModel } from '../models/question-group.model';
import { SelectOption } from '../models/question-select.model';
import { GridProps } from '../models/question.model';
import { Question, QuestionBase } from '../services/form.service';



export interface Register {
  form: FormGroup,
  questions$?: BehaviorSubject<Question[]>
}


@Component({
  selector: 'kkl-form-autocomplete',
  templateUrl: './form-autocomplete.component.html',
  styleUrls: ['./form-autocomplete.component.scss']
})

export class FormAutocompleteComponent implements OnInit {

  @Input() public question: QuestionBase;
  @Input() public control: FormControl;
  @Input() public questions: Question[];
  @Input() public options: SelectOption[];

  public label: string;
  public icon: string;
  public disabled: boolean

  filteredOptions: Observable<SelectOption[]>;

  @Output() autocomplete: EventEmitter<FormControl> = new EventEmitter()
  @Output() optionSelected: EventEmitter<MatAutocompleteSelectedEvent> = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
    this.label = this.question?.label || '';
    this.icon = this.question?.icon || '';
  }

  public onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.optionSelected.emit(event)
  }

}
