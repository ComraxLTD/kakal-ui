import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {


  public userInfo={
    imgSrc:"assets/images/userImage.jpg",
    name:"יוסי יוספוב"
  }

  public action : string = 'החלף משתמש'

  constructor() { }

  ngOnInit(): void {
  }

}
