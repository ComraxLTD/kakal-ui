
export interface KklFormChangeEvent {
  key: string;
  value?: any;
  action : KklFormActions;
  query?: string;
}

export enum KklFormActions {

  FOCUS_IN = 'focusIn',

  FOCUS_OUT = 'focusOut',

  SEARCH_EVENT = 'focusIn',

  // Event emitted when the select panel has been toggled.
  OPENED_SELECT = 'openChanged',
  CLOSED_SELECT = 'closeChanged',

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


  // Emits a change event whenever the selected state of an option changes.
  MULTI_OPTION_SELECTED = 'multiOptionSelected',

  // Event emitted when the selected value has been changed by the user.
  SELECT_CHANGED = 'selectChanged',

  // Emits a change event whenever the selected state of an option changes.
  MULTI_SELECT_CHANGED = 'multiChangedSelected',
}
