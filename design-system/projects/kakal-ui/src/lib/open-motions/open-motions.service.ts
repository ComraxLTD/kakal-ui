import { Injectable, Injector, TemplateRef, ViewContainerRef } from "@angular/core";
import { OpenMotionsComponent } from './open-motions.component';

@Injectable({
    providedIn: 'root'
})

export class OpenMotionService {

    constructor(private injector: Injector) { }

    public createDynamicSideNav(container: ViewContainerRef, title: string, template: TemplateRef<any>) {
        const componentRef = container.createComponent<OpenMotionsComponent>(OpenMotionsComponent, { injector: this.injector });
        componentRef.instance.title = title;
        componentRef.instance.content = template;

        componentRef.instance.closeEvent.subscribe((_) => {
            this.clearDynamicSideNav(container)
            componentRef.instance.closeEvent.unsubscribe();
        });
    }

    private clearDynamicSideNav(container: ViewContainerRef): void {
        container.clear();
    }

}