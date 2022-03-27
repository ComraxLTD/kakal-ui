import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormChangeEvent } from '../../form/models/form.options';
import { Question, QuestionGroupModel } from '../../form/models/form.types';
import { FormService } from '../../form/services/form.service';

@Component({
  selector: 'kkl-advanced-search-layout',
  templateUrl: './advanced-search-layout.component.html',
  styleUrls: ['./advanced-search-layout.component.scss'],
})
export class AdvancedSearchLayoutComponent implements OnInit {
  @Input() questions!: Question[];
  @Input() asButton!: boolean;
  @Input() expended: boolean = false;

  // default inputs in row
  searchGroup!: QuestionGroupModel;
  advancedQuestions!: Question[];
  advanced: boolean = true;

  get searchControl() {
    return this.searchGroup.formGroup.get('search') as FormControl;
  }

  @Output() public optionSelected: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  @Output() multiOptionsSelected: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  @Output() public queryChanged: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.searchGroup = this.setGroup();


    // const advancedQuestions = [...this.questions];
    // advancedQuestions.splice(0, 1);

    console.log(this.searchGroup.questions)
  }

  private setGroup(): QuestionGroupModel {

    const group = this.formService.createQuestionGroup({
      questions: [...this.questions],
      options: { gridProps: { cols: 4 } },
    });
    return group;
  }

  private onAdvanced(): void {
    if (this.advanced && !this.searchGroup) {
      throw new Error('Advanced search is missing a searchGroup instance.');
    }

    if (this.searchGroup) {
      const advancedQuestions = [...this.searchGroup.questions];
      advancedQuestions.splice(0, 1);

      this.searchGroup = {
        ...this.searchGroup,
        questions: advancedQuestions,
      } as QuestionGroupModel;
    }
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
