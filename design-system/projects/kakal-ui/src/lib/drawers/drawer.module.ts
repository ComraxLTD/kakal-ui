import { NgModule } from '@angular/core';
import { DrawerDocumentModule } from './drawer-document/drawer-document.module';

@NgModule({
  imports: [DrawerDocumentModule],
  exports: [DrawerDocumentModule],
})
export class KKLDrawerModule {}
