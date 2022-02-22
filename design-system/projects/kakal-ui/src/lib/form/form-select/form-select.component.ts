import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, of } from 'rxjs';
import { FormOption } from '../models/form-data-source.model';
import { QuestionSelectModel, SelectOption } from '../models/question-select.model';
import { QuestionBase } from '../services/form.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'kkl-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {
  @Input() public question: QuestionBase;
  @Input() public control: FormControl;
  @Input() public index:number;

  @Output() public selected: EventEmitter<FormOption> = new EventEmitter();
  @Output() public focus: EventEmitter<FormOption> = new EventEmitter();


  public error$: BehaviorSubject<string>;


  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.error$ = new BehaviorSubject<string>('');
  }

  public onSelectChange() {
    const formOption: FormOption = this.getFormOption(this.control.value);
    if (
      this.question instanceof QuestionSelectModel &&
      this.question.onSelectChange
    ) {
      this.question.onSelectChange(formOption);
    }

    this.selected.emit(formOption);
  }

  private getFormOption(value?: string): FormOption {
    const formOption: FormOption = {
      key: this.question.key,
      control: this.control,
      index: this.index,
      value$: of(value),
      option: this.getOption(value),
    };

    return formOption;
  }

  private getOption(value: any): SelectOption | null {
    const question = this.question as QuestionSelectModel

    if (question?.options) {
      return question.options.find(
        (option: SelectOption) => option.value === value
      );
    } else {
      return null;
    }
  }

  public setErrorMessage() {
    const error = this.messageService.getErrorMessage(
      this.control,
      this.question.placeHolder
    );

    this.error$.next(error);
    if (error && this.control.touched) {
      this.control.updateValueAndValidity();
    }
  }
  public onFocus() {
    this.focus.emit(this.getFormOption());
  }
}
