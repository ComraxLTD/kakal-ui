import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DocumentItem } from '../../drawers/drawer-document/drawer-document-item/drawer-document-item.component';
import { IconService } from '../../icon/icons.service';
export interface CardDocument {
  id: number;
  svgIcon: string;
  category: string;
  active?: boolean;
  documents?: DocumentItem[];
}

export interface CardSelectEvent {
  card: CardDocument;
  action: 'select' | 'remove';
}

@Component({
  selector: 'kkl-card-document',
  templateUrl: './card-document.component.html',
  styleUrls: ['./card-document.component.scss'],
})
export class CardDocumentComponent implements OnInit {
  @Input() card!: CardDocument;

  @Output() cardSelect: EventEmitter<CardSelectEvent> = new EventEmitter();
  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    this.iconService.setIcon(this.card.svgIcon);
  }

  onCardSelect() {
    this.cardSelect.emit({ card: this.card, action: 'select' });
  }

  onRemove() {
    console.log('remove');
    this.cardSelect.emit({ card: this.card, action: 'remove' });
  }
}
