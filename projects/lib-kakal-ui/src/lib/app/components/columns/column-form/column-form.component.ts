import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GridProps } from '../../form/models/question.model';
import { QuestionSelectModel, SelectOption } from '../../form/models/question-select.model';
import { QuestionBase } from '../../form/services/form.service';
import { MessageService } from '../../form/services/message.service';

@Component({
  selector: 'app-column-form',
  templateUrl: './column-form.component.html',
  styleUrls: ['./column-form.component.scss']
})
export class ColumnFormComponent implements OnInit {

  @Input() public question: QuestionBase;
  @Input() public control: FormControl;

  public type: string;
  public label: string;
  public icon: string;
  public options: SelectOption[]
  public error: string = ''

  public color: string;
  public iconType: string = 'svg';
  public iconRotate: number = 0;

  @Output() public selected: EventEmitter<QuestionSelectModel> = new EventEmitter();
  @Output() public register: EventEmitter<any> = new EventEmitter();

  constructor(
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {


    this.type = this.question?.type
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
        this.color = 'danger';
      } else {
        this.color = '';
      }

    });
  }

  public validate() {
    this.error = this.messageService.getErrorMessage(this.control, this.label);

    if (this.error) {
      this.color = 'danger';
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



}
