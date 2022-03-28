import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BreadCrumbsModel } from './bread-crumbs.model';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'kkl-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss'],
})
export class BreadCrumbsComponent implements OnInit {
  @Input() breadCrumbs$!: Observable<any>;
  @Output() emitBreadCrumb: EventEmitter<BreadCrumbsModel> = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((res) => console.log(res));
    this.breadCrumbs$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((routes: NavigationEnd) => {
        const split = this.splitRoutes(routes.url);
        const filter = split.filter((value) => value);
        return filter;
      })
    );
  }

  splitRoutes(routes: string) {
    return routes.split('/');
  }

  breadCrumbClicked(breadCrumb: BreadCrumbsModel): void {
    this.emitBreadCrumb.emit(breadCrumb);
  }
}
