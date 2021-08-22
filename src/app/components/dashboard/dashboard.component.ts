import { NavigationCardModel } from './../../utilities/models/nav-card-model';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  public status: NavigationCardModel[] = [
    {
      title: 'בתהליך',
      svgUrl: 'reload',
      badgeValue: 3,
      hasBadge: true
    },
    {
      title: 'מחכה לאישור',
      svgUrl: 'report',
      badgeValue: 1,
      hasBadge: true
    },
    {
      title: 'סגור',
      svgUrl: 'flag',
      badgeValue: 20,
      hasBadge: true
    },
  ]

  constructor(private breakpointObserver: BreakpointObserver) { }

}
