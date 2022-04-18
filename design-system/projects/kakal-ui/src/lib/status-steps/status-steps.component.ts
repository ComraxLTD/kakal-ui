import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
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
  @Input() public cols: number;
  @Input() public color: string;
  @Input() public hasLabel: boolean;
  @Input() public status: StatusBars;

  @Input() labelRef: ElementRef;

  @Output() click: EventEmitter<void> = new EventEmitter();

  public steps: string[] = [];

  constructor() {}

  ngOnInit(): void {

    this.cols = this.cols || 8;
    this.color = this.color || 'accent';

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
