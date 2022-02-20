import { Component, Input, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'kkl-step-title',
  templateUrl: './step-title.component.html',
  styleUrls: ['./step-title.component.scss'],

})
export class StepTitleComponent implements OnInit {
  @Input() public tooltipLabel: string;
  @Input() public position: TooltipPosition;

  constructor() {}

  ngOnInit(): void {
    this.position = this.position || "left"
  }
}
