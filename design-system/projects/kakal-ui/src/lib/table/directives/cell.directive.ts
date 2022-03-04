import { Directive, HostBinding, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[kklCell]',
})
export class KKLCellDirective {

  constructor(public template: TemplateRef<any>) {}


  ngOnInit(): void {
  }

}
