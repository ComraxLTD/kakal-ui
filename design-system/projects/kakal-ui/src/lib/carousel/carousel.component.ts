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

  constructor(private injector: Injector) { }

  public createDynamicComponent(index: number) {
    const componentRef = this.container.createComponent(this.component, { injector: this.injector });
    if (this.singleProp)
      componentRef.instance[this.singleProp] = this.data[index];
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
    this.indexs = this.indexs.map(val => {
      if (val == 0) return this.data.length - 1;
      else return val - 1;
    });
    this.clearNbuild();
  }

  onNext() {
    this.indexs = this.indexs.map(val => {
      if (val == this.data.length - 1) return 0;
      else return val + 1;
    });
    this.clearNbuild();
  }

  clearNbuild() {
    this.clearDynamicComponent();
    this.createComponents();
  }

  ngOnInit(): void {
    this.indexs = [...Array(this.displayNum).keys()];
    this.createComponents();
  }

}

