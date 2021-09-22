import { Directive, HostBinding, Input, OnInit } from '@angular/core';
import { theme } from 'src/styles/theme';

@Directive({
  selector: '[appClasses]'
})
export class ClassesDirective implements OnInit {

  private theme = theme;
  private colors = this.theme.colors;

  @Input() public classes: {
    color: string;
    cursor: string;
    fontSize: number;
    fontWeight: number;
    underline: boolean;
  } = {
      color: this.colors.text,
      cursor: 'initial',
      fontSize: 14,
      fontWeight: 500,
      underline: false,
    }

  @HostBinding('style.color') private color: string;
  @HostBinding('style.font-weight') private fontWeight: number;
  @HostBinding('style.font-size') private fontSize: string;
  @HostBinding('style.cursor') private cursor: string;
  @HostBinding('style.background-color') private backgroundColor: string;
  @HostBinding('style.border-bottom') private borderBottom: string;


  constructor() { }

  ngOnInit(): void {
    this.cursor = this.classes['cursor'] || 'initial'
    this.fontWeight = this.classes.fontWeight
    this.fontSize = `${this.classes['fontSize']}px` || '14px'
    this.color = this.colors[this.classes.color]

    if (this.classes.underline) {
      this.borderBottom = `3px solid ${this.colors.accent}`
    }
  }

}
