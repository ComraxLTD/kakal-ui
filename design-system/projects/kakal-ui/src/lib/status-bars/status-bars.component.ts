import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { StatusBarsModel } from './status-bars.model';

@Component({
  selector: 'kkl-status-bars',
  templateUrl: './status-bars.component.html',
  styleUrls: ['./status-bars.component.scss'],
})
export class StatusBarsComponent implements OnInit {
  @Input() public cols: number;
  @Input() public height: number;
  @Input() public gutter: number;
  @Input() public color: string;
  @Input() public hasLabel: boolean;
  @Input() public status: StatusBarsModel;

  @Input() labelRef: ElementRef;

  @Output() click: EventEmitter<void> = new EventEmitter();

  public steps: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.cols = this.cols || 8;
    this.color = this.color || 'accent';

    const approvedBars = Array(this.status.authorizedBars).fill('active');
    this.steps.push(...approvedBars);
    console.log(this.steps);
    if (this.status.authorizedBars < this.status.totalBars) {
      this.steps.push('disable');
    }
    console.log(this.steps);

    const disapproveddBars = new Array(
      this.status.totalBars - this.status.authorizedBars
    ).fill('');

    this.steps.push(...disapproveddBars);
    console.log(this.steps);
  }
}
