import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'mat-datepicker-toggle',
})
export class KKLFormDateDirective {
  @HostBinding('class') private _class;

  ngOnInit(): void {
    this._class = this._class + ` mat-datepicker-toggle-active`;
  }
}
