import { Component, Input, OnInit } from '@angular/core';
import { Palette } from 'src/styles/theme';
import { IconsService } from './icons.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() public key: string = '';
  @Input() public type: string = 'svg';
  @Input() public color: Palette = 'primary';

  @Input() public size: number = 24;
  @Input() public scale: number | string = 1;

  @Input() public width: number = this.size;
  @Input() public height: number = this.size;
  @Input() public isActive: boolean = false;
  @Input() public rotate: number = 0;

  @Input() public backgroundColor: string = '';

  public matScale: string = `scale(${this.scale})`;
  public matRotate: string = `scale(${this.rotate})deg`;

  constructor(private iconsService: IconsService) {}

  ngOnInit(): void {
    this.setIcon();
    this.setIconColor();
    this.setIconSize();
    this.setRotate();
  }

  private setIcon() {
    const isSvg = this.iconsService.setIcon(this.key);
    if (!isSvg) {
      this.type = 'mat';
    }
  }

  private setIconColor() {
    this.color = this.isActive ? 'paper' : this.color || 'default';
  }

  private setIconSize() {
    this.width = this.size;
    this.height = this.size;
    this.matScale = this.scale ? `scale(${this.scale})` : 'scale(1)';
  }

  private setRotate() {
    this.matRotate = this.rotate ? `rotate(${this.rotate}deg)` : 'rotate(0deg)';
  }
}
