import { Inject, Injectable, TemplateRef } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ComponentRef } from 'react';
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

  constructor(private dialog: MatDialog) {}

  openDialogGetAfterClosedObs(data:{component:ComponentRef<any>,closeBtnLabel?:string,saveBtnLabel?:string}):Observable<any>{
 return   this.dialog.open(DialogComponent, {
      data: { component: data.component, closeBtnLabel:data.closeBtnLabel,saveBtnLabel:data.saveBtnLabel }
    }).afterClosed()
  }
  openDialog(data:{component:ComponentRef<any>,closeBtnLabel?:string,saveBtnLabel?:string}):void{
       this.dialog.open(DialogComponent, {
         data: { component: data.component, closeBtnLabel:data.closeBtnLabel,saveBtnLabel:data.saveBtnLabel }
       })
     }
    get
}