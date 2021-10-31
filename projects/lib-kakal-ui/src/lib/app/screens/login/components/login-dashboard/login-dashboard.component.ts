import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Login } from '../../login.service';


@Component({
  selector: 'kkl-login-dashboard',
  templateUrl: './login-dashboard.component.html',
  styleUrls: ['./login-dashboard.component.scss']
})
export class LoginDashboardComponent implements OnInit {


  @Output() login : EventEmitter<Login> = new EventEmitter()

  constructor( ) {}

  ngOnInit(): void {
  }

  public onSubmit(data : Login) {
    this.login.emit(data)
  }

}
