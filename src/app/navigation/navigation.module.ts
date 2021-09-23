import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToNavComponent } from './components/to-nav/to-nav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ToNavComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports : [
    ToNavComponent,
    NavbarComponent
  ]
})
export class NavigationModule { }
