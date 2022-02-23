import { MenuItemModel } from '../menu-item/menu-item.model';

export class MenuModel {
  public type?: 'accordion' | 'default';
  public label?: string;
  public prefix?: string;
  public path?: string;
  public disable?: boolean;
  public active?: boolean;
  public expanded?: boolean;
  public links?: MenuItemModel[];

  constructor(options: {
    type?: 'accordion' | 'default';
    label?: string;
    prefix?: string;
    path?: string;
    disable?: boolean;
    active?: boolean;
    expanded?: boolean;
    links?: MenuItemModel[];
  }) {
    this.type = options?.type || 'default';
    this.label = options?.label || '';
    this.prefix = options?.prefix || '';
    this.path = options?.path || '';
    this.disable = options?.disable || false;
    this.active = options?.active || false;
    this.expanded = options?.expanded || false;
    this.links = options?.links || [];
  }
}
