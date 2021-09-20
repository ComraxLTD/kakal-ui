import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent implements OnInit {

  @Input() color: string;
  @Input() size: number | string;
  @Input() bold: number | string;
  @Input() underline: string;
  @Input() classes: {
    color: string;
    underline: string;
  };

  constructor() { }

  ngOnInit(): void {
    this.setColor();
    this.seFontSize();
    this.setFontWeight();

    this.underline = this.underline || ''
  }

  private setColor() {
    this.color = this.color || 'text';
  }

  private seFontSize() {
    this.size = this.size || 14;

  }

  private setFontWeight() {
    this.bold = this.bold || 500;
  }
}
