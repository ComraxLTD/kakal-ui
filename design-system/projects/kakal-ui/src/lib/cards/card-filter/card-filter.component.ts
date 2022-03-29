import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface CardFilter {
  label: string;
  value: number;
  svgIcon: string;
}

@Component({
  selector: 'kkl-card-filter',
  templateUrl: './card-filter.component.html',
  styleUrls: ['./card-filter.component.scss'],
})
export class CardFilterComponent implements OnInit {
  @Input() card!: CardFilter;

  public _chosen: boolean;

  @Input()
  get chosen(): boolean {
    return this._chosen;
  }

  set cols(value: boolean) {
    this._chosen = value;
    // this.invalidate();
  }

  @Output() emitCard: EventEmitter<CardFilter> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onCardClick(): void {
    this.emitCard.emit(this.card);
  }
}
