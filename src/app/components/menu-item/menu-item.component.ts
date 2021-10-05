import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItemModel } from './menu-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() public link: MenuItemModel;

  public active$: Observable<boolean>;
  private isActive: boolean;

  @Output() click: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.active$ = this.link.getActiveObs();
  }

  public onLinkClick() {
    this.click.emit();
  }

  private subscribeToActive() {
    this.active$.subscribe((active: boolean) => {
      this.isActive = active;
    });
  }
}
