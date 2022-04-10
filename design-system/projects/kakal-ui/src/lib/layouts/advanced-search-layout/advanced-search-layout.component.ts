import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FilterLookups, FilterState } from '../../filters/filters.types';
import { FormChangeEvent } from '../../form/models/form.options';
import {
  OptionMap,
  Question,
  QuestionGroupModel,
} from '../../form/models/form.types';
import { FormService } from '../../form/services/form.service';
import { FormDataSource } from '../../form/models/form-datasource';
import { KKLAdvancedSearchContentDirective } from './advanced-search.directive';
import { FormGrid } from '../../form/models/question.types';
import { QuestionAutocompleteModel } from '../../form/form-autocomplete/question-autocomplete';
import { Observable } from 'rxjs';
import { threadId } from 'worker_threads';

@Component({
  selector: 'kkl-advanced-search-layout',
  templateUrl: './advanced-search-layout.component.html',
  styleUrls: ['./advanced-search-layout.component.scss'],
  providers: [FormDataSource],
})
export class AdvancedSearchLayoutComponent implements OnInit {
  @ContentChild(KKLAdvancedSearchContentDirective) advancedSearchDirective;

  @Input() questions!: Question[];
  @Input() grid!: FormGrid;
  @Input() expended: boolean;
  @Input() advanced: boolean;
  @Input() searchKey: string;

  private _optionsMap: OptionMap = {};

  @Input()
  get optionsMap(): OptionMap {
    return this._optionsMap;
  }

  set optionsMap(value: OptionMap) {
    this._optionsMap = { ...value };
  }

  filtersState$!: Observable<FilterState>;
  searchGroup!: QuestionGroupModel;
  advancedQuestions!: Question[];
  autocomplete!: QuestionAutocompleteModel;

  @Output() searchChanged: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() filterChanged: EventEmitter<FilterState> = new EventEmitter();
  @Output() formChanged: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() filterLookupChanged: EventEmitter<FilterLookups> =
    new EventEmitter();
  constructor(
    private formService: FormService,
    private formDataSource: FormDataSource
  ) {}

  ngOnInit(): void {
    this.searchGroup = this.setGroup();
    if (this.advanced) {
      this.advancedQuestions = this.setAdvancedQuestions(this.searchGroup);
    }
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
    const autoIndex = advancedQuestions.findIndex(
      (q) => q.key === this.searchKey
    );
    this.autocomplete = advancedQuestions.splice(
      autoIndex,
      1
    )[0] as QuestionAutocompleteModel;
    return advancedQuestions;
  }

  public onClick() {
    this.expended = !this.expended;
  }

  public onSearchChanged(event: FormChangeEvent) {
    console.log(event);
    this.searchChanged.emit(event);
  }

  public onFormChanged(event: FormChangeEvent) {
    this.formDataSource.dispatch(event);
    this.formChanged.emit(event);
  }

  public onFilterChanged(state: FilterState) {
    this.filterChanged.emit(state);
  }

  public onFilterLookUpChanged(state: FilterLookups) {
    this.filterLookupChanged.emit(state);
  }
}
