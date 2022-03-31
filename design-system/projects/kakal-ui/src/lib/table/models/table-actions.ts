// interface for custom button action state
export interface ActionStateRules {
  showDelete: (item: any) => boolean;
  disableDelete: (item: any) => boolean;
  showEdit: (item: any) => boolean;
  disableEdit: (item: any) => boolean;
}

export enum TableActions {
  INIT_STATE = 'initState',
  EXPAND = 'expand',
  FORM = 'form',
}
export enum ColumnActions {
  DEFAULT = 'default',
  INIT_OPTIONS = 'initOptions',
}

export enum FetchActions {
  SORT = 'sort',
  PAGING = 'paging',
  FILTER = 'filter',
  TABLE_FILTER = 'tableFilters',
}
