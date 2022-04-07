import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointService } from '../../../services/breakpoint.service';
import { IconsService } from '../../icon/icons.service';
import { CardStepModel } from './card-step.model';

@Component({
  selector: 'kkl-card-step',
  templateUrl: './card-step.component.html',
  styleUrls: ['./card-step.component.scss'],
})
export class CardStepComponent implements OnInit {
  @Input() step: CardStepModel;

  mobile$: Observable<boolean>;

  @Output() stepSelect: EventEmitter<void> = new EventEmitter();

  constructor(
    private iconsService: IconsService,
    private breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    this.mobile$ = this.breakpointService.isMobile();
    this.iconsService.setIcon(this.step.svgIcon);
  }

  onStepSelect(): void {
    if (!this.step.isActive && !this.step.disabled) {
      this.stepSelect.emit();
    }
  }
}
