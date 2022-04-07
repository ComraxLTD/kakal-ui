import { Directive, TemplateRef } from '@angular/core';
import { NavbarBottomComponent } from './navbar-bottom.component';

@Directive({
  selector: '[kklNavbarBottom]',
})
export class NavbarBottomDirective {
  constructor(
    public hostBottomNavbar: NavbarBottomComponent,
    public template: TemplateRef<any>
  ) {}

  ngOnInit(): void {}
}
