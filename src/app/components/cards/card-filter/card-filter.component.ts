import { Component, Input, OnInit, EventEmitter,Output, } from '@angular/core';
import { Observable } from 'rxjs';
import { Classes } from 'src/app/utilities/directives/classes.directive';

import { FilterModel } from './card-filter.model';

@Component({
  selector: 'app-card-filter',
  templateUrl: './card-filter.component.html',
  styleUrls: ['./card-filter.component.scss']
})
export class CardFilterComponent implements OnInit {
  @Input() filter!:FilterModel

  public active$:Observable<boolean>




  constructor() { }

  ngOnInit(): void {
    if (this.filter) {
      console.log(this.filter);
      console.log(this.filter.getActiveObs);
      
      // this.active$ = this.filter.getActiveObs();
    }
  }

}
