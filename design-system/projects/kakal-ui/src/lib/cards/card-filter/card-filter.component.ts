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
  @Input() disabled: boolean = false;


  @Input() chosen: boolean;

  @Output() emitCard: EventEmitter<CardFilter> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.disabled);

  }

  onCardClick(): void {
    console.log('jhjhj');

    this.emitCard.emit(this.card);
  }
}
