import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'kkl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ButtonComponent implements OnInit {
  @Input() label = 'Button';
  @Input() type: 'primary' | 'secondary' = 'primary';
  constructor() { }

  ngOnInit(): void {
  }

}
