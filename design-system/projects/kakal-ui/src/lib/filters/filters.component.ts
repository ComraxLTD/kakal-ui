import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterChangeEvent, FilterState, FilterType } from './filters.types';
import { FiltersService } from './filters.service';
import { removeMultiFilter } from './filters.helpers';
import { FormGroup } from '@angular/forms';
import {
  FormActions,
  FormChangeEvent,
  FormDataSource,
  SelectOption,
} from '../../public-api';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'kkl-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Input() formGroup: FormGroup;

  public filtersState$: Observable<FilterState>;

  @Output() filterChanged: EventEmitter<FilterState> = new EventEmitter();

  constructor(
    private formDataSource: FormDataSource,
    private filterService: FiltersService
  ) {}

  ngOnInit(): void {
    this.filtersState$ = this.setFilterState();
  }

  private onFormChanged() {
    const formChangedEvents$ = this.formDataSource.listen([
      FormActions.VALUE_CHANGED,
      FormActions.SELECT_CHANGED,
      FormActions.MULTI_OPTION_SELECTED,
      FormActions.MULTI_SELECT_CHANGED,
      FormActions.OPTION_SELECTED,
    ]);

    const filterTypeMap = {
      [FormActions.VALUE_CHANGED]: FilterType.SEARCH,
      [FormActions.SELECT_CHANGED]: FilterType.SELECT,
      [FormActions.MULTI_OPTION_SELECTED]: FilterType.MULTI_SELECT,
      [FormActions.MULTI_SELECT_CHANGED]: FilterType.MULTI_SELECT,
      [FormActions.OPTION_SELECTED]: FilterType.SELECT,
      [FormActions.RANGE_CHANGED]: FilterType.RANGE,
      [FormActions.DATE_RANGE_CHANGED]: FilterType.DATE_RANGE,
    };

    const mapFormValueToFilter = (
      oldState: FilterState,
      formChangeEvent: FormChangeEvent,
      filterTypeMap: { [key: string]: FilterType }
    ) => {
      const { key, value, action } = formChangeEvent;

      return {
        ...oldState,
        [key]: {
          key,
          value,
          filterType: filterTypeMap[action],
        } as FilterChangeEvent,
      };
    };

    return formChangedEvents$.pipe(
      map((formChangeEvent: FormChangeEvent) => {
        return this.filterService.on(
          mapFormValueToFilter,
          formChangeEvent,
          filterTypeMap
        );
      })
    );
  }

  private setFilterState() {
    return this.onFormChanged().pipe(
      switchMap((filterState: FilterState) => {
        this.filterService.dispatch({ filterState });
        return this.filterService.listen();
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
    const filterState = removeMultiFilter(option);

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
