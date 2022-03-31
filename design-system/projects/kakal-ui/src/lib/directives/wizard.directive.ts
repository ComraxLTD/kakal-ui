import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appWizard]',
})
export class WizardDirective {
  @Input() cards: number = 4;

  @HostBinding('style.height') private height: string;

  constructor() {}

  ngOnInit(): void {
    this.height = this.setHeight() + 'rem';
  }

  private setHeight() {
    return this.cards * 7 + 9;
  }
}
