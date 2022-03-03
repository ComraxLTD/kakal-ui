import { TableEvent } from "../models/table.events";

export interface ActionState {
  show: boolean;
  disabled: boolean;
  valid?: boolean;
  event?: TableEvent;
}

// interface for custom button action state
export interface ActionStateRules {
  showDelete: (item: any) => boolean;
  disableDelete: (item: any) => boolean;
  showEdit: (item: any) => boolean;
  disableEdit: (item: any) => boolean;
}
// interface for custom button action state
export interface TableActionState {
  showDelete?: number[];
  disableDelete?: number[];
  showEdit?: number[];
  disableEdit?: number[];
}
