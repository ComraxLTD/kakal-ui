import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kkl-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.scss']
})
export class CardAddComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() icon: string = "add";

  constructor() { }

  ngOnInit(): void {
    
  }

}
