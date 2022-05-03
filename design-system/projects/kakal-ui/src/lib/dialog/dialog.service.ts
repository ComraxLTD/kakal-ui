import { Component, Injectable, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ComponentRef } from '@angular/core';
import { Observable } from 'rxjs';
import { DialogComponent } from './dialog.component';
import { DialogAlertComponent } from '../dialog-alert/dialog-alert.component';

export interface DialogData {
  type: string;
  payload: any;
}
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}
  public readonly DISPLAY_MSG_PREFIX = 'thisMessageIsForDisplay';
  public readonly ERROR_MSG = 'מצטערים, קרתה תקלה ולא ניתן לבצע את הפעולה';

  openDialogGetAfterClosedObs(data: {
    component:any;
    closeBtnLabel?: string;
    saveBtnLabel?: string;
  }): Observable<any> {
    return this.dialog
      .open(DialogComponent, {
        data: {
          component: data.component,
          closeBtnLabel: data.closeBtnLabel,
          saveBtnLabel: data.saveBtnLabel,
        },
      })
      .afterClosed();
  }
  
  openDialog(data: {
    component: ComponentRef<any>;
    closeBtnLabel?: string;
    saveBtnLabel?: string;
  }): void {
    this.dialog.open(DialogComponent, {
      data: {
        component: data.component,
        closeBtnLabel: data.closeBtnLabel,
        saveBtnLabel: data.saveBtnLabel,
      },
    });
  }

  
  private openDefault(
    config?: MatDialogConfig
  ): MatDialogRef<DialogAlertComponent> {
    const alertConfig = {
      ...config,
    };

    return this.dialog.open(DialogAlertComponent, alertConfig);
  }

  public openConfirm(options: {
    message: string;
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
    title?: string;
    config?: MatDialogConfig;
  }): MatDialogRef<DialogAlertComponent> {
    const { config, message, title } = options;

    const configError = {
      ...config,
      panelClass: 'kkl-alert-dialog',
      data: {
        title: title || 'הפעולה לא הושלמה',
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
      panelClass: 'kkl-alert-dialog',
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