import {
  Directive,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
// import { CardStep } from '../components/cards/card-step/card-step.model';
import { BreakpointService } from '../../services/breakpoint.service';
import { map, Observable, of, Subscription, switchMap } from 'rxjs';
// import { CardType } from '../components/cards/card.model';

@Directive({
  selector: '[appSize]',
})
export class SizeDirective implements OnInit, OnDestroy {
  @Input() step: string;
  @Input() size: number;
  @Input() type: string;
  @Input() divider: number;
  @Input() space: number;
  @Input() padding:number[];

  private mobile$: Observable<boolean>;
  private subscription: Subscription;

  @HostBinding('style.height') public height: string;
  @HostBinding('style.width') public width: string;
  @HostBinding('style.padding') public paddingValue:string

  private stepHeight: number;

  constructor(private breakpointService: BreakpointService) {}

  ngOnInit(): void {
    this.setSize();
    this.mobile$ = this.breakpointService.isMobile();
    this.subscribeToBreakpoint();

    if(this.padding && this.padding.length){
      this.paddingValue=this.padding.reduce((pre,cur)=>pre+(cur+'px '),'')
    }
    this.paddingValue+=' !important'
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setSize() {
    switch (this.type) {
      case 'wizard':
        this.width = '6.8rem';
        this.height = '9rem';
        break;
      case 'status':
        break;
      case 'step':
        this.width = `${this.size}rem`;
        this.height = `${this.stepHeight}rem`;
        break;
      default:
        this.width = `${this.size * (this.divider || 1)}rem`;
        this.height = `${this.size}rem`;
    }
  }

  private subscribeToBreakpoint() {
    this.subscription = this.mobile$.subscribe(
      (mobile) => (this.stepHeight = mobile ? 6 : 12)
    );
  }
}
