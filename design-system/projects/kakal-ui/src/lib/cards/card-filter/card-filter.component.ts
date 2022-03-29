import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardFilter } from './card-filter.model';
@Component({
  selector: 'kkl-filter-card',
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
