import { Component, OnInit } from '@angular/core';
import {DialogExampleComponent} from './components/dialog-example/dialog-example.component'
import {
  MatDialog,

} from '@angular/material/dialog';
import {DialogComponent} from '../../../kakal-ui/src/lib/dialog/dialog.component'
import {DialogService} from '../../../kakal-ui/src/lib/dialog/dialog.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

 constructor(private dialog:MatDialog,private dialogService:DialogService){}
  openLogin(): void {
  this.dialogService.openDialogGetAfterClosedObs({ component: DialogExampleComponent }).subscribe(result => {
      console.log("The dialog was closed");
    });
  }
  ngOnInit(): void {
  }

}
