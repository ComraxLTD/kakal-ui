import { Directive, HostBinding, Input } from '@angular/core';
import { palette, Palette } from '../styles/theme';

@Directive({
  selector: '[appBorder]',
})
export class BorderDirective {
  private palette = palette;

  @Input() color: Palette;
  @Input() plBorder: Palette;
  @Input() thick: number;
  @Input() disabled: boolean;

  @HostBinding('style.border') private border: string;

  constructor() {}

  ngOnInit(): void {
    this.border = `${this.thick || 1}px solid ${
      this.palette[this.plBorder || this.color || 'primary']
    }`;
  }
}
