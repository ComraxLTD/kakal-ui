import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ExpandPanelModel } from "./expand-panel.model"

@Component({
  selector: 'kkl-expand-panel',
  templateUrl: './expand-panel.component.html',
  styleUrls: ['./expand-panel.component.scss']
})
export class ExpandPanelComponent implements OnInit {

  @Input() checkMobile: Boolean;
  @Input() tabContent: TemplateRef<any>;
  @Input() tabs: ExpandPanelModel[];

  openAll: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.tabs[0].isOpen = true
  }

  openContainer(id: ExpandPanelModel["id"]): void {
    this.tabs.forEach(tab => {if(tab.id === id) tab.isOpen = !tab.isOpen})
    this.checkAllOpen()
  }

  toggleOpenAll(bol: boolean): void {
    this.tabs.forEach(tab => tab.isOpen = bol)
    this.openAll = bol
  }

  checkAllOpen(): void {
    let isAllOpen: boolean = true
    this.tabs.forEach(tab => {if (!tab.isOpen) isAllOpen = false})
    this.openAll = isAllOpen
  }
}
