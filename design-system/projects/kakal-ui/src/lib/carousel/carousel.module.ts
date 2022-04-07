import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { KKLIconModule } from '../icon/icon.module';

@NgModule({
    imports: [CommonModule, FlexLayoutModule,KKLIconModule],
    declarations: [CarouselComponent],
    exports: [CarouselComponent]
})

export class CarouselModule { }