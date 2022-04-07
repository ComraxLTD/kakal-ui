import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Palette } from '../../../../styles/theme';

@Component({
  selector: 'kkl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ButtonComponent implements OnInit {
  @Input() label = 'Button';
  @Input() icon: string;
  @Input() textColor: Palette = 'paper';
  @Input() direction: 'rtl' | 'ltr' = 'rtl';
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Output() clickEvent: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.clickEvent.emit();
  }

}
