import { Component, Input, OnInit } from '@angular/core';
interface MarketersProvidersTemplate {
  label?: string;
  svgIcon?: string;
}
@Component({
  selector: 'app-marketers-providers-template',
  templateUrl: './marketers-providers-template.component.html',
  styleUrls: ['./marketers-providers-template.component.scss'],
})
export class MarketersProvidersTemplateComponent implements OnInit {
  marketersProvidersArray: MarketersProvidersTemplate[]=[];
  marketersProvidersHeadline: MarketersProvidersTemplate={};
  @Input() set data(data: any) {
    console.log(data);
    if (data) {
      console.log(data.headline);
      
      this.marketersProvidersArray = data.content;
      this.marketersProvidersHeadline = data.headline;
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
