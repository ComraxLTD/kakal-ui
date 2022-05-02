import { Component, Input, OnInit } from '@angular/core';
export interface CardInfo {
  key?: string;
  label?: string;
  subLabel?: string;
  svgIcon?: string;
  value?: any;
}

@Component({
  selector: 'kkl-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit {

  @Input() card: CardInfo

  constructor() {}

  ngOnInit(): void {}
}
