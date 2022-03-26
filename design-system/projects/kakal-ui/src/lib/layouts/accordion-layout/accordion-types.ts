import { Type } from '@angular/core';

export interface AccordionState {
  expendAll: boolean;
  expended: number[];
}

export interface AccordionPanel<T = any> {
  item: T;
  headerKeys: keyof T[];
  label: string;
  content: Type<any>;
}
