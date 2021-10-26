import { QuestionSelectModel } from '../models/question-select.model';
import { GridProps } from '../models/question.model';
import { QuestionGroupModel } from '../models/question-group.model';
import { FormGroup } from '@angular/forms';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../services/form.service';
import { BehaviorSubject } from 'rxjs';


export interface Register {
  form: FormGroup,
  questions$?: BehaviorSubject<Question[]>
}

@Component({
  selector: 'kkl-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  @Input() public group: QuestionGroupModel;
  @Input() public questions: Question[];
  @Input() public editMode: boolean;
  @Input() public rowHeight: number;


  @Input() public slots: {
    button?: ElementRef;
    group?: ElementRef;
  };

  @Output() register: EventEmitter<Register> = new EventEmitter();
  @Output() submit: EventEmitter<any> = new EventEmitter();

  public questions$: BehaviorSubject<Question[]>
  public formGroup: FormGroup;
  public grid: GridProps;
  public hasButton: boolean = false;
  public cols: string | number;
  public gutter: number;

  constructor() { }

  ngOnInit() {
    this.formGroup = this.group.formGroup;
    this.setQuestions()
    this.setGrid()

    if (this.group.formGroup) {
      this.register.emit({ form: this.formGroup, questions$: this.questions$ });
    }

    if (this.editMode) {
      this.formGroup.disable();
    }
  }

  private setQuestions() {
    this.questions = this.questions || this.group.questions;
    this.questions$ = new BehaviorSubject<Question[]>(this.questions)

  }

  private setGrid(): void {
    this.grid = this.group.gridProps;
    this.cols = this.group.gridProps?.cols || 1;
    this.gutter = this.group.gridProps?.gutter || 1;
    this.hasButton = this.group.hasButton || false;
  }

  onSubmit() {
    this.submit.emit(this.formGroup.value);
  }

  public onSelect(question: QuestionSelectModel) {
    console.log(question);
  }
}
