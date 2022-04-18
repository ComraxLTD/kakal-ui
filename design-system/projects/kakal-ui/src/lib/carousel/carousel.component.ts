import { Component, Injector, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'kkl-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})

export class CarouselComponent implements OnInit {
  @Input() component: Type<any>;
  @Input() data: any[];
  @Input() singleProp: string;
  @Input() displayNum: number = 4;

  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  indexs: number[];

  previous: boolean = false;
  next: boolean = true;

  constructor(private injector: Injector) { }

  createDynamicComponent(index: number) {
    const componentRef = this.container.createComponent(this.component, { injector: this.injector });
    if (this.singleProp) componentRef.instance[this.singleProp] = this.data[index];
    else for (const prop in this.data[index]) componentRef.instance[prop] = this.data[index][prop];
  }

  private clearDynamicComponent(): void {
    this.container.clear();
  }

  createComponents() {
    this.indexs.forEach((val, index) => {
      this.createDynamicComponent(val);
    });
  }

  onPrevious() {
    if (!this.previous) return;
    this.indexs = this.indexs.map(val => val - 1);
    this.clearNbuild();
  }

  onNext() {
    if (!this.next) return;
    this.indexs = this.indexs.map(val => val + 1);
    this.clearNbuild();
  }

  clearNbuild() {
    this.previous = this.indexs[0] == 0 ? false : true;
    this.next = this.indexs[this.displayNum - 1] == this.data.length - 1 ? false : true;
    this.clearDynamicComponent();
    this.createComponents();
  }

  ngOnInit(): void {
    if(this.displayNum >= this.data.length) this.next = false;
    this.indexs = [...Array(Math.min(this.displayNum, this.data.length)).keys()];
    this.createComponents();
  }

}

