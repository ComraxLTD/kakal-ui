
export interface PanelHeader<T = any> {
  key: keyof T;
  format?: string;
}

export interface AccordionState {
  expendAll: boolean;
  expended: number[];
}

export interface Panel<T = any> {
  key: keyof T;
  label: string;
  item?: T;
  headers?: PanelHeader<T>[];
}
