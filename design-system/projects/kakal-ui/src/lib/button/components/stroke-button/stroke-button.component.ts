import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Palette } from '../../../../styles/theme';

@Component({
  selector: 'kkl-stroke-button',
  templateUrl: './stroke-button.component.html',
  styleUrls: ['./stroke-button.component.scss'],
})
export class StrokeButtonComponent implements OnInit {
  @Input() color: Palette;
  @Input() type: 'button' | 'submit' =  'button';
  @Input() disabled: boolean;

  @Output() clickEvent: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public onClick(): void {
    this.clickEvent.emit();
  }
}
