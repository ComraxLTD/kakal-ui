import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardDocument, TableBase, RowActionModel, GridChangedEvent } from '../../../../../../../kakal-ui/src/public-api';


@Component({
  selector: 'app-case-contract-panel',
  templateUrl: './case-contract-panel.component.html',
  styleUrls: ['./case-contract-panel.component.scss'],
})
export class CaseContractPanelComponent implements OnInit {
  // CARDS NAVIGATION PROPS
  cards!: { [key: number]: CardDocument };

  @Input() selectedCard: number = 1;

  // CONDITIONS TABLE PROPS

  dataSourceConditions: any[] = [];

  // set questions array for the advanced form
  columns: TableBase[] = [
    {
      key: 'condition',
      label: 'תנאי הסכם חליפין',
      noFilter: true,
    },
  ];

  dataSourceComments: any[] = [];

  // set questions array for the advanced form
  columnsComments: TableBase[] = [
    {
      key: 'condition',
      label: 'הערות - הסכם חליפין',
      controlType: 'text',
      noFilter: true,
    },
  ];

  rowActions: RowActionModel[] = [
    {
      type: 'inlineEdit',
      icon: 'edit',
    },
    {
      type: 'inlineDelete',
      icon: 'delete',
    },
    {
      type: 'inlineExpand',
      icon: 'expand_more',
    },
  ];

  private event!: GridChangedEvent;

  @Output() itemSelected: EventEmitter<GridChangedEvent> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.cards = this.getCards();
  }

  private getCards() {
    return {
      1: {
        id: 1,
        svgIcon: 'handshake',
        category: 'הסכם חליפין',
      },
      2: {
        id: 2,
        svgIcon: 'files_folders',
        category: 'הסכם רכישה',
      },
      3: {
        id: 3,
        svgIcon: 'files_folders',
        category: 'הסכם מכר',
      },
    };
  }
  onDocumentChanged(event: GridChangedEvent) {
    this.event = event;
    this._emiChanged();
  }

  private _emiChanged() {
    this.itemSelected.emit(this.event);
  }
}
