import { Component, Input, OnInit } from '@angular/core';
import { InfoCardModel } from './info-card.model';

@Component({
  selector: 'kkl-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input() card!:InfoCardModel;

  constructor() { }

  ngOnInit(): void {
    this.card=new InfoCardModel({icon:'search',headline:'first headline',subHeadline:'text long text liong tasd faser'})
    console.log(this.card);
    
  }

}
