import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IconService } from '../icon/icons.service';

@Component({
  selector: 'pl-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CustomDialogComponent>,
  ) {}

  ngOnInit(): void {
    this.data.icon = this.data.icon || 'accept_circle';
    this.data.title = this.data.title || '';
    this.data.message = this.data.message || 'message';
  }

  onClose() {
    this.dialogRef.close();
  }

}
