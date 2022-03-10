// interface for custom button action state
export interface ActionStateRules {
  showDelete: (item: any) => boolean;
  disableDelete: (item: any) => boolean;
  showEdit: (item: any) => boolean;
  disableEdit: (item: any) => boolean;
}

export enum TableActions {
  EXPAND = 'expand',
  FORM = 'form',

}
export enum ColumnActions {
  DEFAULT = 'default',
  UPDATE_FILTERS = 'updateOptions',
}

export enum FetchActions {
  SORT = 'sort',
  PAGING = 'paging',
  FILTER = 'filter',
}
