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

import { KKLButtonDirective } from './directives/button.directive';
import { KKLStrokedButtonDirective } from './directives/stroked-button.directive';
import { KKLDirectivesModule } from '../directives/directives.module';
import { KKLActionButtonDirective } from './directives/action-button.directive';
import { KKLFormButtonDirective } from './directives/form-button.directive';
import { ActionButtonComponent } from './icon-button/icon-button.component';

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
    AddButtonComponent,
    StrokeButtonComponent,
    KKLButtonDirective,
    KKLStrokedButtonDirective,
    KKLFormButtonDirective,
    KKLActionButtonDirective,
    ActionButtonComponent,
  ],
  exports: [
    MatButtonModule,
    ButtonComponent,
    AddButtonComponent,
    StrokeButtonComponent,
    ActionButtonComponent,
    KKLButtonDirective,
    KKLStrokedButtonDirective,
    KKLFormButtonDirective,
    KKLActionButtonDirective,
  ],
})
export class KKLButtonModule {}
