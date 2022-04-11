import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  CardDocument,
  CardDocumentEvent,
} from '../../cards/card-document/card-document.component';

export interface GridChangedEvent {
  selectedCard: CardDocument;
  disableCard: CardDocument;
}

@Component({
  selector: 'kkl-grid-documents',
  templateUrl: './document-grid.component.html',
  styleUrls: ['./document-grid.component.scss'],
})
export class DocumentGridComponent implements OnInit {
  @Input() cards!: { [key: number]: CardDocument };

  private gridChanged: GridChangedEvent;

  constructor() {}

  @Output() change: EventEmitter<GridChangedEvent> = new EventEmitter();

  ngOnInit(): void {}

  onCardSelect(event: CardDocumentEvent) {
    const { card } = event;
    this.cards = {
      ...this.cards,
      [card.id]: {
        ...this.cards[card.id],
        active: !card.active,
      },
    };

    this.gridChanged = {
      ...this.gridChanged,
      selectedCard: this.cards[card.id],
    };
    this._emitChanged();
  }

  onCardRemove(event: CardDocumentEvent) {
    const { card } = event;
    this.cards = {
      ...this.cards,
      [card.id]: {
        ...this.cards[card.id],
        disable: !card.disable,
      },
    };

    this.gridChanged = {
      ...this.gridChanged,
      disableCard: this.cards[card.id],
    };
    this._emitChanged();
  }

  private _emitChanged() {
    const event: GridChangedEvent = this.gridChanged;
    this.change.emit(event);
  }
}
