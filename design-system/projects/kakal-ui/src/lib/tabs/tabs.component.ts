import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'kkl-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() data: string[];
  @Input() templates: { [key: string]: TemplateRef<any> };
  @Input() backgroundColor: string;

  constructor() { }
  ngOnInit(): void {
  }

}
