import { Component, Input, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Color, palette, Palette } from '../../../styles/theme';
import { IconType } from './icon.model';
import { IconsService } from './icons.service';

@Component({
  selector: 'kkl-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {


  public palette: Color = palette;

  @Input() public key: string;
  @Input() public type: IconType
  @Input() public size: number;

  @Input() public color: Palette;
  @Input() public activeColor: Palette;

  @Input() public backgroundColor: Palette;

  public scale: string;

  private subscription: Subscription

  constructor(private iconsService: IconsService) { }

  ngOnInit(): void {
    this.setIcon();
    this.setSize();
    this.color = this.color || 'default'
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
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
    this.size = this.size;
    this.scale = `scale(${this.size || 1})`;
  }


}
