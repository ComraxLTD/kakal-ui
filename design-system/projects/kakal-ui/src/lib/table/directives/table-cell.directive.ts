import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[kkl-table-cell]',
})
export class KKLTableCellDirective {

  @HostBinding('class') private _class;
  @HostBinding('style.flex') private flex: number;

  @Input() span: number;
  @Input() center: boolean;
  @Input() columnsDef: string;


  constructor() {}

  ngOnInit(): void {
    this.flex = this.span || 1;
    this._class = "kkl-table-cell"
  }
}
