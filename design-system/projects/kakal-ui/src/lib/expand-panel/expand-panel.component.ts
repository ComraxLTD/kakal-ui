import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonModel } from '../../public-api';

@Component({
  selector: 'kkl-expand-panel',
  templateUrl: './expand-panel.component.html',
  styleUrls: ['./expand-panel.component.scss'],
})
export class ExpandPanelComponent implements OnInit {
  // prop for custom class

  @Input() variant: string;
  @Input() hideToggle: boolean = true;
  @Input() showHeader: boolean;
  @Input() disabled: boolean;
  @Input() expanded: boolean;
  @Input() panelActions: ButtonModel[];

  panelOpenState = false;

  @Output() closed: EventEmitter<void> = new EventEmitter();
  @Output() opened: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.variant = this.variant || '';
    this.expanded = this.expanded || false;
    this.hideToggle = this.hideToggle || false;
    this.showHeader = this.showHeader || false;
  }

  public onPanelClosed() {
    this.panelOpenState = false;
    this.closed.emit();
  }

  public onPanelOpen() {
    this.panelOpenState = true;
    this.opened.emit();
  }
}
