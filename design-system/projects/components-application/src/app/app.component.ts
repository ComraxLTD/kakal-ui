import { Component } from '@angular/core';
import {
  CardStatus,
  DialogAlertComponent,
  DialogService,
  MenuCard,
  PageHeadlineService,
  RouterService,
  RowActionEvent,
  RowActionModel,
  RowExpandEvent,
  StatusSelectionEvent,
  TableBase,
} from '../../../kakal-ui/src/public-api';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomDialogComponent } from '../../../kakal-ui/src/lib/custom-dialog/custom-dialog.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'education';

  cards: MenuCard[] = [
    { path: 'as', templateName: '', svgIcon: 'edit' } as MenuCard,
  ];

  status: CardStatus[] = [
    {
      key: 'first',
      svgIcon: 'home',
      label: 'working',
      path: '',
      options: [],
    },
    {
      key: 'second',
      svgIcon: 'home',
      label: 'working',
      path: '',
      options: [],
    },
    {
      key: 'third',
      svgIcon: 'home',
      label: 'working',
      path: '',
      options: [],
    },
  ];

  constructor(
    private routerService: RouterService,
    private pageHeadlineSource: PageHeadlineService,
  ) {}

  ngOnInit(): void {}

  onLogoClicked() {
    this.routerService.navigate('/');
  }
  onStatus(event: StatusSelectionEvent) {
    console.log(event);
  }
}
