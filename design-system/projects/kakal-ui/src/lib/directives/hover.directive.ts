import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Directive, ElementRef, HostListener, Input, TemplateRef } from '@angular/core';
import { KKLHoverComponent } from '../kkl-hover/kkl-hover.component';

@Directive({
    selector: '[kkl-hover]',
})
export class KKLHoverDirective {
    private overlayRef: OverlayRef;

    @Input() text: string;
    @Input() template: TemplateRef<any>;
    @Input() hoverColor: 'white' | 'black' = 'white';

    @HostListener('mouseover') onMouseOver() {
        console.log('over');
        const hoverRef: ComponentRef<KKLHoverComponent>
            = this.overlayRef.attach(new ComponentPortal(KKLHoverComponent));
        if (this.hoverColor) hoverRef.instance.hoverColor = this.hoverColor;
        if (this.text) hoverRef.instance.text = this.text;
        if (this.template) hoverRef.instance.template = this.template;
    }

    @HostListener('mouseout') onMouseOut() {
        console.log('out');
        this.overlayRef.detach();
    }
    constructor(private overlay: Overlay,
        private overlayPositionBuilder: OverlayPositionBuilder,
        private elementRef: ElementRef) {
    }

    ngOnInit(): void {
        const positionStrategy = this.overlayPositionBuilder
            .flexibleConnectedTo(this.elementRef)
            .withPositions([{
                originX: 'center',
                originY: 'top',
                overlayX: 'center',
                overlayY: 'bottom',
                offsetY: -8,
            }]);

        this.overlayRef = this.overlay.create({ positionStrategy });
    }

}
