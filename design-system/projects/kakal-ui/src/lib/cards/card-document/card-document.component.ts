import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, map, Observable, pluck } from 'rxjs';
import { DocumentItem } from '../../drawers/drawer-document/drawer-document-item/drawer-document-item.component';
import { IconService } from '../../icon/icons.service';
export interface CardDocument {
  id: number;
  svgIcon: string;
  category: string;
  value?: string;
  active?: boolean;
  disable?: boolean;
  documents?: DocumentItem[];
}

export interface CardSelectEvent {
  card: CardDocument;
  action: 'select' | 'disable';
}

@Component({
  selector: 'kkl-card-document',
  templateUrl: './card-document.component.html',
  styleUrls: ['./card-document.component.scss'],
})
export class CardDocumentComponent implements OnInit {

  private card$: BehaviorSubject<CardDocument> = new BehaviorSubject(null);
  _card$: Observable<CardDocument>;

  @Input()
  set card(value: CardDocument) {
    this.iconService.setIcon(value.svgIcon);
    this.card$.next(value);
  }

  icon$: Observable<string>;

  @Output() cardSelect: EventEmitter<CardSelectEvent> = new EventEmitter();
  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    this._card$ = this.card$.asObservable();
    this.icon$ = this.setActionIcon()
  }

  private setActionIcon(): Observable<string> {
    return this.card$.asObservable().pipe(
      pluck('disable'),
      map((disable: boolean) => (disable ? 'add' : 'clear'))
    );
  }

  onSelect(card : CardDocument) {
    this.cardSelect.emit({ card, action: 'select' });
  }

  onDisable(card : CardDocument) {
    this.cardSelect.emit({ card, action: 'disable' });
    // const disable = this.disable$.getValue();
    // this.disable$.next(!disable);
  }
}
