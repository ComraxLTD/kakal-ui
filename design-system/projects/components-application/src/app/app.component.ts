import { Component } from '@angular/core';
import { RouterService } from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'education';

  constructor(
    private routerService : RouterService
  ){}

  onLogoClicked() {
    this.routerService.navigate('/')
  }
}
