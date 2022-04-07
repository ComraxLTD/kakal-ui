import { Component, OnInit } from '@angular/core';
import { CardAddComponent } from '../../../kakal-ui/src/lib/cards/card-add/card-add.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() { }
  component = CardAddComponent;
  cards = [
    {title:'1',content:'test'},
    {title:'2',content:'test'},
    {title:'3',content:'test'},
    {title:'4',content:'test'},
    {title:'5',content:'test'},
    {title:'6',content:'test'},
    {title:'7',content:'test'},
    {title:'8',content:'test'},

  ]
  public card = {
    label: 'שם הכרטיס', // label inside card
    value: 2, // number inside card
    svgIcon: 'search', // svg key
  };

  ngOnInit(): void { 
  }

}
