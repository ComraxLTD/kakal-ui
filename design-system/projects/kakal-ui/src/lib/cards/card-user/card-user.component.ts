import { Component, OnInit } from '@angular/core';
import { DataListService } from 'src/app/small-contracts/services/datalist-service';

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

  constructor(private dataListService:DataListService) {}

  ngOnInit(): void {
this.dataListService.GetCurrentUser().subscribe((user:any)=>this.userInfo.name=user.userName);
  }
}
