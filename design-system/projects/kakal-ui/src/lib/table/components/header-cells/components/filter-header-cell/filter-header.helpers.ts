import { TableDataSource } from '../../../../models/table-datasource';
import { TableState } from '../../../../models/table.state';
import { TableActions, FetchActions } from '../../../../models/table-actions';
import { SelectOption } from '../../../../../form/models/form.types';
import {
  Observable,
  map,
  filter,
  merge,
  switchMap,
  pluck,
  pairwise,
} from 'rxjs';
import { TableSelector } from '../../../../models/table.selectors';
import { FilterType, FilterRange } from '../../../../../filters/filters.types';

export function getHeaderFilterState(
  tableState$: Observable<TableState>,
  key: string
) {
  return tableState$.pipe(
    pluck(TableSelector.FILTERS),
    pluck(key),
    filter((filterChangeEvent) => filterChangeEvent !== undefined),
    map((filterChangeEvent) => filterChangeEvent.value)
  );
}

function getRemoveState(
  tableState$: Observable<TableState>,
  columnDef: string
) {
  return tableState$.pipe(
    pluck(TableSelector.FILTERS),
    pluck(columnDef),
    pairwise(),
    filter(([prev, current]) => prev !== undefined && current === undefined),
    map(([prev, current]) => {
      return { start: null, end: null };
    })
  );
}

function getState(tableDataSource: TableDataSource) {
  const initState$ = tableDataSource.listenByAction({
    actions: [TableActions.INIT_STATE],
  });

  const updateState$ = tableDataSource.listenByAction({
    actions: [FetchActions.TABLE_FILTER],
  });

  const removeState$ = tableDataSource.listenTableState();

  return { initState$, updateState$, removeState$ };
}

export function setSelectState(
  tableDataSource: TableDataSource,
  key: string
): Observable<SelectOption[]> {
  const { initState$, updateState$, removeState$ } = getState(tableDataSource);
  const initSelectState$ = getHeaderFilterState(initState$, key);
  const updateSelectState$ = getHeaderFilterState(updateState$, key);

  return merge(initSelectState$, updateSelectState$);
}

export function setFilterOptionState(
  options$: Observable<SelectOption[]>,
  selectedOptions$: Observable<SelectOption[]>
) {
  return options$.pipe(
    switchMap((options: SelectOption[]) => {
      return selectedOptions$.pipe(
        map((options: SelectOption[]) => options.map((option) => option.id)),
        map((selectedOptions: (string | number)[]) => {
          return options.map((option: SelectOption) => {
            return {
              ...option,
              selected: selectedOptions.indexOf(option.id) !== -1,
            } as SelectOption;
          });
        })
      );
    })
  );
}

export function setRangeState<T = Date | number>(
  tableDataSource: TableDataSource,
  key: string,
  type: FilterType
): Observable<FilterRange<T>> {
  const { initState$, updateState$, removeState$ } = getState(tableDataSource);
  const initRangeState$ = getHeaderFilterState(initState$, key);
  const removeRangeState$ = getRemoveState(removeState$, key);

  return merge(initRangeState$, removeRangeState$).pipe(
    map((range) => {
      return { ...range, type };
    })
  );
}
