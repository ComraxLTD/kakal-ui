import { Directive, HostBinding, Input } from '@angular/core';
import { palletteClassesMap } from '../../styles/theme';

@Directive({
  selector: '[kkl-icon]',
})
export class KKLIconDirective {
  @HostBinding('class') private _class;

  private _disabled: boolean;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
    this.invalidate();
  }

  private _color: string = 'text';

  @Input()
  get color(): string {
    return this._color;
  }
  set color(value: string) {
    this._color = value;
    this.invalidate();
  }

  constructor() {}

  ngOnInit(): void {
    this.invalidate();
  }
  private invalidate() {
    this._class = this._class + ` ${palletteClassesMap[this._color]}`;
  }
}
