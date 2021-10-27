import { MessageService } from './../services/message.service';
import { FormControl } from '@angular/forms';
import { QuestionBase } from '../services/form.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionSelectModel, SelectOption } from './../models/question-select.model';
import { ControlType, GridProps } from '../models/question.model';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { BehaviorSubject } from 'rxjs';
import { Palette } from 'src/styles/theme';

@Component({
  selector: 'kkl-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  @Input() public question: QuestionBase;
  @Input() public control: FormControl;
  @Input() public apprence: MatFormFieldAppearance;

  public controlType: ControlType;
  public label: string;
  public icon: string;
  public options: SelectOption[]
  public error: string = ''

  public error$: BehaviorSubject<string>;
  public color$: BehaviorSubject<Palette>;

  public gridProps: GridProps
  public color: Palette;
  public iconType: string = 'svg';
  public iconRotate: number = 0;

  @Output() public selected: EventEmitter<QuestionSelectModel> = new EventEmitter();
  @Output() public optionSelected: EventEmitter<MatAutocompleteSelectedEvent> = new EventEmitter()
  @Output() autocomplete: EventEmitter<FormControl> = new EventEmitter()

  constructor(
    private messageService: MessageService,

  ) {
  }

  ngOnInit(): void {
    const color: Palette = this.control.disabled ? 'disable' : 'primary';
    this.color$ = new BehaviorSubject<Palette>(color);
    this.error$ = new BehaviorSubject<string>('');
    this.controlType = this.question?.controlType
    this.gridProps = this.question?.gridProps
    this.label = this.question?.label || ''
    this.icon = this.question?.icon || ''

    if (this.question instanceof QuestionSelectModel) {
      this.options = this.question.options;
    }
    this.control.valueChanges.subscribe((value) => {

    });
  }

  // private subscribeToControl() {
  private setIconColor() {
    if (this.control.disabled) {
      this.color = 'disable';
    } else if (this.control.errors) {
      this.color = 'warn';
    } else {
      this.color = 'primary';
    }
  }

  private setErrorMessage() {
    this.error = this.messageService.getErrorMessage(this.control, this.label);
    this.error$.next(this.error)

    if (this.error) {
      this.color$.next('warn')
    } else {
      this.color$.next('primary')
    }

  }

  public validate() {
    this.setErrorMessage()
    this.setIconColor()
  }

  public onSelectChange() {
    if (this.question instanceof QuestionSelectModel) {
      var label = this.control.parent.controls["record"].value;
      this.selected.emit(label)
      this.question.onSelectChange()
    }
  }

  public onAutocomplete(control: FormControl) {
    this.autocomplete.emit(this.control)
  }

  public onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.optionSelected.emit(event)
  }

}
