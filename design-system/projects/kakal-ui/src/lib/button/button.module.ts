import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';

import { KKLIconModule } from '../icon/icon.module';
import { KKLTypographyModule } from '../typography/typography.module';

import { ButtonComponent } from './components/button/button.component';
import { StrokeButtonComponent } from './components/stroke-button/stroke-button.component';
import { AddButtonComponent } from './components/add-button/add-button.component';

import { KKLStrokedButtonDirective } from './directives/stroked-button.directive';
import { KKLDirectivesModule } from '../directives/directives.module';
import { KKLActionButtonDirective } from './directives/action-button.directive';
import { KKLFormButtonDirective } from './directives/form-button.directive';

@NgModule({
  imports: [
    CommonModule,

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
    StrokeButtonComponent,
    KKLStrokedButtonDirective,
    KKLFormButtonDirective,
    KKLActionButtonDirective,
    AddButtonComponent,
  ],
  exports: [
    MatButtonModule,
    ButtonComponent,
    StrokeButtonComponent,
    KKLStrokedButtonDirective,
    KKLFormButtonDirective,
    KKLActionButtonDirective,
    AddButtonComponent,
  ],
})
export class KKLButtonModule {}
