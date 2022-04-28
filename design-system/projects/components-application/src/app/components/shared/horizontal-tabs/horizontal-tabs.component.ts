import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-horizontal-tabs',
  templateUrl: './horizontal-tabs.component.html',
  styleUrls: ['./horizontal-tabs.component.scss'],
})
export class HorizontalTabsComponent implements OnInit {
  // component headline
  @Input() headline!: string;
  // buttons template 
  @Input() buttonTemplate!:TemplateRef<any>
  // tabs templates
  @Input() tabTemplates!: { [key: string]: TemplateRef<any> };
  //tab headlines
  @Input() tabHeadlines!: { label: string; value: string }[];

  // --------------------------------------------------------
  // tabheadline value should be the same as template string
  // --------------------------------------------------------


  @Output() defaultButtonClicked:EventEmitter<void>=new EventEmitter()

  constructor() {}

  ngOnInit(): void {
    console.log(this.tabTemplates);
    
  }

  onDefaultButtonClicked(){
    this.defaultButtonClicked.emit()
  }
}
