import { Component, Input, OnInit } from '@angular/core';
import {
  CardDocument,
  CardSelectEvent,
} from '../../cards/card-document/card-document.component';

@Component({
  selector: 'kkl-grid-documents',
  templateUrl: './document-grid.component.html',
  styleUrls: ['./document-grid.component.scss'],
})
export class DocumentGridComponent implements OnInit {
  @Input() cards!: { [key: number]: CardDocument };

  constructor() {}

  ngOnInit(): void {}

  onCardSelect(event: CardSelectEvent) {
    const { card } = event;
    switch (event.action) {
      case 'select':
        this.cards = {
          ...this.cards,
          [card.id]: {
            ...this.cards[card.id],
            active: !card.active,
          },
        };
        break;
      case 'disable':
        this.cards = {
          ...this.cards,
          [card.id]: {
            ...this.cards[card.id],
            disable: !card.disable,
          },
        };

        break;
    }
  }
}
