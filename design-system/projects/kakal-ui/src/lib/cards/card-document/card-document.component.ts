import { Component, Input } from '@angular/core';
import { DocumentItem } from '../../drawers/drawer-document/drawer-document-item/drawer-document-item.component';

export interface CardDocument {
  svgIcon: string;
  category: string;
  documents?: DocumentItem[];
}

@Component({
  selector: 'kkl-card-document',
  templateUrl: './card-document.component.html',
  styleUrls: ['./card-document.component.scss'],
})
export class CardDocumentComponent {
  @Input() card!: CardDocument;

  constructor() {}
}
