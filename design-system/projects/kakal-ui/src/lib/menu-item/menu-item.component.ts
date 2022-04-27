import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Palette } from '../../styles/theme';
import { MenuItemModel } from './menu-item.model';

@Component({
  selector: 'kkl-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() public item: MenuItemModel;
  @Input() public color: Palette;
  @Input() public weight: boolean;

  @Output() changeLink: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public onLinkClick() {
    this.changeLink.emit();
  }
}