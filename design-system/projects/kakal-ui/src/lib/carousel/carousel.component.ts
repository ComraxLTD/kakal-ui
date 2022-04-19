import { Component, Input, OnInit, TemplateRef } from '@angular/core';
@Component({
  selector: 'kkl-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})

export class CarouselComponent implements OnInit {
  @Input() data: any[];
  @Input() displayNum: number = 4;
  @Input() template: TemplateRef<any>;

  start: number = 0;
  roundSize: number;
  previous: boolean = false;
  next: boolean = true;

  constructor() { }


  onPrevious() {
    if (!this.previous) return;
    this.start--;
    if(!this.start){
      this.previous = false;
    }
    this.next = true;
  }

  onNext() {
    if (!this.next) return;
    this.start++;
    if(this.start + this.roundSize == this.data.length){
      this.next = false;
    }
    this.previous = true;
  }

  ngOnInit(): void {
    if(this.displayNum >= this.data.length) this.next = false;
    this.roundSize = Math.min(this.displayNum, this.data.length);
  }

}

