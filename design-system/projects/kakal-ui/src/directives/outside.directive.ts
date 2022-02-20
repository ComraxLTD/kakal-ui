import { Directive, ElementRef, EventEmitter, Input, Output} from '@angular/core';

@Directive({
  selector: '[appOutside]',
  host: {
    '(document:click)': 'onClick($event)',
  }
})
export class OutsideDirective {
  @Output() public clickOutside:EventEmitter<any> = new EventEmitter();
  @Output() public outside:EventEmitter<void> = new EventEmitter();
  @Input() emit : boolean

  constructor(private elementRef: ElementRef) { }
  public counter = 0;

  public onClick(event: any) {

    if(this.emit) {
      this.outside.emit()
    }

    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.counter++;
      if (this.counter > 1) {
        this.clickOutside.emit();
      }
    }

  }
}
