import { Component, OnInit, Inject } from '@angular/core';
import { NavbarBottomService } from './navbar-bottom.service';
import { ROOT_PREFIX } from '../../constants/root-prefix';
import { RouterService } from '../../services/route.service';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, of, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'kkl-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.scss'],
})
export class NavbarBottomComponent implements OnInit {
  destroySubject$: Subject<void> = new Subject();

  showNext$: Observable<boolean>;
  showSave$: Observable<boolean>;
  showBack$: Observable<boolean>;
  showNextMiddle$: Observable<{ show: boolean; next: boolean }>;

  disableNext$: Observable<boolean>;

  autoBack: boolean = true;

  formGroup: FormGroup = new FormGroup({});

  bottomIcon: string = 'bottom_tree_';

  // @Output() previous = new EventEmitter<void>();
  // @Output() next = new EventEmitter<void>();
  // @Output() nextStep = new EventEmitter<StepsSelectionEvent>();
  // @Output() save = new EventEmitter<void>();

  constructor(
    private routerService: RouterService,
    private navbarBottomService: NavbarBottomService,
    @Inject(ROOT_PREFIX) private rootPrefix
  ) {}

  ngOnInit(): void {
    this.bottomIcon = this.setBottomIcon();

    this.showNext$ = this.navbarBottomService.getShowNext();
    this.showSave$ = this.navbarBottomService.getShowSave();
    this.showBack$ = this.navbarBottomService.getShowBack();
    this.showNextMiddle$ = this.navbarBottomService.getShowNextMiddle();
    this.disableNext$ = this.navbarBottomService.getDisableNext();

    this.navbarBottomService
      .getFormGroup()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((b) => {
        if (b) {
          this.formGroup = b;
        } else {
          this.formGroup = new FormGroup({});
        }
      });
    this.navbarBottomService
      .getAutoBack()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((a) => {
        this.autoBack = a;
      });
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
