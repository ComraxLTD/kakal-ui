import { ListItemKeys } from './list-item.model';
import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { StepModel } from '../step/step.model';
import { MenuListModel } from './menu.model';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  @Input() public menu: MenuListModel[];

  public logoutItem: StepModel =
    new StepModel({ label: 'יציאה', isActive: false, path: '', svgUrl: 'logout' })

  constructor(
    private menuService: MenuService,
  ) { }

  ngOnInit(): void {
    this.subscribeToPrefix()
    this.subscribeToLastPath()
  }

  private setRouteState() {
    const path: string = this.menuService.getCurrentPath()
    this.updateLinkStatus(path)
  }
  private updateLinkStatus(path: string) {
    this.menu = this.menuService.setList(this.menu, ListItemKeys.PATH, path)
  }

  // UPDATE METHOD WHEN CHANGE MODULE
  private subscribeToPrefix() {
    this.menuService.getPrefixObs().subscribe(
      (prefix) => {
        this.menuService.setPrefix(prefix);
        this.setRouteState()

      })
  }

  // UPDATE METHOD WHEN CHANGE ROUTE
  private subscribeToLastPath() {
    this.menuService.subscribeToLastPath().subscribe(
      (path: string) => {
        this.updateLinkStatus(path)
      }
    )
  }


  // UPDATE METHOD WHEN CLICK ON STEP
  public onLinkClick(link: StepModel, prefix: string) {

    if (!link.isActive) {

      const url = `lands/${prefix}`;
      const path = link.path !== prefix ? `${url}/${link.path}` : url;

      this.updateLinkStatus(link.path);
      this.menuService.navigate(path);
    }
  }

}
