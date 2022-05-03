import { Directive, HostBinding, Input } from '@angular/core';
import { palette, Palette } from '../../styles/theme';

@Directive({
  selector: '[kkl-border]',
})
export class KKLBorderDirective {
  private palette = palette;

  @Input() color: Palette;
  @Input() thick: number;
  @Input() radius: number;
  @Input() disabled: boolean;

  private _color: Palette;

  @Input()
  get plBorder(): Palette {
    return this._color;
  }
  set plBorder(value: Palette) {
    this.color = value;
  }

  @HostBinding('style.border') private border: string;
  @HostBinding('style.border-radius') private borderRadius:string

  constructor() {}

  ngOnInit(): void {
    this.borderRadius = this.radius+'px'
    this.border = `${this.thick || 1}px solid ${
      this.palette[this._color || 'primary']
    } !important`;
  }
}
