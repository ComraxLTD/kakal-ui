import { FilterChangeEvent, FilterState } from "./filters.types";

  export function removeMultiFilter(option: { key: string; index: number }, state : FilterState) {
    const { key, index } = option;

    const filters = state[key].value;
    filters.splice(index, 1);

    const filterEvent =
      filters.length === 0
        ? null
        : ({ ...state[key], value: filters } as FilterChangeEvent);

    const newState = {
      ...state,
      [key]: filterEvent,
    };
    return newState;
  }
