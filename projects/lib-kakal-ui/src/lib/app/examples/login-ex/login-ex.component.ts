import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../screens/login/login.service';

@Component({
  selector: 'app-login-ex',
  templateUrl: './login-ex.component.html',
  styleUrls: ['./login-ex.component.scss']
})
export class LoginExComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    
  }

  

}
