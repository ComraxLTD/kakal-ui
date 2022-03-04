import { Directive, HostBinding, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[kkl-table-cell]',
})
export class KKLTableCellDirective {
  @HostBinding('class') private _class;

  @HostBinding('style.flex')
  @Input()
  private flex: number;

  @HostBinding('style.display') private display: string;

  @Input() columnDef: string;
  @Input() center: boolean;
  @Input() columnsDef: string;

  constructor() {}

  ngOnInit(): void {
    this.flex = this.flex || 1;
    this.display = 'flex';
    this._class = this.setClasses();
  }

  private setClasses() {
    let classes: string = `kkl-table-cell ${this.columnDef}`;

    if (this.center) {
      classes += `center`;
    }
    return classes;
  }
}
