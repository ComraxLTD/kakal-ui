import { ListItemKeys } from '../list-item/list-item.model';
import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { Subscription } from 'rxjs';
import { RouterService } from '../../utilities/services/route.rservice';
import { MenuItemModel } from '../menu-item/menu-item.model';
import { MenuModel } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() public menu: MenuModel[];
  @Input() private routePrefix: string;

  public logoutItem: MenuItemModel = new MenuItemModel({
    label: 'יציאה',
    isActive: false,
    path: '',
    svgUrl: 'logout',
  });

  private routerSubscription: Subscription;
  private prefixSubscription: Subscription;

  constructor(
    private menuService: MenuService,
    private routerService: RouterService
  ) {}

  ngOnInit(): void {
    this.subscribeToPrefix();
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    if (this.prefixSubscription) {
      this.prefixSubscription.unsubscribe();
    }
  }

  private updateLinkStatus(path: string) {
    this.menu = this.menuService.setList(this.menu, 'path', path);
  }

  // UPDATE METHOD WHEN CHANGE MODULE
  private subscribeToPrefix() {
    this.prefixSubscription = this.routerService
      .getModulePrefixObs()
      .subscribe((prefix) => {
        this.menuService.setPrefix(prefix);
        const path: string = this.routerService.getCurrentPath();
        this.updateLinkStatus(path);
      });
  }

  // UPDATE METHOD WHEN CLICK ON STEP
  public onLinkClick(link: MenuItemModel, prefix: string) {
    if (!link.isActive) {
      const url = `/${this.routePrefix}/${prefix}`;
      const path = link.path !== prefix ? `${url}/${link.path}` : url;
      this.updateLinkStatus(link.path);
      this.routerService.navigate(path);
    }
  }
}
