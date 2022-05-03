import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';

export interface StatusBars {
  label: string;
  authorizedBars: number;
  totalBars: number;
}


@Component({
  selector: 'kkl-status-steps',
  templateUrl: './status-steps.component.html',
  styleUrls: ['./status-steps.component.scss'],
})
export class StatusStepsComponent implements OnInit {

  @Input() hasLabel: boolean;
  @Input() status: StatusBars;

  @Input() labelRef: TemplateRef<any>;

  steps: string[] = [];

  constructor() {}

  ngOnInit(): void {
    const approvedBars = Array(this.status.authorizedBars).fill('active');
    this.steps.push(...approvedBars);
    // if (this.status.authorizedBars < this.status.totalBars) {
    //   this.steps.push('disable');
    // }

    const disableBars = new Array(
      this.status.totalBars - this.status.authorizedBars
    ).fill('');

    this.steps.push(...disableBars);
    this.steps=this.steps.reverse()
  }
}
