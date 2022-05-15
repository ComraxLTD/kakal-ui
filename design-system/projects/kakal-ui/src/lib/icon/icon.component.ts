import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Color, palette, Palette } from '../../styles/theme';
import { IconService } from './icons.service';

export interface IconModel {
  key: string;
  size: number;
  type?: 'mat' | 'svg';
  path?: string;
  color?: Palette;
}

@Component({
  selector: 'kkl-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  public palette: Color = palette;

  private _key: string;

  public padding!: number;

  @Input()
  get key(): string {
    return this._key;
  }
  set key(value: string) {
    this._key = value;
    if (value) {
      this.IconService.setIcon(this._key);
    }
  }

  _color: string = 'default';

  @Input()
  set color(value: string) {
    this._color = value;
  }

  @Input() public type: 'mat' | 'svg';
  @Input() public size: number;

  @Input() public formType: string = 'form';

  @Input() public stroke: Palette;

  @Input() public backgroundColor: Palette;

  @Input() public disabled: boolean;

  @HostBinding('style.border') paddingValue: string;

  public scale: string;

  constructor(private IconService: IconService) {}

  ngOnInit(): void {
    this.setIcon();
    this.setSize();
    this.color = this.color || 'default';
    this.paddingValue = this.padding + ' !important';
  }

  private setIcon() {
    if (this._key) {
      const isSvg = this.IconService.setIcon(this.key);
      if (this.type) {
        this.type = this.type;
      } else {
        this.type = isSvg ? 'svg' : 'mat';
      }
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
