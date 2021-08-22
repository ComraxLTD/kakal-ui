import { Component, Input, OnInit } from '@angular/core';
import { NavigationCardModel } from 'src/app/utilities/models/nav-card-model';

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss'],
})
export class IconCardComponent implements OnInit {
  @Input() public item: NavigationCardModel = {};

  constructor() {}

  ngOnInit(): void {}

  public onCardClick(): void {}
}
