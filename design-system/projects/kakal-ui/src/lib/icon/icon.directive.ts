import { Directive, HostBinding, Input } from '@angular/core';
import { palletteClassesMap, palette, Palette } from '../../styles/theme';

@Directive({
  selector: '[kkl-icon]',
})
export class KKLIconDirective {
  @Input() svgIcon: string;

  @HostBinding('class') private _class;

  @HostBinding('style.color')
  private currentColor: string;

  @Input()
  @HostBinding('style.fill')
  private fill: string;

  @Input()
  @HostBinding('style.stroke')
  private stroke: string;

  private _disabled: boolean;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
    this.invalidate();
  }

  private _color: Palette = 'default';

  @Input()
  get color(): Palette {
    return this._color;
  }
  set color(value: Palette) {
    this._color = value;
    this.invalidate();
  }

  constructor() {}

  ngOnInit(): void {
    this.invalidate();
  }
  private invalidate() {
    if (palletteClassesMap[this._color]) {
      this._class = this._class + ` ${palletteClassesMap[this._color]}`;
      return;
    }

    if (this.stroke) {
      // this.stroke = palette[this.stroke];

    } else {
      this.currentColor = palette[this._color];
    }
  }
}
