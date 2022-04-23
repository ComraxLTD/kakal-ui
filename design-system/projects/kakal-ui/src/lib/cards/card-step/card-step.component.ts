import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreakpointService } from '../../../services/breakpoint.service';
import { IconService } from '../../icon/icons.service';
import { CardOptions } from '../card.model';
import { CardStepModel } from './card-step.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'kkl-card-step',
  templateUrl: './card-step.component.html',
  styleUrls: ['./card-step.component.scss'],
})
export class CardStepComponent implements OnInit {
  @Input() step: CardStepModel;
  @Input() options: CardOptions;

  mobile$: Observable<boolean>;

  @Output() stepSelect: EventEmitter<void> = new EventEmitter();

  constructor(
    private iconService: IconService,
    private breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    this.mobile$ = this.breakpointService.isMobile();
    this.iconService.setIcon(this.step.svgIcon);
    this.options = this.options || { size: 3, variant: 'circle', type: 'step' };
  }

  onStepSelect(): void {
    if (!this.step.disabled) {
      this.stepSelect.emit();
    }
  }
}
