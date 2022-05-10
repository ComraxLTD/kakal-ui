import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'pl-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    // not sure is necessary 
    public dialogRef: MatDialogRef<CustomDialogComponent>,
  ) {}

  // not sure is necessary 
  ngOnInit(): void {
  }

  // not sure is necessary 
  onClose() {
    this.dialogRef.close();
  }

}
