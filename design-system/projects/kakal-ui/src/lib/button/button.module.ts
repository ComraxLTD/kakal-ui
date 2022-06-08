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
import { ActionButtonComponent } from './components/action-button/action-button.component';

import { AddButtonComponent } from './components/add-button/add-button.component';
import { SortButtonComponent } from './components/sort-button/sort-button.component';

import { KKLButtonDirective } from './directives/button.directive';
import { KKLDirectivesModule } from '../directives/directives.module';
import { KKLFormButtonDirective } from './directives/form-button.directive';
import { KKLStrokedButtonDirective } from './components/stroke-button/stroked-button.directive';
import { KKLActionButtonDirective } from './components/action-button/action-button.directive';

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
    SortButtonComponent,
    StrokeButtonComponent,
    KKLButtonDirective,
    KKLStrokedButtonDirective,
    KKLFormButtonDirective,
    KKLActionButtonDirective,
    ActionButtonComponent,
  ],
  exports: [
    MatButtonModule,
    SortButtonComponent,
    ButtonComponent,
    AddButtonComponent,
    StrokeButtonComponent,
    ActionButtonComponent,
    KKLActionButtonDirective,
    KKLButtonDirective,
    KKLStrokedButtonDirective,
    KKLFormButtonDirective,
  ],
})
export class KKLButtonModule {}
