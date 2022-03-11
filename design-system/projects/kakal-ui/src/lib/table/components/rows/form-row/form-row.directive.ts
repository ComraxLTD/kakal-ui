import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[kklFormRow]',
})
export class FormRowDirective {
  constructor(public template: TemplateRef<any>) {}
}
