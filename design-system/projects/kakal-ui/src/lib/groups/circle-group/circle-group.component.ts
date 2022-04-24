import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kkl-circle-group',
  templateUrl: './circle-group.component.html',
  styleUrls: ['./circle-group.component.scss']
})
export class CircleGroupComponent implements OnInit {

  @Input() steps! : any[]

  constructor() { }

  ngOnInit(): void {
  }

}
