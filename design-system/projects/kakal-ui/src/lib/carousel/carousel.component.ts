import { Component, ComponentRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kkl-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input()
  component: ComponentRef<any>;
  @Input()
  data: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
