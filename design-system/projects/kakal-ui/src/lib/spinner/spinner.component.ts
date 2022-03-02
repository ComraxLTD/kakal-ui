import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { BehaviorSubject, Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'kkl-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  @Input() color: ThemePalette = 'primary';
  @Input() mode: ProgressSpinnerMode = 'indeterminate';
  @Input() value: number;
  @Input() diameter: number;

  public isLoading$: Observable<boolean>;

  constructor(private spinnerService: SpinnerService) {
    this.isLoading$ = this.spinnerService.getListen();
  }

  ngOnInit(): void {
    this.color = this.color || 'primary';
    this.mode = this.mode || 'indeterminate';
    this.value = this.value || 50;
    this.diameter = this.diameter || 80;
  }
}
