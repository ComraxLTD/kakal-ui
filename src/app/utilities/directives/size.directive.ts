import { Directive, HostBinding, Input } from '@angular/core';
import { StepType } from '../../components/step/step.model';

@Directive({
  selector: '[appSize]',
})
export class SizeDirective {

  @Input() size: number = 2;
  @Input() type: StepType;
  @Input() divider: boolean = false;

  private double: number

  @HostBinding('style.height') public height: string;
  @HostBinding('style.width') public width: string;

  constructor() {

  }

  ngOnInit() {



    switch (this.type) {
      case StepType.WIZARD:
        this.width = '4rem'
        this.height = '4.5rem'
        break;
      case StepType.STATUS:
        this.width = `${(this.size * 3)}rem`;
        this.height = `${this.size}rem`;
        break;
      default:
        this.double = this.divider ? 2 : 1
        this.width = `${(this.size * this.double)}rem`;
        this.height = `${this.size}rem`;
    }
  }
}
