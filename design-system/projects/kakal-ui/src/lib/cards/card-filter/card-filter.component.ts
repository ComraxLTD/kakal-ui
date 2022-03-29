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
  @Input() chosen: boolean = false;
  @Output() emitCard: EventEmitter<CardFilter> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onCardClick(): void {
    this.emitCard.emit(this.card);
  }
}
