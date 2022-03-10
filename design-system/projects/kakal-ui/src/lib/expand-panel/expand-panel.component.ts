import { Component, OnInit, Input } from '@angular/core';
import { ExpandPanelModel } from "./expand-panel.model"

@Component({
  selector: 'kkl-expand-panel',
  templateUrl: './expand-panel.component.html',
  styleUrls: ['./expand-panel.component.scss']
})
export class ExpandPanelComponent implements OnInit {

  @Input() checkMobile: Boolean;
  @Input() public tabs: ExpandPanelModel[];

  public openAll: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.tabs[0].isOpen = true
  }

  openContainer(id: ExpandPanelModel["id"]) {
    this.tabs.forEach(tab => {
      if(tab.id === id) {
        tab.isOpen = !tab.isOpen
      }
    })
    this.checkAllOpen()
  }

  toggleOpenAll(bol: boolean) {
    this.tabs.forEach(tab => {
      tab.isOpen = bol
    })
    this.openAll = bol
  }

  checkAllOpen() {
    let isAllOpen: boolean = true
    this.tabs.forEach(tab => {
      if (!tab.isOpen) isAllOpen = false
    })
    this.openAll = isAllOpen
  }

}
