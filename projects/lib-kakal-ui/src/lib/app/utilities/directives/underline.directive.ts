import { Directive, HostBinding, Input } from '@angular/core';
import { palette, Palette } from '../../../styles/theme';

@Directive({
  selector: '[appUnderline]',
})
export class UnderlineDirective {
  private palette = palette;

  @Input() color: Palette;

  @HostBinding('style.border-bottom') private underline: string;

  constructor() {}

  ngOnInit(): void {
    this.underline = `3px solid ${this.palette[this.color || 'primary']}`;
  }
}
