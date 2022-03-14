import { NgModule } from '@angular/core';

import { DialogAlertComponent } from '../dialog-alert/dialog-alert.component';
import { DialogComponent } from './dialog.component';
import { CoreModule } from '../core-module/core.module';
import { KKLTypographyModule } from '../typography/typography.module';
import { KKLIconModule } from '../icon/icon.module';
import { CommonModule } from '@angular/common';
import { KKLDirectivesModule } from '../directives/directives.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogService } from './dialog.service';

@NgModule({
  declarations: [DialogAlertComponent, DialogComponent],
  imports: [
    CoreModule,
    CommonModule,
    MatDialogModule,

    KKLTypographyModule,
    KKLIconModule,
    KKLDirectivesModule,
  ],
  providers: [DialogService],
  exports: [DialogAlertComponent, DialogComponent],
})
export class KKLDialogModule {}
