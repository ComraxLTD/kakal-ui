import { Component, Input, OnInit } from '@angular/core';
import { Color, palette, Palette } from '../../styles/theme';
import { IconsService } from './icons.service';

@Component({
  selector: 'kkl-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  public palette: Color = palette;

  private _key: string;

  @Input()
  get key(): string {
    return this._key;
  }
  set key(value: string) {
    this._key = value;
    this.iconsService.setIcon(this._key);
  }

  private _color: string = 'default';

  @Input()
  get color(): string {
    return this._color;
  }
  set color(value: string) {
    this._color = value;
  }

  @Input() public type: 'mat' | 'svg';
  @Input() public size: number;

  @Input() public formType: string = 'form';

  @Input() public stroke: Palette;

  @Input() public backgroundColor: Palette;

  @Input() public disabled: boolean;

  public scale: string;

  constructor(private iconsService: IconsService) {}

  ngOnInit(): void {
    this.setIcon();
    this.setSize();
    this.color = this.color || 'default';
  }

  private setIcon() {
    const isSvg = this.iconsService.setIcon(this.key);
    if (this.type) {
      this.type = this.type;
    } else {
      this.type = isSvg ? 'svg' : 'mat';
    }
  }

  private setSize() {
    switch (this.formType) {
      case 'table':
        this.size = 1.1;
        break;

      default:
        this.size = this.size || 2.4;
        break;
    }
  }
}
