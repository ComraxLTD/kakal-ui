import { Injectable, Injector, TemplateRef, ViewContainerRef } from "@angular/core";
import { Subscription } from "rxjs";
import { OpenMotionsComponent } from './open-motions.component';

@Injectable({
    providedIn: 'root'
})

export class OpenMotionService {

  private subscription: Subscription;
    constructor(private injector: Injector) { }

    public createDynamicSideNav(container: ViewContainerRef, title: string, template: TemplateRef<any>) {
        const componentRef = container.createComponent<OpenMotionsComponent>(OpenMotionsComponent, { injector: this.injector });
        componentRef.instance.title = title;
        componentRef.instance.content = template;

        this.subscription = componentRef.instance.closeEvent.subscribe((_) => {
            this.clearDynamicSideNav(container)
            componentRef.instance.closeEvent.unsubscribe();
        });
    }

    private clearDynamicSideNav(container: ViewContainerRef): void {
        container.clear();
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

}
