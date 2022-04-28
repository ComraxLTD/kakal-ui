import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LayoutService, MenuCard } from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  cards: MenuCard[] = [
    {
      label: 'ספר נכסים',
      svgIcon: 'estate',
      path: 'estates',
    },
    {
      label: 'פיקוח',
      svgIcon: 'supervision',
      path: 'supervision',
    },
    {
      label: 'שומה',
      svgIcon: 'evaluation',
      path: 'evaluation',
    },
    {
      label: 'עסקאות',
      svgIcon: 'transactions',
      path: 'transactions',
    },
    {
      label: 'מדידות',
      svgIcon: 'measurements',
      path: 'measurements',
    },
    {
      label: 'תכנון',
      svgIcon: 'planing',
      path: 'planing',
    },
  ];

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.layoutService.showStartDrawer(true);
  }
}
