import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[kklAdvancedSearchContent]',
})
export class KKLAdvancedSearchContentDirective {
  constructor(public template: TemplateRef<any>) {}
  ngOnInit(): void {}
}
