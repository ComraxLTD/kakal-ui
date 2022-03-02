import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[kkl-cell]',
})
export class CellDirective {
  @Input() span: number;

  @HostBinding('style.flex') private flex: number;

  constructor() {}

  ngOnInit(): void {
    this.flex = this.span || 1;
  }
}
