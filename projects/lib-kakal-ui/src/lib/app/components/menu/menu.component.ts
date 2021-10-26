import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItemModel } from '../menu-item/menu-item.model';
import { MenuModel } from './menu.model';

@Component({
  selector: 'kkl-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  @Input() public masterPrefix: string
  @Input() public menu: MenuModel[];
  @Input() public hasLogin: boolean = true

  public logoutItem: MenuItemModel = new MenuItemModel({
    label: 'יציאה',
    isActive: false,
    path: '',
    svgUrl: 'logout',
  });

  @Output() changePath: EventEmitter<{ path: string, link: string }> = new EventEmitter();


  // UPDATE METHOD WHEN CLICK ON STEP
  public onLinkClick(item: MenuItemModel, modulePrefix: string) {

    if (!item.isActive) {
      const url = `${this.masterPrefix}/${modulePrefix}`;
      const link = item.path !== modulePrefix ? `${url}/${item.path}` : url;
      this.changePath.emit({ link, path: item.path })
    }
  }
}
