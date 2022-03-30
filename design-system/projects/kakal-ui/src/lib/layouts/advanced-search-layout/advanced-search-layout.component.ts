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
import { Observable } from 'rxjs';

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
  @Input() asButton!: boolean;
  @Input() expended: boolean;
  @Input()  advanced: boolean

  public _hasFilters: boolean;

  @Input()
  set hasFilters(value: boolean) {
    this._hasFilters = value;
  }

  private _optionsMap: OptionMap = {};

  get optionsMap(): OptionMap {
    return this._optionsMap;
  }

  @Input()
  set optionsMap(value: OptionMap) {
    this._optionsMap = { ...value };
  }

  filtersState$!: Observable<FilterState>;
  searchGroup!: QuestionGroupModel;
  advancedQuestions!: Question[];

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
    this.advancedQuestions = this.setAdvancedQuestions(this.searchGroup);
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

  public onFilterChanged(state: FilterState) {
    this.filterChanged.emit(state);
  }

  public onFilterLookUpChanged(state: FilterLookups) {
    this.filterLookupChanged.emit(state);
  }
}
