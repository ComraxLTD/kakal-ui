import { MessageService } from './../services/message.service';
import { FormControl } from '@angular/forms';
import { QuestionBase } from '../services/form.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionSelectModel, SelectOption } from './../models/question-select.model';
import { GridProps } from '../models/question-base.model';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  
  @Input() public question: QuestionBase;
  @Input() public control: FormControl;

  public type: string;
  public controlType: string;
  public label: string;
  public icon: string;
  public options: SelectOption[]
  public error: string = ''

  public gridProps: GridProps
  public color: string;
  public iconType: string = 'svg';
  public iconRotate: number = 0;

  @Output() public selected: EventEmitter<QuestionSelectModel> = new EventEmitter();
  @Output() public optionSelected: EventEmitter<MatAutocompleteSelectedEvent> = new EventEmitter()
  @Output() autocomplete: EventEmitter<FormControl> = new EventEmitter()

  constructor(
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {


    this.gridProps = this.question.gridProps
    this.type = this.question?.type
    this.controlType = this.question?.controlType
    this.label = this.question?.label || ''
    this.icon = this.question?.icon || ''

    if (this.question instanceof QuestionSelectModel) {
      this.options = this.question.options;
    }

    this.subscribeToControl()
  }

  // subscription section
  private subscribeToControl() {

    if (this.control.disabled) {
      this.color = 'disable';
    }

    this.control.valueChanges.subscribe((value) => {
      if (this.control.disabled) {
        this.color = 'disable';
      } else if (this.control.errors) {
        this.color = 'warn';
      } else {
        this.color = '';
      }
    });
  }

  public validate() {
    this.error = this.messageService.getErrorMessage(this.control, this.label);

    if (this.error) {
      this.color = 'warn';
    }

    this.control.valueChanges.subscribe(() => {
      this.error = this.messageService.getErrorMessage(this.control, this.label);
    });
  }

  public onSelectChange() {
    if (this.question instanceof QuestionSelectModel) {
      this.selected.emit(this.question)
      this.question.onSelectChange()
    }
  }
  public onAutocomplete() {
    this.autocomplete.emit(this.control)
  }

  public onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.optionSelected.emit(event)
  }



}
