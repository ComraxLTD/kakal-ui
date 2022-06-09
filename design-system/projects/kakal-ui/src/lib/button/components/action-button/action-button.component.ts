import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconService } from '../../../icon/icons.service';

@Component({
  selector: 'kkl-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
})
export class ActionButtonComponent implements OnInit {
  @Input() label: string;
  @Input() svgIcon: string;
  @Input() matIcon: string;

  @Output() clickEvent: EventEmitter<void> = new EventEmitter();

  isSvg!: boolean;

  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    if (this.svgIcon) {
      this.isSvg = this.iconService.setIcon(this.svgIcon);
    }
  }

  onClick() {
    this.clickEvent.emit();
  }
}
