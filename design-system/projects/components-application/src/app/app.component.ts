import { Component } from '@angular/core';
import {DialogService} from '../../../kakal-ui/src/lib/dialog/dialog.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private dialogService:DialogService){}
  open(){
    this.dialogService.openConfirm({message:'asd'})
  }
}