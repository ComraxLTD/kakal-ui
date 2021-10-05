export declare type ListItemKeys = 'path' | 'label' | 'svgUrl';

export interface ListItem {
  type?: string,
  key?: string,
  selector? : string[],
  label?: string,
  size?: number,
  value?: any,
  svgUrl?: string,
} 

export abstract class ListItemModel implements ListItem {

  constructor(
    public key?: string,
    public type?: string,
    public label?: string,
    public svgUrl?: string,
    public size?: number,
  ) {
  }
}
