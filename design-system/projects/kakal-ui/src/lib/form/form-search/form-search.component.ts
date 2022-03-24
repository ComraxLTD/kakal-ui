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
import { FormService, Question } from '../services/form.service';
import { KKLFormSearchContentDirective } from './form-search.directive';

@Component({
  selector: 'kkl-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss'],
  providers: [FormDataSource],
})
export class FormSearchComponent implements OnInit {
  @ContentChild(KKLFormSearchContentDirective) formSearchDirective;

  @Input() public searchControl!: FormControl | AbstractControl;
  @Input() public searchGroup!: QuestionGroupModel;
  @Input() public advanced!: boolean;

  // default inputs in row
  public expended: boolean;

  public contextGroup: QuestionGroupModel;

  @Output() public optionSelected: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  @Output() multiOptionsSelected: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  @Output() public queryChanged: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.expended = this.advanced;

    this.onAdvanced();
  }

  private onAdvanced(): void {
    if (this.advanced && !this.searchGroup) {
      throw new Error('Advanced search is missing a searchGroup instance.');
    }

    const advancedQuestions = [...this.searchGroup.questions];
    advancedQuestions.splice(0, 1);

    this.searchControl = this.searchGroup.formGroup.get(
      'search'
    ) as FormControl;

    this.contextGroup = {
      ...this.searchGroup,
      questions: advancedQuestions,
    } as QuestionGroupModel;
  }

  public onClick() {
    this.expended = !this.expended;
  }

  public onQueryChanged(event: FormChangeEvent): void {
    this.queryChanged.emit(event);
  }

  public onOptionSelected(event: FormChangeEvent): void {
    this.optionSelected.emit(event);
  }

  public onMultiOptionSelected(event: FormChangeEvent) {
    this.optionSelected.emit(event);
  }
}
