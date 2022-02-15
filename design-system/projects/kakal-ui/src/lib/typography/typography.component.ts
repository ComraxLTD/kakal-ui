import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color, palette, Palette } from '../../styles/theme';

@Component({
  selector: 'kkl-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent implements OnInit {

  public palette: Color = palette;
  @Input() public size: number;
  @Input() public weight: number;
  @Input() public underline:boolean;
  @Input() public color: Palette;
  @Input() public disabled: boolean
  @Input() public dir:string;

  @Output() click: EventEmitter<void> = new EventEmitter()

  constructor(
  ) { }

  ngOnInit(): void {
    this.size = this.size || 1.4;
    this.weight = this.weight || 500;
    this.color = this.color || 'text';
    this.dir = this.dir || 'rtl'
  }

  public onClick() {
    this.click.emit()
  }
}
