import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Classes } from 'src/app/utilities/directives/classes.directive';
import { Palette } from 'src/styles/theme';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent implements OnInit {

  @Input() color: Palette;
  @Input() size: number;
  @Input() bold: number;


  @Input() button: boolean;

  @Input() classes: Classes;
  @Input() $active: Observable<boolean>;
  @Input() activeClasses: Classes;

  private unsubscribe: Subscription;
  public change: EventEmitter<Classes> = new EventEmitter();


  constructor() { }
  ngOnInit(): void {
    this.seFontSize();
    this.setFontWeight();
    this.setClasses();
    this.subscribeToActive();
  }

  ngOnDestroy(): void {
    if (this.unsubscribe) {
      this.unsubscribe.unsubscribe();
    }
  }

  private seFontSize() {
    this.size = this.size || 14;
  }

  private setFontWeight() {
    this.bold = this.bold || 500;
  }

  private setClasses() {
    this.classes = this.classes || {
      fontSize: this.size,
      fontWeight: this.bold,
      color: this.color || 'text',
      cursor : this.button ? 'pointer' : 'initial'
    };
  }

  private subscribeToActive() {
    if (this.$active) {
      this.unsubscribe = this.$active.subscribe((active) => {
        active
          ? this.change.emit(this.activeClasses)
          : this.change.emit({
              fontWeight: 500,
              color: 'text',
            });
      });
    }
  }
}
