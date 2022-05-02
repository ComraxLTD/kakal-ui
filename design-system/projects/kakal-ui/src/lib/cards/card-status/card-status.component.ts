import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectOption } from '../../form/form-select/question-select.model';
import { IconService } from '../../icon/icons.service';
import { CardVariant, CardType } from '../card.model';

export interface CardStatus {
  key: string;
  label: string;
  path: string;
  svgIcon: string;
  value?: number;
  options: SelectOption[];
  variant?: CardVariant;
  type?: CardType;
  size?: number;
  divider?: number;
  disabled?: boolean;
}

@Component({
  selector: 'kkl-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.scss'],
})
export class CardStatusComponent implements OnInit {
  @Input() status: CardStatus;

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
