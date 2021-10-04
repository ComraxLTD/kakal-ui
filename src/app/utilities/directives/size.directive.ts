import { Directive, HostBinding, Input } from '@angular/core';
import { StepType } from '../../components/step/step.model';

@Directive({
  selector: '[appSize]',
})
export class SizeDirective {
  @Input() size: number;
  @Input() type: StepType;
  @Input() divider: number ;

  @HostBinding('style.height') public height: string;
  @HostBinding('style.width') public width: string;

  constructor() { }

  ngOnInit() {
    switch (this.type) {
      case 'wizard':
        this.width = '6rem';
        this.height = '7.5rem';
        break;
      case 'status':
        this.width = `${this.size * 3}rem`;
        this.height = `${this.size}rem`;
        break;
      case 'step':
        this.width = `7rem`;
        this.height = `7rem`;
        break;
      default:
        this.width = `${this.size * (this.divider || 1)}rem`;
        this.height = `${this.size}rem`;
    }
  }
}
