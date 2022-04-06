import { Component, ComponentRef, Injector, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'kkl-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  // @Input()
  // component: ComponentRef<any>;
  @Input()
  data: any[];

  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;
  // @ViewChild('content', { static: true }) component: ComponentRef<any>;

  constructor(private injector: Injector) { }

  public createDynamicSideNav(container: ViewContainerRef) {
    // const componentRef = container.createComponent<this.component>(component, { injector: this.injector });
    // componentRef.instance.title = title;
    // componentRef.instance.content = template;

    // componentRef.instance.closeEvent.subscribe((_) => {
    //     this.clearDynamicSideNav(container)
    //     componentRef.instance.closeEvent.unsubscribe();
    // });
  }

  private clearDynamicSideNav(container: ViewContainerRef): void {
    container.clear();
  }
  ngOnInit(): void {
    // console.log(this.component);
    
    // this.container.createComponent<ComponentRef<any>>(this.component)
  }

}
