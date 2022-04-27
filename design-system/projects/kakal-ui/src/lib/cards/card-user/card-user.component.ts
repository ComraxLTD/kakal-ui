import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface CardUserModel {
  name: string;
  imgUrl: string;
}

@Component({
  selector: 'kkl-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
})
export class CardUserComponent implements OnInit {

  @Input() public user : CardUserModel;

  public action: string = 'החלף משתמש';

  @Output() changeUser: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public onChangeUser() {
    this.changeUser.emit();
  }
}
