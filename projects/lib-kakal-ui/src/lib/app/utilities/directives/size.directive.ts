import { Directive, HostBinding, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StepType } from '../../components/step/step.model';
import { BreakpointService } from '../services/breakpoint.service';

@Directive({
  selector: '[appSize]',
})
export class SizeDirective {
  @Input() size: number;
  @Input() type: StepType;
  @Input() divider: number;
  private tablet$: Observable<boolean>;

  private subscription: Subscription;

  @HostBinding('style.height') public height: string;
  @HostBinding('style.width') public width: string;

  constructor(private breakpointService: BreakpointService) {}


  ngOnInit(): void {
    this.setSize();
    this.tablet$ = this.breakpointService.isTablet();
    this.subscribeToBreakpoint();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setSize() {
    switch (this.type) {
      case 'wizard':
        this.width = '6rem';
        this.height = '7.5rem';
        break;
      case 'status':
        this.width = `${6 * (this.divider || 1)}rem`;
        this.height = `6rem`;
        break;
      case 'step':
        this.width = `8rem`;
        this.height = `12rem`;
        break;
      default:
        this.width = `${this.size * (this.divider || 1)}rem`;
        this.height = `${this.size}rem`;
    }
  }

  private subscribeToBreakpoint() {
    this.subscription = this.tablet$.subscribe((tablet: boolean) => {
      this.setSize();
    });
  }
}
