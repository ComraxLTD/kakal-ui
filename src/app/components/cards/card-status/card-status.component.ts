import { Component, Input, OnInit } from '@angular/core';
import { StepModel } from '../../step/step.model';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.scss'],
})
export class CardStatusComponent implements OnInit {

  @Input() public status: StepModel;

  constructor() {}

  ngOnInit(): void {
  }
}
