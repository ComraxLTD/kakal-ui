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

  // Event emitted when the select panel has been toggled.
  OPEN_CHANGED = 'openChanged',

  // Event emitted when the user is typing in simple input.
  VALUE_CHANGED = 'valueChanged',

  // Event emitted when typing in range input.
  RANGE_CHANGED = 'rangeChanged',

  // Event emitted when selecting a date on the date panel.
  DATE_CHANGED = 'dateChanged',

  // Event emitted when selecting a date on the date panel.
  DATE_RANGE_CHANGED = 'dateRangeChanged',

  // Event emitted when the user is typing in autocomplete input.
  QUERY_CHANGED = 'queryChanged',

  // Event that is emitted whenever an option from the list is selected.
  OPTION_SELECTED = 'optionSelected',

  // Event emitted when the selected value has been changed by the user.
  SELECT_CHANGED = 'selectChanged',

  // Emits a change event whenever the selected state of an option changes.
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
