import { Inject, Injectable, TemplateRef } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogAlertComponent } from '../dialog-alert/dialog-alert.component';
import { DialogComponent } from './dialog.component';

export interface DialogData {
  type: string;
  payload: any;
}
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  public readonly DISPLAY_MSG_PREFIX = 'thisMessageIsForDisplay';
  public readonly ERROR_MSG = 'מצטערים, קרתה תקלה ולא ניתן לבצע את הפעולה';

  constructor(private dialog: MatDialog) {}

  public open(
    dialogRef?: TemplateRef<any>,
    config?: MatDialogConfig
  ): MatDialogRef<DialogComponent> {
    return this.dialog.open(dialogRef || DialogComponent, config);
  }

  private openDefault(
    config?: MatDialogConfig
  ): MatDialogRef<DialogAlertComponent> {
    const alertConfig = {
      ...config,
      panelClass: 'kkl-alert-dialog',
    };

    return this.dialog.open(DialogAlertComponent, alertConfig);
  }

  public openConfirm(options: {
    message: string;
    title?: string;
    isConfirm?: boolean;
  }): Observable<boolean> {
    const dialogRef: MatDialogRef<DialogAlertComponent> = this.openAlert({
      ...options,
    });
    return dialogRef.afterClosed();
  }

  public openAlert(options: {
    message: string;
    title?: string;
    isConfirm?: boolean;
  }) {
    const { message, title, isConfirm } = options;
    return this.openDefault({
      data: {
        title,
        message,
        buttonText: isConfirm
          ? {
              confirm: 'כן',
              cancel: 'לא',
            }
          : { confirm: 'אישור' },
      },
    });
  }

  public openError(options: {
    message: string;
    config?: MatDialogConfig;
  }): MatDialogRef<DialogAlertComponent> {
    const { config, message } = options;

    const configError = {
      ...config,
      data: {
        title: 'הפעולה לא הושלמה',
        message:
          message?.indexOf(this.DISPLAY_MSG_PREFIX) >= 0
            ? message?.replace(this.DISPLAY_MSG_PREFIX, '')
            : message || this.ERROR_MSG,
      },
    };

    return this.dialog.open(DialogAlertComponent, configError);
  }

  public openSuccess(options: {
    message: string;
    title?: string;
    config?: MatDialogConfig;
  }): MatDialogRef<DialogAlertComponent> {
    const { config, message, title } = options;
    const configError = {
      ...config,
      data: {
        title: title || 'הפעולה הושלמה בהצלחה!',
        message,
      },
    };

    return this.dialog.open(DialogAlertComponent, configError);
  }

  public openMessage(options: {
    message: string;
    config?: MatDialogConfig;
  }): MatDialogRef<DialogAlertComponent> {
    const { config, message } = options;
    const configError = {
      ...config,
      data: {
        title: 'הפעולה הושלמה בהצלחה!',
        message,
      },
    };

    return this.dialog.open(DialogAlertComponent, configError);
  }
}
