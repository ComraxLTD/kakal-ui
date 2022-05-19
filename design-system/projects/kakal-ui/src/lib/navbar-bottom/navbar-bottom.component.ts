import { Component, OnInit, Inject, Input, ContentChild } from '@angular/core';
import { NavbarBottomService } from './navbar-bottom.service';
import { RouterService } from '../../services/route.service';
import { FormGroup } from '@angular/forms';
import { ROOT_PREFIX } from '../../constants/root-prefix';
import { Subject, takeUntil, Observable } from 'rxjs';
import { IconService } from '../icon/icons.service';
import { LayoutComponent } from '../layouts/layout/layout.component';
import { Portion } from '../layouts/layout/layout.service';
import { FooterButtonDirective } from './navbar-bottom.directive';

@Component({
  selector: 'kkl-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.scss'],
})
export class NavbarBottomComponent implements OnInit {
  @ContentChild(FooterButtonDirective)
  footerButtonDirective: FooterButtonDirective | undefined;

  @Input() endDrawer;

  destroySubject$: Subject<void> = new Subject();

  showNext$: Observable<boolean>;
  showSave$: Observable<boolean>;
  showBack$: Observable<boolean>;
  showNextMiddle$: Observable<{ show: boolean; next: boolean }>;
  nextLabel$: Observable<string>;

  disableNext$: Observable<boolean>;

  autoBack: boolean = true;

  formGroup: FormGroup = new FormGroup({});

  nextLabel: string;
  saveLabel: string;

  bottomIcon: string = 'bottom_tree_';

  portion$: Observable<Portion>;

  constructor(
    private layoutComponent: LayoutComponent,
    private routerService: RouterService,
    private navbarBottomService: NavbarBottomService,
    private iconService: IconService,
    @Inject(ROOT_PREFIX) private rootPrefix
  ) {}

  ngOnInit(): void {
    this.bottomIcon = this.setBottomIcon();
    this.iconService.setIcon(this.bottomIcon);

    this.showNext$ = this.navbarBottomService.listenToShowNext();
    this.showSave$ = this.navbarBottomService.listenToShowSave();
    this.showBack$ = this.navbarBottomService.listenToShowBack();
    this.showNextMiddle$ = this.navbarBottomService.listenToShowNextMiddle();
    this.disableNext$ = this.navbarBottomService.listenToDisableNext();
    this.nextLabel$ = this.navbarBottomService.listenNextLabel();

    this.navbarBottomService
      .listenToFormGroup()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((b: FormGroup) => {
        if (b) {
          this.formGroup = b;
        } else {
          this.formGroup = new FormGroup({});
        }
      });
    this.navbarBottomService
      .listenToAutoBack()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((a: boolean) => {
        this.autoBack = a;
      });

    this.navbarBottomService
      .listenNextLabel()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((a: string) => {
        this.nextLabel = a;
      });
    this.navbarBottomService
      .getTextSave()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((a: string) => {
        this.saveLabel = a;
      });

    this.portion$ = this.layoutComponent.portion$;
  }

  private setBottomIcon() {
    return this.bottomIcon + this.rootPrefix;
  }

  onSave(): void {
    this.navbarBottomService.setSave();
  }

  // Event emitter section
  onPrevious(): void {
    this.autoBack
      ? this.routerService.goBack()
      : this.navbarBottomService.setBack();
  }

  onNext(): void {
    this.navbarBottomService.setNext();
  }

  onNextMiddle(): void {
    this.navbarBottomService.setNextMiddle();
  }

  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }
}
