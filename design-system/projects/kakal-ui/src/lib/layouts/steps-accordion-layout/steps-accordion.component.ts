import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { Step } from '../../vertical-steps/step/step.model';
import { Panel } from '../accordion-layout/accordion-types';
import { StepSelectEvent } from '../../vertical-steps/vertical-steps.component';
import { NavbarBottomService } from '../../navbar-bottom/navbar-bottom.service';
import { RouterService } from '../../../services/route.service';
import { Subject, takeUntil } from 'rxjs';

export interface SelectionChangedEvent {
  source: Step[];
  event: StepSelectEvent;
}
@Component({
  selector: 'kkl-steps-accordion-layout',
  templateUrl: './steps-accordion.component.html',
  styleUrls: ['./steps-accordion.component.scss'],
})
export class StepsAccordionComponent implements OnInit {
  destroySubject$: Subject<void> = new Subject();

  // ** Panels instance array for accordion UI **
  @Input() panels: Panel[];

  // ** Step array for steps UI **
  @Input() steps: Step[];

  // ** Template map for panel and step content **
  @Input() templates: { [key: string]: TemplateRef<any> };

  // optional

  @Input() isLinear?: boolean = false;

  // ** an interface for ui **
  @Input() buttonLabel: string;

  @Input() manuel: boolean = false;

  // ** for accordion checked **
  currentStep: StepSelectEvent;

  @Input() completed: boolean = false;

  @Input() selectedIndex: number = 0;

  @Output() stepChanged: EventEmitter<StepSelectEvent> = new EventEmitter();
  @Output() actionClicked: EventEmitter<void> = new EventEmitter();
  @Output() save: EventEmitter<void> = new EventEmitter();

  constructor(
    private navbarBottomService: NavbarBottomService,
    private routerService: RouterService
  ) {}

  ngOnInit(): void {
    if(!this.manuel) {
      this.navbarBottomService.setShowNextMiddle({ show: true, next: true });
      this.navbarBottomService.setAutoBack(false);
      this.navbarBottomService.setDisableNext(true);
      this.navbarBottomService
        .listenToBack()
        .pipe(takeUntil(this.destroySubject$))
        .subscribe((a) => {
          if (this.completed) {
            this.completed = false;
            this.navbarBottomService.setShowNextMiddle({
              show:true,next:false
            })
            this.navbarBottomService.setShowSave(false)
            this.selectedIndex = this.steps.length - 1;
            this.navbarBottomService.setFormGroup(
              this.steps[this.selectedIndex].control
            );
          } else {
            if (this.currentStep && this.currentStep.selectedIndex) {
              this.selectedIndex = this.currentStep.selectedIndex-1;
              this.navbarBottomService.setFormGroup(
                this.steps[this.selectedIndex].control
              );
              setTimeout(() => {
                if (this.currentStep.last) {
                  this.navbarBottomService.setShowNextMiddle({
                    show: true,
                    next: false,
                  });
                } else {
                  this.navbarBottomService.setShowNextMiddle({
                    show: true,
                    next: true,
                  });
                }
              }, 100);
            } else {
              this.routerService.goBack();
            }
          }
        });
      this.navbarBottomService
        .listenToNextMiddle()
        .pipe(takeUntil(this.destroySubject$))
        .subscribe((a) => {
          if (this.currentStep?.selectedIndex === this.steps.length - 1) {
            this.completed = true;
            this.navbarBottomService.setDisableNext(false);
            this.navbarBottomService.setShowSave(true);
            this.save.emit();
            this.navbarBottomService.setShowNextMiddle({
              show: false,
              next: false,
            });
          } else {
            if (this.currentStep) {
              this.selectedIndex = this.currentStep.selectedIndex + 1;
            } else {
              this.selectedIndex = this.selectedIndex + 1;
            }
            this.navbarBottomService.setFormGroup(
              this.steps[this.selectedIndex].control
            );
          }
        });
      }
  }

  ngOnDestroy() {
    if(!this.manuel) {
      this.navbarBottomService.setAutoBack(true);
      this.navbarBottomService.setFormGroup(null);
      this.navbarBottomService.setShowNextMiddle({ show: false, next: true });
      this.navbarBottomService.setDisableNext(false);
    }
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

  onStepChanged(event: StepSelectEvent) {
    this.currentStep = event;
    if(!this.manuel) {
      if (this.currentStep.last) {
        this.navbarBottomService.setShowNextMiddle({ show: true, next: false });
      } else {
        this.navbarBottomService.setShowNextMiddle({ show: true, next: true });
      }
      this.navbarBottomService.setFormGroup(
        this.steps[this.currentStep.selectedIndex].control
      );
    }
    this.stepChanged.emit(event);
  }

  onClick() {
    this.actionClicked.emit();
  }
}
