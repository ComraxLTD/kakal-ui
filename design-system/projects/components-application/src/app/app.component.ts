import { Component } from '@angular/core';
import {
  CardStatus,
  DialogAlertComponent,
  DialogService,
  MenuCard,
  PageHeadlineService,
  RouterService,
  StatusSelectionEvent,
} from '../../../kakal-ui/src/public-api';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomDialogComponent } from '../../../kakal-ui/src/lib/custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public onSuccessDialog() {
  const messageRef:MatDialogRef<CustomDialogComponent> = this.dialogService.openCustom({message:'התקבל אישור תקציבי', icon: 'dialog_success'})
    messageRef.afterClosed().subscribe(value=>console.log(value))
  }

  public onCancelDialog() {
  const messageRef:MatDialogRef<CustomDialogComponent> = this.dialogService.openCustom({message:'אין אישור תקציבי', icon: 'dialog_cancel', title: 'ה הליך מפ/1234/21 - כיבוד'})
    messageRef.afterClosed().subscribe(value=>console.log(value))
  }

  public onWaitDialog() {
  const messageRef:MatDialogRef<CustomDialogComponent> = this.dialogService.openCustom({message:'בהמתנה לאישור תקציבי', icon: 'dialog_wait', title: 'ה הליך מפ/1234/21 - כיבוד'})
    messageRef.afterClosed().subscribe(value=>console.log(value))
  }

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
    private dialogService:DialogService
  ) {}

  ngOnInit(): void {}

  onLogoClicked() {
    this.routerService.navigate('/');
  }
  onStatus(event: StatusSelectionEvent) {
    console.log(event);
  }
}
