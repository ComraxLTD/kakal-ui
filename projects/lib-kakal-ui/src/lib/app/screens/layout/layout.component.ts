import { Component, Input, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { IconModel } from '../../components/icon/icon.model';
import { NavbarService } from '../../components/navigation/navbar/navbar.service';
import { LayoutService } from './layout.service';

@Component({
  selector: 'kkl-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  private statusSubscription: Subscription;

  @Input() public openIcon: string;
  @Input() public logos: IconModel[];

  @Input() public hideWizardPath: string[];
  @Input() public showStatusPath: string[];

  public wizard$: Observable<boolean>;

  constructor(
    private layoutService: LayoutService,
    private navbarService: NavbarService
  ) {}

  ngOnInit(): void {
    this.getCurrentPath();
    this.subscribeToLastPath();
    this.wizard$ = this.layoutService.getWizardObs();
  }

  ngOnDestroy(): void {
    this.statusSubscription.unsubscribe();
  }


  // VIEW METHODS SECTION

  private findPath(list: any[], value: string): boolean {
    return !!list.find((path: string) => path == value);
  }

  private handleStatusState(path: string) {
    this.navbarService.emitShowStatus(this.findPath(this.showStatusPath, path));
  }

  private handleShowState(path: string) {
    this.layoutService.toggleWizard(this.findPath(this.hideWizardPath, path));
    this.handleStatusState(path);
  }

  // ROUTE METHODS SECTION
  private getCurrentPath() {
    // const path = this.routerService.getCurrentPath();
    // this.handleShowState(path);
  }

  private subscribeToLastPath() {
  //   this.routerSubscription = this.routerService
  //     .getLastPathObs()
  //     .subscribe((path) => {
  //       this.handleShowState(path);
  //     });
  // }
  }
}
