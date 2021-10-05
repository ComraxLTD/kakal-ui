import { Component, Input, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Palette } from 'src/styles/theme';
import { IconType } from './icon.model';
import { IconsService } from './icons.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() public key: string;
  @Input() public type: IconType;
  @Input() public size: number;

  @Input() public color: Palette;
  @Input() public activeColor: Palette;

  @Input() public active$: Observable<boolean>;

  @Input() public backgroundColor: Palette;

  public scale: string;
  public color$: BehaviorSubject<Palette>;

  private subscription: Subscription;

  constructor(private iconsService: IconsService) {}

  ngOnInit(): void {
    this.setIcon();
    this.setColor();
    this.setSize();
    this.subscribeToActive();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
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

  private setColor() {
    this.color$ = new BehaviorSubject<Palette>(this.color || 'default');
  }

  private setSize() {
    this.scale = `scale(${this.size || 1})`;
  }

  private subscribeToActive() {
    if (this.active$) {
      this.subscription = this.active$.subscribe((active: boolean) => {
        active
          ? this.color$.next(this.activeColor || 'paper')
          : this.color$.next(this.color);
      });
    }
  }
}
