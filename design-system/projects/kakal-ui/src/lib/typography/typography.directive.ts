import { Directive, HostBinding, Input } from '@angular/core';
import { palette } from '../../styles/theme';

@Directive({
  selector: '[kkl-typography]',
})
export class KKLTypographyDirective {
  @HostBinding('class') private _class;

  private _disabled: boolean;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
    this.invalidate();
  }

  private _color: string = 'text';

  @Input()
  @HostBinding('style.color')
  get color(): string {
    return this._color;
  }
  set color(value: string) {
    this._color = palette[value || 'text'];
  }

  @HostBinding('style.border') border;
  constructor() {}

  ngOnInit(): void {
    this.invalidate();
  }
  private invalidate() {}
}
