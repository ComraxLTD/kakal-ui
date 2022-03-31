import { NgModule } from '@angular/core';
import { KKLIconModule } from '../../icon/icon.module';
import { KKLTypographyModule } from '../../typography/typography.module';
import { CardLobbyComponent } from './card-lobby.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, KKLIconModule, KKLTypographyModule, FlexLayoutModule],
  declarations: [CardLobbyComponent],
  exports: [CardLobbyComponent],
})
export class KKLCardLobbyModule {}
