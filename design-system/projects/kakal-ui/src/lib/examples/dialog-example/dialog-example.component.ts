import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAlertComponent } from '../../dialog-alert/dialog-alert.component';

@Component({
  selector: 'pl-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent implements OnInit {

  constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  //the dialog can be open from the ts without a click on the ui by using the this.dialog.open function
  public onOpen() {// this function sholud be linked to a button in the html component 
    this.dialog.open(DialogAlertComponent, {
      data: {
        title: 'לא ניתן לבצע הרחבה',// the text inside the alert
        buttonText: {
          confirm: 'אישור', //the button text
        },
      },
      minWidth: '30rem',//min width attribute
    });
  }
}
