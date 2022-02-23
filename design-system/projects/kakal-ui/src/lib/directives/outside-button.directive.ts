import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[kkl-outside-button]',
})
export class OutsideButtonDirective {
  @HostBinding('class') private _class;
  @HostBinding('style.position') private position: string;
  @HostBinding('style.right') private right: string;
  @HostBinding('style.bottom') private bottom: string;

  constructor() {}

  ngOnInit(): void {
    this._class = 'mat-icon-button';
    this.position = 'relative';
    this.right = '5rem';
    this.bottom = '5rem';
  }
}
