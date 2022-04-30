import { Directive, HostBinding, Input } from '@angular/core';


@Directive({
  selector: '[flex-form-input]',
})
export class FlexFormInputDirective {
  @Input()
  @HostBinding('style.padding-left')
  offset: string;

  @Input()
  @HostBinding('style.padding-bottom')
  gutter: string;

  @HostBinding('style.width')
  width: string;

  @Input()
  index: number;
  @Input()
  rows: number;

  private _cols: number;

  @Input()
  get cols(): number {
    return this._cols;
  }

  set cols(value: number) {
    this._cols = value;
    // this.invalidate();
  }

  constructor() {}

  ngOnInit(): void {
    this.offset = (this.offset === 'none' ? 0 : 16) + 'px';
    this.gutter = this.gutter + 'px';
    this.width = '100%';
  }

}
