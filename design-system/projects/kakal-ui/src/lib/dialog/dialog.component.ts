import { Component, ComponentFactoryResolver, Inject, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComponentRef } from 'react';

@Component({
  selector: 'pl-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;
  @ViewChild("renderComponentHere", { read: ViewContainerRef, static: true  }) vcRef!: ViewContainerRef;
  saveBtnLabel!:string
  closeBtnLabel!:string

  componentRef: ComponentRef<any>;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    // const comp = this.resolver.resolveComponentFactory(this.data.component);
    this.componentRef = this.vcRef.createComponent(this.data.component, { injector: this.injector });
    this.saveBtnLabel=this.data.saveBtnLabel ||'שמור'
    this.closeBtnLabel=this.data.closeBtnLabel||'סגור'
  }

  ngOnDestroy() {
    if (this.componentRef) {
      // 
      // this.componentRef.destroy();
    }
  }
  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
