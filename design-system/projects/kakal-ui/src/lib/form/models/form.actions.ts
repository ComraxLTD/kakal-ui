import { Observable, of } from 'rxjs';

export enum FormActions {
  DEFAULT = 'default',
  CREATE = 'create',
  EDIT = 'edit',
  ADD = 'add',
  DELETE = 'delete',
  SUBMIT = 'submit',
  DISABLED = 'disable',
  CLEAR = 'clear',
  CANCEL = 'cancel',
  UPDATE = 'update',
  FOCUS_CHANGED = 'focusChanged',
  OPEN_CHANGED = 'openChanged',
  DATE_CHANGED = 'dateChanged',
  VALUE_CHANGED = 'valueChanged',
  RANGE_CHANGED = 'rangeChanged',
  DATE_RANGE_CHANGED = 'dateRangeChanged',
  QUERY_CHANGED = 'queryChanged',
  OPTION_SELECTED = 'optionSelected',
  SELECT_CHANGED = 'selectChanged',
  MULTI_SELECTED = 'multiOptionSelected',
}

export function valueChanged<T>(options: {
  key: keyof T;
  value: T;
}): Observable<{
  key: keyof T;
  value?: T | T[] | null;
  options?: {
    value: T | T[] | null;
    label: string;
  };
  event: 'valueChanged';
}> {
  const { key, value } = options;
  return of({
    key,
    value,
    event: FormActions.VALUE_CHANGED,
  });
}
