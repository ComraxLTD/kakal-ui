import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IBreadCrumb } from './bread-crumbs.model';
import { distinctUntilChanged, filter, } from 'rxjs';

@Component({
  selector: 'kkl-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss'],
})
export class BreadCrumbsComponent implements OnInit {
  public breadcrumbs: IBreadCrumb[]

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);

    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd),
      distinctUntilChanged(),
    ).subscribe(_ => {
      this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    })

  }


  buildBreadCrumb(route: ActivatedRoute, breadcrumbs: IBreadCrumb[] = []): IBreadCrumb[] {
    //If no routeConfig is avalailable we are on the root path
    const homepage = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.homepage : false;
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';
    // If the route is dynamic route such as ':id', remove it
    const lastRoutePart = path.split('/').pop();
    const isDynamicRoute = lastRoutePart.startsWith(':');
    if (isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoutePart.split(':')[1];
      path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
      label = route.snapshot.params[paramName];
    }
    //In the routeConfig the complete path is not available,
    //so we rebuild it each time
    const breadcrumb: IBreadCrumb = {
      label: label,
      url: '',
      homepage:homepage
    };
    
    // Only adding route with non-empty label
    const newBreadcrumbs = breadcrumb.label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
    const arrangedBreadcrumbs = this.arangeBreadcrumbsPath(newBreadcrumbs, this.router.url);
    
    if (route.firstChild) {
      //If we are not on our current path yet,
      //there will be more children to look after, to build our breadcumb
      return this.buildBreadCrumb(route.firstChild, arrangedBreadcrumbs);
    }
    return arrangedBreadcrumbs;
  }

  arangeBreadcrumbsPath(breadcrumbs: IBreadCrumb[], path: string) {
    const filter = path.split('/').filter(path => path);
    return breadcrumbs.map((item, index) => {
      if(item.homepage)item.url = ''
      else item.url = filter.slice(0, index).join('/');
      return item;
    });
  }
}
