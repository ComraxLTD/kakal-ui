import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLCardLobbyModule } from '../cards/card-lobby/card-lobby.module';
import { KKLDirectivesModule } from '../directives/directives.module';
import { KKLTypographyModule } from '../typography/typography.module';

import { LobbyComponent } from './lobby.component';

@NgModule({
  imports: [
    KKLTypographyModule,
    FlexLayoutModule,
    CommonModule,
    KKLCardLobbyModule,
    KKLDirectivesModule,
  ],
  declarations: [LobbyComponent],
  exports: [LobbyComponent],
})
export class KKLLobbyModule {}
