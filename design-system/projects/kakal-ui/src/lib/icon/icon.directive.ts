import { ContentChild, Directive, HostBinding, Input } from '@angular/core';
import { palletteClassesMap, palette, Palette } from '../../styles/theme';
import { IconsService } from './icons.service';

@Directive({
  selector: '[kkl-icon], mat-icon',
})
export class KKLIconDirective {
  @Input() svgIcon: string;

  @HostBinding('class') private _class;

  @HostBinding('style.color')
  private currentColor: string;

  @HostBinding('style.fill')
  private fill: string;

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
      this.currentColor = palette[this._color];
    }
  }
}
