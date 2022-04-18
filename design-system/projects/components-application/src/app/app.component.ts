import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ControlBase,
  FormChangeEvent,
  OptionsModel,
  RouterService,
  RowActionModel,
  TableBase,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private routerService: RouterService) {}

  cards = [
    {
      svgIcon: 'search',
      label: '1',
      subLabel: 'sub label',
    },
    {
      svgIcon: 'search',
      label: '2',
      subLabel: 'sub label',
    },
    {
      svgIcon: 'search',
      label: '3',
      subLabel: 'sub label',
    },
    {
      svgIcon: 'search',
      label: '4',
      subLabel: 'sub label',
    },
    {
      svgIcon: 'search',
      label: '5',
      subLabel: 'sub label',
    },
    {
      svgIcon: 'search',
      label: '6',
      subLabel: 'sub label',
    },
  ];

  ngOnInit(): void {
    this.routerService.listenToRoute$().subscribe()
  }
}
