import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kkl-expand-panel',
  templateUrl: './expand-panel.component.html',
  styleUrls: ['./expand-panel.component.scss'],
})
export class ExpandPanelComponent implements OnInit {
  // prop for custom class

  @Input() public variant: string;
  @Input() public hideToggle: boolean;
  @Input() public showHeader: boolean;
  @Input() public disabled: boolean;
  @Input() public expanded: boolean;

  public panelOpenState = false;

  @Output() closed: EventEmitter<void> = new EventEmitter();
  @Output() opened: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.variant = this.variant || '';
    console.log(this.variant)
    this.expanded = this.expanded || false;
    this.hideToggle = this.hideToggle || false;
    this.showHeader = this.showHeader || false;
  }

  public onPanelClosed() {
    this.panelOpenState = false
    this.closed.emit();
  }

  public onPanelOpen() {
    this.panelOpenState = true
    this.opened.emit();
  }
}
