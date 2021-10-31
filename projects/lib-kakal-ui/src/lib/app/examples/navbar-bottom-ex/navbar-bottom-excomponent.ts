import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-bottom-ex',
  templateUrl: './navbar-bottom-ex.component.html',
  styleUrls: ['./navbar-bottom-ex.component.scss'],
})
export class NavbarBottomExComponent {
  @Input() public hasNext: boolean;
  @Input() public hasSave: boolean;
  @Input() public custom: boolean;

  
}
