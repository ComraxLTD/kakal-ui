import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[kkl-cell]',
})
export class KKLCellDirective {
  @HostBinding('class') private _class;

  @HostBinding('style.flex')
  @Input()
  private flex: number | string;

  @HostBinding('style.display') private display: string;

  @Input() columnDef: string;
  @Input() center: boolean;

  private _editable: boolean = false;

  @Input()
  get editable(): boolean {
    return this._editable;
  }
  set editable(value: boolean) {
    this._editable = value;
    this.invalidate();
  }

  constructor() {}

  private invalidate() {}

  ngOnInit(): void {
    this.flex = this.flex || 1;
    this.display = 'flex';
    this._class = this.setClasses();
  }

  private setClasses() {
    let classes: string = `kkl-cell ${this.columnDef}`;

    if (this.center) {
      classes += `center`;
    }
    return classes;
  }
}
