import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItemModel } from '../menu-item/menu-item.model';
import { MenuModel } from './menu.model';

@Component({
  selector: 'kkl-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  @Input() public menu: MenuModel[];
  @Input() public menu$: Observable<MenuModel[]>;
  @Input() public hasLogin: boolean = true

  public logoutItem: MenuItemModel = new MenuItemModel({
    label: 'יציאה',
    isActive: false,
    path: '',
    svgUrl: 'logout',
  });
  @Output() changePath: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.menu$ = this.menu$ || of(this.menu);
  }


  // UPDATE METHOD WHEN CLICK ON STEP
  public onLinkClick(item: MenuItemModel, modulePrefix: string) {
    if (!item.isActive) {
      const path = item.path === modulePrefix ? item.path : `${modulePrefix}/${item.path}`;
      this.changePath.emit(path)
    }
  }
}
