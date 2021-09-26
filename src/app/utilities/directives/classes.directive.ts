import {
  Directive,
  HostBinding,
  Input,
  OnInit,
  EventEmitter,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { theme, Palette } from 'src/styles/theme';

export interface Classes {
  color?: Palette;
  fontWeight?: number;
  fontSize?: number;
  cursor?: string;
}

@Directive({
  selector: '[appClasses]',
})
export class ClassesDirective implements OnInit {
  private palette = theme.palette;
  private unsubscribe: Subscription;

  @Input() public classes: Classes = {
    color: 'text',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 500,
  };

  @Input() change: Observable<Classes>;

  @HostBinding('style.color') private color: string;
  @HostBinding('style.font-weight') private fontWeight: number;
  @HostBinding('style.font-size') private fontSize: string;
  @HostBinding('style.cursor') private cursor: string;
  @HostBinding('style.background-color') private backgroundColor: string;

  constructor() {}

  ngOnInit(): void {
    this.setStyle();
    this.subscribeToChange();
  }

  ngOnDestroy() {
    if (this.unsubscribe) {
      this.unsubscribe.unsubscribe();
    }
  }

  private setStyle() {
    this.cursor = this.classes.cursor;
    this.fontWeight = this.classes.fontWeight;
    this.fontSize = `${this.classes['fontSize']}px` || '14px';
    this.color = this.palette[this.classes.color];
  }

  private subscribeToChange() {
    if (this.change) {
      this.unsubscribe = this.change.subscribe((classes) => {
        this.classes = classes;
        this.setStyle();
      });
    }
  }
}
