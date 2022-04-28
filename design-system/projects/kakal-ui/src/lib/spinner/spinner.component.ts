import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
@Component({
  selector: 'kkl-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  @Input() color: ThemePalette;
  @Input() mode: ProgressSpinnerMode;
  @Input() value: number;
  @Input() diameter: number;

  constructor() {
  }

  ngOnInit(): void {
    this.color = this.color || 'primary';
    this.mode = this.mode || 'indeterminate';
    this.value = this.value;
    this.diameter = this.diameter || 80;
  }
}
