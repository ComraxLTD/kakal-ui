import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { palletteClassesMap } from '../../../styles/theme';

@Directive({
  selector: '[kkl-stroked-button]',
})
export class KKLStrokedButtonDirective {
  @HostBinding('class') private _class;
  @HostBinding('style.border') private border: string;


  private _disabled: boolean;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
    this.invalidate();
  }

  private _color: string;
  @Input()
  get color(): string {
    return this._color;
  }
  set color(value: string) {
    this._color = value;
  }

  constructor(private el: ElementRef) {}
  private baseClass = `mat-focus-indicator mat-button-base mat-stroked-button `;

  ngOnInit(): void {
    this.border = '1px solid';
  }

  private invalidate(): void {
    if (this._disabled) {
      this._class = this.baseClass + ' mat-button-disabled';
    } else {
      this._class = this.baseClass + `  mat-elevation-z4 ${palletteClassesMap[this._color]}`;
    }
  }
}
