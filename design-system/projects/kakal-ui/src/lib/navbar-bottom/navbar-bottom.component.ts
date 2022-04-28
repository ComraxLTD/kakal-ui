import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  TemplateRef,
  Inject,
  ViewContainerRef,
} from '@angular/core';
import { NavbarBottomService } from './navbar-bottom.service';
import { CardStep } from '../cards/card-step/card-step.model';
import { StepsLayoutService } from '../layouts/steps-layout/steps-layout.service';
import { StepsSelectionEvent } from '../stepper/stepper.component';
import { ROOT_PREFIX } from '../../constants/root-prefix';
import { BehaviorSubject, combineLatest, iif, merge, Observable, of } from 'rxjs';
import { map, pluck, switchMap } from 'rxjs/operators';
import { RouterService } from '../../services/route.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'kkl-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.scss'],
})
export class NavbarBottomComponent implements OnInit {

  @Input() nextLabel: string;

  showNext$: Observable<boolean>;
  showSave$: Observable<boolean>;
  showBack$: Observable<boolean>;
  showNextMiddle$: Observable<{show: boolean, next: boolean}>;

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

    this.formGroup = this.navbarBottomService.getFormGroup();

    // this.navbarBottomService.getFormGroup().subscribe(b => {
    //   if(b) {
    //     this.formGroup = b;
    //   } else {
    //     this.formGroup = new FormGroup({});
    //   }
    // });

    this.navbarBottomService.getAutoBack().subscribe(a =>{
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

}
