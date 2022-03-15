import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[kklFormSearchContent]',
})
export class KKLFormSearchContentDirective {
  constructor(public template: TemplateRef<any>) {}
  ngOnInit(): void {}
}
