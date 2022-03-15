import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[kkl-form-button]',
})
export class KKLFormButtonDirective {
  @HostBinding('class') private _class;
  @HostBinding('style.margin') private margin: string;

  constructor() {}

  ngOnInit(): void {
    this._class = 'kkl-form-button mat-form-field-wrapper mat-form-field-appearance-outline';
  }
}
