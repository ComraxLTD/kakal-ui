import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[kkl-action-button]',
})
export class KKLActionButtonDirective {
  @HostBinding('class') private _class;
  @HostBinding('style.border-radius') private radius: string;

  constructor() {}

  ngOnInit(): void {
    this.radius = '0.2rem';
    this._class = 'mat-elevation-z4 kkl-action-button';
  }
}
