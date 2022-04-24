import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogService } from '../../../../../kakal-ui/src/public-api';

@Injectable({
  providedIn: 'root',
})
export class RecordsPaymentsPanelService {
  constructor(public dialog: MatDialog, private dialogService: DialogService) {}

  public openDialog(data?: any) {
    const config: MatDialogConfig = {
      data: {
        title: 'שובר מס רכישה',
        message: '! בקשת תשלום נשלחה בהצלחה',
        ...data,
      },
      panelClass: ['kkl-success-dialog'],
    };

    // this.dialog.open(DialogSuccessComponent, config);
    // this.dialogService.openSuccess({
    //   title: 'שובר מס רכישה',
    //   message: '! בקשת תשלום נשלחה בהצלחה',
    // });
  }
}
