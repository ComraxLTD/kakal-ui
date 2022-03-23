import { Component, Input, OnInit } from '@angular/core';
import { Color, palette, Palette } from '../../styles/theme';

@Component({
  selector: 'kkl-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent implements OnInit {
  @Input() public size: number;
  @Input() public weight: number;

  private _color: Palette = 'text';

  @Input()
  get color(): Palette {
    return this._color;
  }
  set color(value: Palette) {
    this._color = value;
  }

  @Input() public underline: boolean;
  @Input() public disabled: boolean;

  public palette: Color = palette;

  constructor() {}

  ngOnInit(): void {
    this.size = this.size || 1.4;
    this.weight = this.weight || 500;
    this.color = this.color || 'text';
  }
}
