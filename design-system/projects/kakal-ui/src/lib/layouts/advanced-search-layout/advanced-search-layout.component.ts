import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FilterState } from '../../filters/filters.types';
import { FormChangeEvent } from '../../form/models/form.options';
import {
  OptionMap,
  Question,
  QuestionGroupModel,
} from '../../form/models/form.types';
import { FormService } from '../../form/services/form.service';
import { KKLAdvancedSearchContentDirective } from './advanced-search.directive';
import { Observable } from 'rxjs';

@Component({
  selector: 'kkl-advanced-search-layout',
  templateUrl: './advanced-search-layout.component.html',
  styleUrls: ['./advanced-search-layout.component.scss'],
})
export class AdvancedSearchLayoutComponent implements OnInit {
  @ContentChild(KKLAdvancedSearchContentDirective) advancedSearchDirective;

  @Input() questions!: Question[];
  @Input() asButton!: boolean;
  @Input() expended: boolean = false;
  @Input() optionsMap$!: Observable<OptionMap>;

  filtersState$!: Observable<FilterState>;
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
    this.advancedQuestions = this.setAdvancedQuestions();
  }

  private setGroup(): QuestionGroupModel {
    const group = this.formService.createQuestionGroup({
      questions: [...this.questions],
      options: { gridProps: { cols: 4 } },
    });
    return group;
  }

  private setAdvancedQuestions() {
    const advancedQuestions = [...this.questions];
    advancedQuestions.splice(0, 1);
    return advancedQuestions;
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
