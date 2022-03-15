import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { KKLIconModule } from '../icon/icon.module';
import { KKLTypographyModule } from '../typography/typography.module';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ButtonComponent } from './components/button/button.component';
import { KKLStrokedButtonDirective } from './directives/stroked-button.directive';
import { CreateButtonComponent } from './components/create-button/create-button.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLDirectivesModule } from '../directives/directives.module';
import { KKLActionButtonDirective } from './directives/action-button.directive';
import { KKLFormButtonDirective } from './directives/form-button.directive';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    FlexLayoutModule,
    KKLIconModule,
    KKLTypographyModule,
    KKLDirectivesModule,
  ],
  declarations: [
    ButtonComponent,
    KKLStrokedButtonDirective,
    KKLFormButtonDirective,
    KKLActionButtonDirective,
    CreateButtonComponent,
  ],
  exports: [
    
    MatButtonModule,
    ButtonComponent,
    KKLStrokedButtonDirective,
    KKLFormButtonDirective,
    KKLActionButtonDirective,
    CreateButtonComponent,
  ],
})
export class KKLButtonModule {}
