import { Component, Input, OnInit } from '@angular/core';
import { CardStepModel, StepperDirection } from '../../components/cards/card-step/card-step.model';
import { IconModel } from '../../components/icon/icon.model';
import { MenuModel } from '../../components/menu/menu.model';
import { MenuService } from '../../components/menu/menu.service';
import { NavbarService } from '../../components/navigation/navbar/navbar.service';
import { StepperService } from '../../components/stepper/stepper.service';

@Component({
  selector: 'kkl-layout-ex',
  templateUrl: './layout-ex.component.html',
  styleUrls: ['./layout-ex.component.scss']
})
export class LayoutExComponent implements OnInit {

  // NAVBAR DATA SECTION

  // uniqu gradient icon per project
  @Input() public openIcon: string;

  @Input() public logos: IconModel[];
  @Input() public showStatusPath: string[] = [];
  @Input() public prefix: string;
  @Input() public status: CardStepModel[];

  // WIZARD SECTION
  @Input() public steps: CardStepModel[];
  @Input() public direction: StepperDirection = 'column';
  @Input() public hideWizardPath: string[] = [];

  // MENU SECTION
  @Input() public menu: MenuModel[];

  constructor(
    private stepperService: StepperService,
    private menuService: MenuService,
    private navbarService: NavbarService,
  ) { }

  ngOnInit(): void {
    this.subscribeToModulePrefix();
    this.subscribeToRouter();
    this.setProps();

  }

  ngOnDestroy(): void {
    if (this.status) {
      this.navbarService.emitStatus(this.status);
    }
  }

  // SET PROPS METHOD
  private setProps() {

  }

  private subscribeToRouter() {
  }

  private subscribeToModulePrefix() {
  }

  private setSteps(modulePrefix: string) {
    this.steps = this.stepperService.setSteps(
      this.steps,
      'path',
      modulePrefix
    );
  }

  private setMenu(path: string) {
  }

  public onChangeStep(step: CardStepModel) {
  }

  public onChangePath(data: { link: string, path: string }) {
  }
}
