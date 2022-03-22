import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterChangeEvent, FilterState, FilterType } from './filters.types';
import { FiltersService } from './filters.service';
import { FormGroup } from '@angular/forms';
import {
  FormActions,
  FormChangeEvent,
  FormDataSource,
  Question,
  SelectOption,
} from '../../public-api';
import { combineLatest, map, merge, Observable } from 'rxjs';

@Component({
  selector: 'kkl-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  // @Input() filtersState: FilterState;
  @Input() formGroup: FormGroup;
  @Input() questions: Question[];

  public filtersState$: Observable<FilterState>;

  @Output() filterChanged: EventEmitter<FilterState> = new EventEmitter();

  constructor(
    private formDataSource: FormDataSource,
    private filterService: FiltersService
  ) {}

  ngOnInit(): void {
    this.filtersState$ = this.mergeFilterState();
  }

  private onOptionSelect() {
    return this.formDataSource.listen(FormActions.OPTION_SELECTED).pipe(
      map((formChangeEvent: FormChangeEvent) => {
        const { key, value } = formChangeEvent;

        return {
          [key]: {
            key,
            value,
            filterType: FilterType.SELECT,
          } as FilterChangeEvent,
        };
      })
    );
  }

  private mergeFilterState() {
    const initFilterState$ = this.filterService.getFilterMap({
      formGroup: this.formGroup,
      questions: this.questions,
    });

    const updateFirstsState$ = this.onOptionSelect();

    return combineLatest([initFilterState$, updateFirstsState$]).pipe(
      map(([initState, updateOptionState]) => {
        return {
          ...initState,
          ...updateOptionState,
        };
      })
    );
  }

  // on remove event

  public onRemoveFilter(key: string): void {
    this.filterService.dispatch({ filterState: { [key]: null } });
    this.formGroup.get(key).reset();
    this._emitChanged();
  }

  // on multi remove event
  public onRemoveMultiFilter(option: { key: string; index: number }): void {
    const { key } = option;
    const filterState = this.filterService.removeMultiFilter(option);

    if (filterState[key]) {
      const value = filterState[key].value as SelectOption[];
      this.formGroup.get(key).setValue([...value]);
    } else {
      this.formGroup.get(key).setValue([]);
    }

    this.filterService.dispatch({ filterState });
    this._emitChanged();
  }

  // on clear filters

  public onClearFilters(): void {
    this.formGroup.reset();
    this.filterService.dispatch({ filterState: null });
    this._emitChanged();
  }

  private _emitChanged() {
    const filterState = this.filterService.getState();
    this.filterChanged.emit(filterState);
  }
}
