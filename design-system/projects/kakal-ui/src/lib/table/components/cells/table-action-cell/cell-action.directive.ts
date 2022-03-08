import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[kklActionCell]',
})
export class KKLActionCellDirective {
  constructor(public template: TemplateRef<any>) {}
  ngOnInit(): void {}
}
