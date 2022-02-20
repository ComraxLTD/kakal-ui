import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../../styles/theme';
import { MenuItemModel } from './menu-item.model';

@Component({
  selector: 'kkl-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() public item: MenuItemModel;
  @Input() public color : Color
  @Input() public bold :boolean

  public active$: Observable<boolean>;

  @Output() changeLink: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.active$ = this.item.getActiveObs();
  }

  public onLinkClick() {
    this.changeLink.emit();
  }

}
