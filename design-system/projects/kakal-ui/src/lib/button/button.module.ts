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
import { KKLStrokedButtonDirective } from './components/stroke-button/stroked-button.directive';

import { AddButtonComponent } from './components/add-button/add-button.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { KKLActionButtonDirective } from './components/action-button/action-button.directive';

import { KKLButtonDirective } from './directives/button.directive';
import { KKLDirectivesModule } from '../directives/directives.module';
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
