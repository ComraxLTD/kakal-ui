import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kkl-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
})
export class CardUserComponent implements OnInit {
  public userInfo = {
    imgSrc: 'assets/images/userImage.jpg',
    name: '',
  };

  public action: string = '';

  constructor() {}

  ngOnInit(): void {
  }
}
