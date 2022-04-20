import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconService } from '../../icon/icons.service';
import { CardStatusModel } from './card-status.model';

@Component({
  selector: 'kkl-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.scss'],
})
export class CardStatusComponent implements OnInit {
  @Input() status: CardStatusModel;

  @Output() statusSelect: EventEmitter<void> = new EventEmitter();

  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    this.iconService.setIcon(this.status.svgIcon);
  }

  onStatusSelect(): void {
    if (!this.status.disabled) {
      this.statusSelect.emit();
    }
  }

}
