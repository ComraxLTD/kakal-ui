import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from '../../../../styles/theme';

@Component({
  selector: 'kkl-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.scss'],
})
export class CreateButtonComponent implements OnInit {
  @Input() color: Color;
  @Input() disabled: boolean;

  @Output() clickEvent: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public onClick(): void {
    this.clickEvent.emit();
  }
}
