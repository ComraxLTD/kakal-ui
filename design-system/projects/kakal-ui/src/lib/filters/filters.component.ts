import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterChangeEvent, FilterState } from './filters.types';
import { FiltersService } from './filters.service';
import { FormGroup } from '@angular/forms';
import { SelectOption } from '../../public-api';

@Component({
  selector: 'kkl-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Input() filtersState: FilterState;
  @Input() formGroup: FormGroup;

  @Output() filterChanged: EventEmitter<FilterState> = new EventEmitter();

  constructor(private filterService: FiltersService) {}

  ngOnInit(): void {}

  public onRemoveFilter(key: string): void {
    this.filterService.dispatch({ filterState: { [key]: null } });
    this.formGroup.get(key).reset();
    this._emitChanged();
  }

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
