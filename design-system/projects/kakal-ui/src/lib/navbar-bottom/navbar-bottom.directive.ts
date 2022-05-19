import { Directive, TemplateRef } from '@angular/core';
import { NavbarBottomComponent } from './navbar-bottom.component';

@Directive({
  selector: '[kklFooterButton]',
})
export class FooterButtonDirective {
  constructor(public template: TemplateRef<any>) {}

  ngOnInit(): void {}
}
