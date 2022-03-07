import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BreadCrumbsModel } from './bread-crumbes.model';

@Component({
  selector: 'app-bread-crumbes',
  templateUrl: './bread-crumbes.component.html',
  styleUrls: ['./bread-crumbes.component.scss'],
})
export class BreadCrumbesComponent implements OnInit {
  @Input() breadCrumbes$!: Observable<BreadCrumbsModel[]>;
  @Output() emitBreadCrumb: EventEmitter<BreadCrumbsModel> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.breadCrumbes$ = of([
      { route: 'first', value: 'התקשרויות' },
      { route: 'second', value: 'דרגה שניה' },
      { route: 'thired', value: 'דרגה שלישית' },
      { route: 'forth', value: 'דרגה רביעית' },
    ]);
  }

  breadCrumbClicked(breadCrumb: BreadCrumbsModel): void {
    this.emitBreadCrumb.emit(breadCrumb);
    console.log(breadCrumb);
    
  }
}
