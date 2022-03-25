import { Directive, HostBinding, Input } from '@angular/core';

function hasGutter(index: number, cols: number): boolean {
  return (index + 1) % cols !== 0;
}

@Directive({
  selector: '[flex-form-input]',
})
export class FlexFormInputDirective {
  @Input()
  index: number;

  @Input() cols: number;

  @Input()
  @HostBinding('style.padding-left')
  colGutter: string = '16';

  @HostBinding('style.padding-bottom')
  @Input() rowGutter: string;

  @HostBinding('class')

  @HostBinding('style.width') width : string

  private _class;

  // @Input()
  // get color(): Palette {
  //   return this._color;
  // }

  // set color(value: Palette) {
  //   this._color = value;
  //   this.invalidate();
  // }

  constructor() {}

  ngOnInit(): void {
    if (hasGutter(this.index, this.cols)) {
      this.colGutter = this.colGutter + 'px';
    }
    this.rowGutter = this.rowGutter + 'px';
    this.width = '100%'
  }
  private invalidate() {}
}
