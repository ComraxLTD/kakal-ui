import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent implements OnInit {


  @Input() color: string;
  @Input() size: number;
  @Input() bold: number;

  @Input() classes: {
    color: string;
    fontSize: number;
    fontWeight: number;
  };

  constructor() { }

  ngOnInit(): void {
    this.setColor();
    this.seFontSize();
    this.setFontWeight();
    this.setClasses()
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

  private setClasses() {
    this.classes = this.classes ||
    {
      fontSize:this.size,
      fontWeight: this.bold,
      color: this.color,
    }
  }
}
