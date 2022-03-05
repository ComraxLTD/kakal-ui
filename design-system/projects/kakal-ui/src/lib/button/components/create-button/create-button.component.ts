import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Palette } from 'projects/kakal-ui/src/styles/theme';

@Component({
  selector: 'kkl-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.scss'],
})
export class CreateButtonComponent implements OnInit {
  @Input() color: Palette = 'primary';
  @Input() disabled: boolean;

  @Output() clickEvent: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public onClick(): void {
    this.clickEvent.emit();
  }
}
