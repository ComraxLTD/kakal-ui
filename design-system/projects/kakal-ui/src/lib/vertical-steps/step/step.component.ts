import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'kkl-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent implements OnInit {
  @Input() label: string;
  @Input() key: string;
  @Input() formGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {
    console.log('step working');
  }
}
