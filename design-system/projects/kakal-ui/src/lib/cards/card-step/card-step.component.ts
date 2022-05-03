import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreakpointService } from '../../../services/breakpoint.service';
import { IconService } from '../../icon/icons.service';
import { CardOptions } from '../card.model';
import { Observable } from 'rxjs';

import { CardType, CardVariant } from '../card.model';

export interface CardStep {
  label: string;
  path: string;
  svgIcon: string;
  value?: number;
  selected?: boolean;
  disabled?: boolean;
  hasSteps?: boolean;
}
export interface StepOptions {
  variant?: CardVariant;
  type?: CardType;
  size?: number;
  divider?: number;
}

@Component({
  selector: 'kkl-card-step',
  templateUrl: './card-step.component.html',
  styleUrls: ['./card-step.component.scss'],
})
export class CardStepComponent implements OnInit {
  @Input() step: CardStep;
  @Input() options: CardOptions;
  @Input() selected: boolean;

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
