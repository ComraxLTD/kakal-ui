import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Data, PRIMARY_OUTLET } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { BreadCrumbsModel } from './bread-crumbes.model';

@Component({
  selector: 'kkl-bread-crumbes',
  templateUrl: './bread-crumbes.component.html',
  styleUrls: ['./bread-crumbes.component.scss'],
})


export class BreadCrumbesComponent implements OnInit {
  @Input() breadCrumbes$!: Observable<any>;
  @Output() emitBreadCrumb: EventEmitter<BreadCrumbsModel> = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(res => console.log(res))
    this.breadCrumbes$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((routes: NavigationEnd) => {
        console.log(routes);

        const split = this.splitRoutes(routes.url);
        const filter = split.filter(value => value);
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
