import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kkl-accordion-layout',
  templateUrl: './accordion-layout.component.html',
  styleUrls: ['./accordion-layout.component.scss'],
})
export class AccordionLayoutComponent implements OnInit {
  @Input() buttonLabel: string;
  @Input() expanded: boolean;
  @Input() expandedAll: boolean;

  @Output() closed: EventEmitter<void> = new EventEmitter();
  @Output() opened: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.expanded = this.expanded || false;
  }

  public onPanelClosed() {
    this.closed.emit();
  }

  public onPanelOpen() {
    this.opened.emit();
  }
}
