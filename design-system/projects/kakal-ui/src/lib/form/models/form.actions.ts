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
  // CLOSE = 'close',
  UPDATE = 'update',
  VALUE_CHANGED = 'valueChanged',
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
