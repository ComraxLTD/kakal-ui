import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandsRoutingModule } from './lands-routing.module';
import { LandsLobbyComponent } from './lobby/lobby.component';
import { KakalUiModule, MODULE_PREFIX } from '../../../../kakal-ui/src/public-api';

@NgModule({
  declarations: [LandsLobbyComponent],
  imports: [CommonModule, LandsRoutingModule, KakalUiModule],
  providers: [{ provide: MODULE_PREFIX, useValue: 'lands' }],
})
export class LandsModule {}
