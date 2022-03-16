import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterState } from './filters.types';
import { FiltersService } from './filters.service';
import { Observable } from 'rxjs';

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

  constructor() {}

  ngOnInit(): void {}

  public onRemoveFilter(key: string): void {
    this.remove.emit(key);
  }

  public onClearFilters(): void {
    this.clear.emit();
  }
}
