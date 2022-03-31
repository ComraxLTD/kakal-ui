import { Directive, HostBinding, Input } from '@angular/core';
import { palette, Palette } from '../../../styles/theme';

@Directive({
  selector: '[appUnderline]',
})
export class UnderlineDirective {
  private palette = palette;

  @Input() underLineColor: Palette;
  @Input() thick: number;

  @HostBinding('style.border-bottom') private underline: string;

  constructor() {}

  ngOnInit(): void {
    this.underline = `${this.thick || 1}px solid ${
      this.palette[this.underLineColor || 'primary']
    }`;
  }
}
