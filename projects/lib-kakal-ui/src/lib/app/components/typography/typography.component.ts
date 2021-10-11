import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Classes } from '../../utilities/directives/classes.directive';
import { Palette } from '../../../styles/theme';
import { TypographyService } from './typography.service';

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

  @Input() classes: Classes
  @Input() activeClasses: Classes;

  @Input() active$: Observable<boolean>;

  private unsubscribe: Subscription;

  public classes$: Observable<Classes>


  constructor(
    private typographyService: TypographyService
  ) { }

  ngOnInit(): void {
    this.seFontSize();
    this.setFontWeight();
    this.setClasses();
    this.classes$ = this.typographyService.getClasses()
    this.subscribeToActive();
  }

  ngOnDestroy(): void {
    if (this.unsubscribe) {
      this.unsubscribe.unsubscribe();
    }
  }

  private seFontSize() {
    this.size = this.size || 1.4;
  }

  private setFontWeight() {
    this.bold = this.bold || 500;
  }

  private setClasses() {
    this.classes = this.classes || {
      fontSize: this.size || 1.4,
      fontWeight: this.bold | 500,
      color: this.color || 'text',
      cursor: this.button ? 'pointer' : 'initial'
    };
    this.typographyService.setClasses(this.classes)
  }

  private subscribeToActive() {
    if (this.active$) {
      this.unsubscribe = this.active$.subscribe((active) => {
        active
          ? this.typographyService.updateClasses(this.activeClasses)
          : this.typographyService.updateClasses(this.classes)

      });
    }
  }
}
