import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  clicked(){
    console.log('clicked');

  }

  public onNavigate(url : string): void {
    window.open(url);
  }
}
