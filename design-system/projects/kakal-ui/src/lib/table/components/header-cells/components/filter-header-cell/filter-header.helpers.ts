import { Observable, map, filter, merge } from 'rxjs';
import {
  FetchActions,
  KKLSelectOption,
  TableActions,
} from '../../../../../../public-api';
import { TableDataSource } from '../../../../models/table-datasource';
import { TableState } from '../../../../models/table.state';
import { FilterOption } from '../../models/header.filter';
import { FilterType } from '../../models/header.types';
import { FilterRange } from '../filter-range-cell/filter-range-cell.component';

export function getHeaderFilterState(
  tableState$: Observable<TableState>,
  filterSelectors: FilterType[],
  key: string
) {
  return tableState$.pipe(
    map((tableState: TableState) => tableState.filters[key]),
    filter(
      (filterOption: FilterOption) =>
        filterSelectors.indexOf(filterOption.filterType) !== -1
    ),
    map((filterOption) => filterOption.value)
  );
}

export function getSelectFilterState(
  tableState$: Observable<TableState>,
  key: string
) {
  return getHeaderFilterState(
    tableState$,
    [FilterType.SELECTED, FilterType.MULTI_SELECTED],
    key
  ).pipe(
    map((options: KKLSelectOption[]) => options.map((option) => option.value))
  );
}

export function setSelectState(
  tableDataSource: TableDataSource,
  key: string
): Observable<string[]> {
  const initState$ = tableDataSource.selectActions({
    action: TableActions.INIT_STATE,
  });

  const updateState$ = tableDataSource.selectActions({
    action: FetchActions.TABLE_FILTER,
  });

  const initSelectState$ = getSelectFilterState(initState$, key);
  const updateSelectState$ = getSelectFilterState(updateState$, key);

  // const updateSelectState$ = filterSelectState$.pipe(
  //   pairwise(),
  //   filter(([prev, current]) => prev.length > current.length),
  //   map(([prev, current]) => current)
  // );

  return merge(initSelectState$, updateSelectState$);
}

export function getRangeDateState(
  tableState$: Observable<TableState>,
  key: string
) {
  return getHeaderFilterState(tableState$, [FilterType.DATE_RANGE], key);
}

export function setDateRangeState(
  tableDataSource: TableDataSource,
  key: string
): Observable<FilterRange<Date>> {
  const initState$ = tableDataSource.selectActions({
    action: TableActions.INIT_STATE,
  });

  const updateState$ = tableDataSource.selectActions({
    action: FetchActions.TABLE_FILTER,
  });

  const initSelectState$ = getRangeDateState(initState$, key);
  const updateSelectState$ = getRangeDateState(updateState$, key);

  return merge(initSelectState$, updateSelectState$);
}

export function getRangeNumberState(
  tableState$: Observable<TableState>,
  key: string
): Observable<FilterRange<number>> {
  return getHeaderFilterState(tableState$, [FilterType.NUMBER_RANGE], key);
}

export function setNumberRangeState(
  tableDataSource: TableDataSource,
  key: string
): Observable<FilterRange<number>> {
  const initState$ = tableDataSource.selectActions({
    action: TableActions.INIT_STATE,
  });

  const updateState$ = tableDataSource.selectActions({
    action: FetchActions.TABLE_FILTER,
  });

  const initSelectState$ = getRangeNumberState(initState$, key);
  const updateSelectState$ = getRangeNumberState(updateState$, key);

  return merge(initSelectState$, updateSelectState$);
}
