export interface RowActionModel {
  type: string;
  icon?: string;
  label?: string;
}
export interface RowActionEvent {
  action: string;
  row: any;
}
