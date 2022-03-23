export declare type ListItemKeys = 'path' | 'label' | 'svgUrl';

export interface ListItem<T = any> {
  type?: string,
  key?: keyof T | string,
  selector? : string[],
  label?: string,
  format?: string,
  size?: number,
  value?: any,
  svgUrl?: string,
  multi?: boolean,
  offset? : number
}

export abstract class ListItemModel {

  constructor(
    public key?: string,
    public type?: string,
    public label?: string,
    public svgUrl?: string,
    public size?: number,
  ) {
  }
}

