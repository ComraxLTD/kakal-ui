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

  private previousIndex: number;

  constructor() {}

  @Output() change: EventEmitter<GridChangedEvent> = new EventEmitter();

  ngOnInit(): void {}

  private setPrevious() {
    if (this.previousIndex) {
    } else {
      this.previousIndex;
    }
  }

  private setCards(card: CardDocument, key: keyof CardDocument) {
    return {
      ...this.cards,
      [card.id]: {
        ...this.cards[card.id],
        [key]: !card[key],
      },
    };
  }

  onCardSelect(event: CardDocumentEvent) {
    const { card } = event;

    const cards = this.setCards(card, 'selected');

    if (this.previousIndex) {
      this.cards = {
        ...cards,
        [this.previousIndex]: {
          ...cards[this.previousIndex],
          selected: false,
        },
      };
    } else {
      this.cards = { ...cards };
    }

    this.gridChanged = {
      ...this.gridChanged,
      selectedCard: this.cards[card.id].selected ? this.cards[card.id] : null,
    };

    this.previousIndex = card.id;

    this._emitChanged();
  }

  onCardRemove(event: CardDocumentEvent) {
    const { card } = event;

    const cards = this.setCards(card, 'disabled');
    this.cards = { ...cards };

    this.gridChanged = {
      ...this.gridChanged,
      selectedCard: this.compare(this.gridChanged.selectedCard, card)
        ? null
        : { ...this.gridChanged.selectedCard },
      disableCard: this.cards[card.id].disabled ? this.cards[card.id] : null,
    };
    this._emitChanged();
  }

  private compare(o1: CardDocument, o2: CardDocument): boolean {
    return Object.is(o1.id, o2.id);
  }

  private _emitChanged() {
    const event: GridChangedEvent = this.gridChanged;
    this.change.emit(event);
  }
}
