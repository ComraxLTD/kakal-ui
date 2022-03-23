import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FilterCardModel} from './filter-card.model'
@Component({
  selector: 'kkl-filter-card',
  templateUrl: './filter-card.component.html',
  styleUrls: ['./filter-card.component.scss']
})
export class FilterCardComponent implements OnInit {
 
  @Input() card!:FilterCardModel
  @Input() chosen:Boolean=false
  @Output() emitCard:EventEmitter<FilterCardModel>

  constructor() { }

  ngOnInit(): void {
  }

  onCardClick():void{
    this.emitCard.emit(this.card)
  }

}
