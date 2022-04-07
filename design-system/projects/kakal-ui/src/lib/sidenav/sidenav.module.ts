import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MaterialModule } from '../angular-material/material.module';
import { KKLIconModule } from '../icon/icon.module';
import { KKLDirectivesModule } from '../directives/directives.module';
@NgModule({
  imports: [CommonModule, MaterialModule, KKLIconModule, KKLDirectivesModule],
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
})
export class KKLSidenavModule {}
