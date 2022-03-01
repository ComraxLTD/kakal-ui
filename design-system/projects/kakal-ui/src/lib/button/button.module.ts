import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { KKLIconModule } from '../icon/icon.module';
import { KKLTypographyModule } from '../typography/typography.module';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatIconModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    KKLIconModule,
    KKLTypographyModule
  ],
  declarations: [ButtonComponent],
  exports: [ButtonComponent]
})
export class KKLButtonModule {
}