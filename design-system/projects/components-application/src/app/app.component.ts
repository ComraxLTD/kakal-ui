import { Component } from '@angular/core';
import { DialogService } from '../../../kakal-ui/src/lib/dialog/dialog.service';
import { CardStatus } from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  steps: any[] = [{ selected: true }, { selected: false }, { selected: false }];

  status: CardStatus[] = [
    {
      key: 'first',
      label: 'תהליכי רישום',
      svgIcon: 'home',
      value: 4,
      path: 'records',
      options: [],
    },
  ];

  constructor(private dialogService: DialogService) {}
  open() {
    this.dialogService.openConfirm({ message: 'asd' });
  }
}
