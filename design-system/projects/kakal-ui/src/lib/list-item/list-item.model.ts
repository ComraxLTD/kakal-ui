export declare type ListItemKeys = 'path' | 'label' | 'svgIcon';

export interface ListItem<T = any> {
  type?: string,
  key?: keyof T | string,
  selector? : string[],
  label?: string,
  format?: string,
  size?: number,
  value?: any,
  svgIcon?: string,
  multi?: boolean,
  offset? : number
}

export abstract class ListItemModel {

  constructor(
    public key?: string,
    public type?: string,
    public label?: string,
    public svgIcon?: string,
    public size?: number,
  ) {
  }
}

