import { Component, OnInit } from '@angular/core';
import { ExpandPanelModel } from '../../../kakal-ui/src/lib/expand-panel/expand-panel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'components-application';
  constructor() { }

  ngOnInit(): void {
  }
}
