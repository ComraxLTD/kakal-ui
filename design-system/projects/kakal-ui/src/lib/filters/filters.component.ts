import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterChangeEvent, FilterState } from './filters.types';
import { SelectOption } from '../form/models/question-select.model';
import { FiltersService } from './filters.service';
import { Observable } from 'rxjs';
import { coerceStringArray } from '@angular/cdk/coercion';

@Component({
  selector: 'kkl-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Input() filtersState: Observable<FilterState>;
  @Input() filtersState$: Observable<FilterState>;

  public filters$: Observable<any>;

  @Output() clear: EventEmitter<void> = new EventEmitter();
  @Output() remove: EventEmitter<string> = new EventEmitter();
  @Output() removeMulti: EventEmitter<FilterChangeEvent> = new EventEmitter();

  constructor(private filterService: FiltersService) {}

  ngOnInit(): void {}

  public onRemoveFilter(key: string): void {
    this.filterService.dispatch({ filterState: { [key]: null } });
    this.remove.emit(key);
  }

  public onRemoveMultiFilter(option: { key: string; index: number }): void {
    const { key } = option;
    const filterState = this.filterService.removeMultiFilter(option);

    if (filterState[key]) {
      this.removeMulti.emit(filterState[key]);
    } else {
      this.removeMulti.emit({ key, value: [] });
    }

    this.filterService.dispatch({ filterState });
  }

  public onClearFilters(): void {
    this.clear.emit();
    this.filterService.dispatch({ filterState: null });
  }
}
