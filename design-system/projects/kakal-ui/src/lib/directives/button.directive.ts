import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[kkl-button]'
})
export class KKLButtonDirective {


  @HostBinding('style.cursor') private cursor: string;

  constructor() { }

  ngOnInit(): void {
    this.cursor = 'pointer'
  }

}
