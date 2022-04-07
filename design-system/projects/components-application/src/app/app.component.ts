import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() { }

  public card = {
    label: 'שם הכרטיס', // label inside card
    value: 2, // number inside card
    svgIcon: 'search', // svg key
  };

  ngOnInit(): void { 
  }

}
