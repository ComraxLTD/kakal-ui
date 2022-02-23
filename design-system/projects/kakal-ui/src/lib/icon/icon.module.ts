import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { IconComponent } from './icon.component';
import { DirectivesModule} from '../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    DirectivesModule
  ],
  declarations: [IconComponent],
  exports: [IconComponent]
})
export class KKLIconModule {
}