import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from '../../../../styles/theme';

@Component({
  selector: 'pl-container-button',
  templateUrl: './container-button.component.html',
  styleUrls: ['./container-button.component.scss']
})
export class ContainerButtonComponent implements OnInit {
  @Input() color: Color;
  @Input() disabled: boolean;

  @Output() clickEvent: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public onClick(): void {
    this.clickEvent.emit();
  }
}
