import { Component, Input, OnInit, TemplateRef } from '@angular/core';

export interface StatusProgress {
  label: string;
  authorizedBars: number;
  totalBars: number;
}

@Component({
  selector: 'kkl-status-progress',
  templateUrl: './status-progress.component.html',
  styleUrls: ['./status-progress.component.scss'],
})
export class StatusProgressComponent implements OnInit {
  @Input() hasLabel: boolean;
  @Input() status: StatusProgress;

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
    this.steps = this.steps.reverse();
  }
}
