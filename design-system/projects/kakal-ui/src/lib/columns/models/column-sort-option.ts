import { TableColumnModel } from "./column.model";

export interface ColumnSortOption<T> {
  column?: TableColumnModel<T>;
  dir: string;
}
