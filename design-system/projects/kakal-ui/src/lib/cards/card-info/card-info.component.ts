import { Component, Input, OnInit } from '@angular/core';
import { CardInfoModel } from './card-info.model';

@Component({
  selector: 'kkl-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  @Input() public card : CardInfoModel

  public tooltip : CardInfoComponent

  constructor() { }

  ngOnInit(): void {
  }

}
