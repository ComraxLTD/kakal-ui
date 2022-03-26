import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from '../../../../styles/theme';

@Component({
  selector: 'kkl-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
})
export class AddButtonComponent implements OnInit {
  @Input() color: Color;
  @Input() disabled: boolean;

  @Output() clickEvent: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public onClick(): void {
    this.clickEvent.emit();
  }
}
