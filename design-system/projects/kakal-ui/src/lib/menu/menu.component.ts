import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { MenuItemModel } from '../menu-item/menu-item.model';
import { MenuModel } from './menu.model';

@Component({
  selector: 'kkl-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() public menu$: Observable<MenuModel[]>;
  @Input() public hasLogin: boolean = true;
  @Input() type: 'list' | 'accordion';

  @Input() menu: MatDrawer;

  public accordion: boolean;
  public logoutItem: MenuItemModel = new MenuItemModel({
    label: 'יציאה',
    isActive: false,
    path: '',
    svgIcon: 'logout',
  });
  @Output() changePath: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.accordion = this.type === 'accordion';
  }

  // UPDATE METHOD WHEN CLICK ON STEP
  public onLinkClick(item: MenuItemModel, modulePrefix: string) {
    if (!item.isActive) {
      const path =
        item.path === modulePrefix ? item.path : `${modulePrefix}/${item.path}`;
      this.changePath.emit(path);
      this.menu.close();
    }
  }

  public onNavigate(list: MenuModel) {
    const path =
      list.path === list.prefix ? list.path : `${list.prefix}/${list.path}`;
    this.changePath.emit(path);
    this.menu.close();
  }


}
