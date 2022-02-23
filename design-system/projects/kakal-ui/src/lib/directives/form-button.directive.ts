import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[kkl-form-button]',
})
export class FormButtonDirective {
  @HostBinding('class') private _class;
  @HostBinding('style.margin') private margin: string;
  @HostBinding('style.padding-bottom') private paddingBottom: string;

  constructor() {}

  ngOnInit(): void {
    this.margin = '0.25em 0';
    // this.paddingBottom = '1.34375em';
    this._class = 'kkl-form-button mat-form-field-wrapper mat-form-field-appearance-outline';
  }
}
