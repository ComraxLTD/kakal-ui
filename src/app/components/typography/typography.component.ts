import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent implements OnInit {
  @Input() public color: string;
  @Input() public size: string = '';
  @Input() public bold: number;
  @Input() public variant: string;

  constructor() {}

  ngOnInit(): void {
    this.setColor();
    this.seFontSize();
    this.setFontWeight();
  }

  private setColor() {
    this.color = this.color || 'text';
  }

  private seFontSize() {
    if (this.size) {
      this.variant = '';
    } else {
      this.variant = this.variant || 'mat-title';
    }
  }

  private setFontWeight() {
    this.bold = this.bold || 500;
  }
}
