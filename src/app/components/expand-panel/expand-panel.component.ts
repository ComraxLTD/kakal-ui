import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-expand-panel',
  templateUrl: './expand-panel.component.html',
  styleUrls: ['./expand-panel.component.scss']
})
export class ExpandPanelComponent implements OnInit {

  public panelOpenState = false;

  @Input() header: string;
  @Input() description: string;
  @Input() content: string;
  @Input() actions: boolean;

  @Input() hideToggle: boolean = false;
  @Input() flat: boolean = true;

  @Output() opened : EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  public onOpened() {
    this.opened.emit(this.panelOpenState)
  }

}
