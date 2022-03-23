import { FilterChangeEvent } from "./filters.types";

  export function removeMultiFilter(option: { key: string; index: number }) {
    const { key, index } = option;
    const filterState = this.getState();

    const filters = filterState[key].value;
    filters.splice(index, 1);

    const filterEvent =
      filters.length === 0
        ? null
        : ({ ...filterState[key], value: filters } as FilterChangeEvent);

    const newState = {
      ...filterState,
      [key]: filterEvent,
    };
    return newState;
  }
