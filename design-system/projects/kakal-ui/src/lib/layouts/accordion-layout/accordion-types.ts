import { Type } from '@angular/core';


export interface PanelHeader<T = any> {
  key : keyof T,
  format? : string
}

export interface AccordionState {
  expendAll: boolean;
  expended: number[];
}

export interface AccordionPanel<T = any> {
  item: T;
  headers: PanelHeader<T>[];
  label: string;
  content: Type<any>;
}