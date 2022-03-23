import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[kklDataCell]',
})
export class KKLDataCellDirective {
  constructor(public template: TemplateRef<any>) {}
  ngOnInit(): void {}
}
