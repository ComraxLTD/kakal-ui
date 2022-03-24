import { ContentChild, Directive, HostBinding, Input } from '@angular/core';
import { palletteClassesMap, palette, Palette } from '../../styles/theme';
import { IconsService } from './icons.service';

@Directive({
  selector: '[kkl-icon], mat-icon',
})
export class KKLIconDirective {
  @Input() svgIcon: string;

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

  @HostBinding('style.color')
  private iconColor: string;

  private _color: Palette = 'default';

  @Input()
  get color(): Palette {
    return this._color;
  }
  set color(value: Palette) {
    this._color = value;
    this.invalidate();
  }

  constructor(private iconsService: IconsService) {}

  ngOnInit(): void {
    if (this.svgIcon) {
      this.iconsService.setIcon(this.svgIcon);
    }

    this.invalidate();
  }
  private invalidate() {
    if (palletteClassesMap[this._color]) {
      this._class = this._class + ` ${palletteClassesMap[this._color]}`;
    } else {
      this.iconColor = palette[this._color];
    }
  }
}
