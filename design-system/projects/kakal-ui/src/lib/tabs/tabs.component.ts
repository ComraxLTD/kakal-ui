import { Component, Input, OnInit, TemplateRef } from '@angular/core';

export interface Tab {
  key: string;
  label: string;
}

@Component({
  selector: 'kkl-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Input() tabs: Tab[];
  @Input() templates: { [key: string]: TemplateRef<any> };
  @Input() backgroundColor: string;

  @Input() direction: 'vertical' | 'horizontal' = 'horizontal';

  constructor() {}

  ngOnInit(): void {}
}
