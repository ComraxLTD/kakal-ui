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
import { FormDataSource } from '../../form/models/form-datasource';
import { KKLAdvancedSearchContentDirective } from './advanced-search.directive';
import { Observable, of } from 'rxjs';
import { InputGrid } from '../../form/models/question.types';

@Component({
  selector: 'kkl-advanced-search-layout',
  templateUrl: './advanced-search-layout.component.html',
  styleUrls: ['./advanced-search-layout.component.scss'],
})
export class AdvancedSearchLayoutComponent implements OnInit {
  @ContentChild(KKLAdvancedSearchContentDirective) advancedSearchDirective;

  @Input() questions!: Question[];
  @Input() grid!: InputGrid;
  @Input() asButton!: boolean;
  @Input() expended: boolean;
  @Input() hasFilters: boolean = false;
  @Input() optionsMap$: Observable<OptionMap>;

  filtersState$!: Observable<FilterState>;
  searchGroup!: QuestionGroupModel;
  advancedQuestions!: Question[];
  advanced: boolean = true;

  get searchControl() {
    return this.searchGroup.formGroup.get('search') as FormControl;
  }

  @Output() formChanged: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() searchChanged: EventEmitter<FormChangeEvent> = new EventEmitter();

  constructor(
    private formService: FormService,
    private formDataSource: FormDataSource
  ) {}

  ngOnInit(): void {
    this.searchGroup = this.setGroup();
    this.advancedQuestions = this.setAdvancedQuestions(this.searchGroup);
    this.optionsMap$ = this.optionsMap$ || of({});
  }

  private setGroup(): QuestionGroupModel {
    const group = this.formService.createQuestionGroup({
      questions: [...this.questions],
      options: { gridProps: { cols: 4, variant: 'flex', ...this.grid } },
    });
    return group;
  }

  private setAdvancedQuestions(group: QuestionGroupModel) {
    const advancedQuestions = [...group.questions];
    advancedQuestions.splice(0, 1);
    return advancedQuestions;
  }

  public onClick() {
    this.expended = !this.expended;
  }

  public onSearchChanged(event: FormChangeEvent) {
    this.searchChanged.emit(event);
  }

  public onFormChanged(event: FormChangeEvent) {
    this.formDataSource.dispatch(event);
    this.formChanged.emit(event);
  }
}
