export interface RowActionModel {
  type: string;
  icon?: string;
  label?: string;
  navigation?: string;
  button? : boolean
}
export interface RowActionEvent {
  action: string;
  row: any;
  key: string;
}

export interface RowExpandEvent {
  row: any;
  key: string;
}
