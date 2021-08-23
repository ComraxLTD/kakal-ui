import { IconsService } from './../../utilities/icons/icons.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {

  // sizing svg icon
  @Input() public size: number = 24;
  @Input() public width: number;
  @Input() public height: number;

  // active prop for active style
  @Input() public isActive: boolean;

  // svg or materiel
  @Input() public type: string;

  // icon name as in icon-list or anguler materiel
  @Input() public key: string = '';

  // color as theme (primery, warn ot warn)
  @Input() public color: string;

  // sizing for mat-icon
  @Input() public matScale: string;

  public default: boolean = true;

  constructor(private iconsService: IconsService) { }

  ngOnInit(): void {
    this.setIcon();
    this.setIconColor();
    this.setIconSize();
  }

  private setIcon() {
    this.type = this.type || 'svg';
    if (this.type === 'svg') {
      this.iconsService.setIcon(this.key);
    }
  }

  private setIconColor() {
    if (this.color) {
      this.default = false;
    } else if (this.isActive) {
      this.default = !this.isActive;
    }
  }

  private setIconSize() {
    this.width = this.size;
    this.height = this.size;
    this.matScale = this.matScale || 'scale(1)';
  }
}

