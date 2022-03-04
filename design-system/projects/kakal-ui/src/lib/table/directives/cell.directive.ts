import { Directive, HostBinding, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[kklTableCell]',
})
export class KKLTableCellDirective {
  constructor(public template: TemplateRef<any>) {}
  ngOnInit(): void {}
}
