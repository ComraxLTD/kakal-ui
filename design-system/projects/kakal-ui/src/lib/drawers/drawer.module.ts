import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KKLTypographyModule } from '../typography/typography.module';
import { KKLIconModule } from '../icon/icon.module';
import { KKLButtonModule } from '../button/button.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLFormSelectModule } from '../../public-api';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { KKLPipesModule } from '../pipes/pipes.module';
import { MatDividerModule } from '@angular/material/divider';

import { DrawerDocumentItemComponent } from './drawer-document-item/drawer-document-item.component';
import { DrawerDocumentComponent } from './drawer-document/drawer-document.component';

@NgModule({
  declarations: [DrawerDocumentComponent, DrawerDocumentItemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatMenuModule,
    MatDividerModule,
    KKLTypographyModule,
    KKLFormSelectModule,
    KKLIconModule,
    KKLButtonModule,
    KKLPipesModule,
  ],
  exports: [DrawerDocumentComponent, DrawerDocumentItemComponent],
})
export class KKLDrawerModule {}
