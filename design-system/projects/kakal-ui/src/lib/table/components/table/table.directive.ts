import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[kkl-table]',
})
export class KKLTableDirective {
  @Input('itemKey') public key: string;

  constructor() {}

  ngOnInit(): void {
    this.invalidate();
  }
  private invalidate() {
    if (!this.key) {
      throw new Error('Table must get unique key of the item');
    }
  }
}
