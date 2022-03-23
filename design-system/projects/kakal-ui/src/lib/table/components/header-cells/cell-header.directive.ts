import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[kklHeaderCell]',
})
export class KKLHeaderCellDirective {
  constructor(public template: TemplateRef<any>) {}
  ngOnInit(): void {}
}
