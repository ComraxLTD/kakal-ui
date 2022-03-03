import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[kklTableCell]',
})
export class KKLTableCellDirective {
  @HostBinding('class') private _class;
  @HostBinding('style.flex') private flex: number;

  @Input() kklTableCell: string;
  @Input() span: number;
  @Input() center: boolean;
  @Input() columnsDef: string;


  constructor() {}

  ngOnInit(): void {
    this.flex = this.span || 1;
    this._class = this.setClasses();
  }

  private setClasses() {


    let classes: string = `kkl-table-cell ${this.kklTableCell}`;

    if (this.center) {
      classes += `center`;
    }
    return classes;
  }
}
