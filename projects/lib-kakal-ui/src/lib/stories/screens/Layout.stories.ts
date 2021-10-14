import { NavbarService } from './../../app/components/navigation/navbar/navbar.service';
import { CardDashboardModel } from '../../app/components/cards/card-dashboard/card-dashboard.model';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';

import { SizeDirective } from '../../app/utilities/directives/size.directive';
import { IconComponent } from '../../app/components/icon/icon.component';
import { ClassesDirective } from '../../app/utilities/directives/classes.directive';
import { VariantDirective } from '../../app/utilities/directives/variant.directive';
import { TypographyComponent } from '../../app/components/typography/typography.component';
import { ButtonDirective } from '../../app/utilities/directives/button.directive';
import { ColorDirective } from '../../app/utilities/directives/color.directive';
import { DashboardExComponent } from '../../app/examples/dashboard-ex/dashboard-ex.component';
import { BreakpointService } from '../../app/utilities/services/breakpoint.service';
import { LayoutComponent } from '../../app/screens/layout/layout.component';
import { CardWizardComponent } from '../../app/components/cards/card-wizard/card-wizard.component';
import { MenuItemComponent } from '../../app/components/menu-item/menu-item.component';
import { MenuComponent } from '../../app/components/menu/menu.component';
import { NavbarComponent } from '../../app/components/navigation/navbar/navbar.component';
import { StepperComponent } from '../../app/components/stepper/stepper.component';
import { MenuService } from '../../app/components/menu/menu.service';
import { LayoutService } from '../../app/screens/layout/layout.service';
import { LayoutExComponent } from '../../app/examples/layout-ex/layout-ex.component';
import { CardStatusComponent } from '../../app/components/cards/card-status/card-status.component';
import { CardStepComponent } from '../../app/components/cards/card-step/card-step.component';
import { CardUserComponent } from '../../app/components/cards/card-user/card-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardStepModel } from '../../app/components/cards/card-step/card-step.model';

export default {
  title: 'Screen - Layout',
  component: LayoutExComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        IconComponent,
        TypographyComponent,

        LayoutExComponent,

        LayoutComponent,

        NavbarComponent,
        CardStatusComponent,
        CardUserComponent,

        MenuComponent,
        MenuItemComponent,

        StepperComponent,
        CardWizardComponent,
        CardStepComponent,

        SizeDirective,
        VariantDirective,
        ClassesDirective,
        ButtonDirective,
        ColorDirective,
      ],

      providers: [LayoutService, NavbarService, MenuService, BreakpointService],
      imports: [CommonModule, MaterialModule, BrowserAnimationsModule],
    }),
  ],
} as Meta;

const Template: Story<LayoutExComponent> = (args: LayoutExComponent) => ({
  props: args,
});

export const Defualt = Template.bind({});

Defualt.args = {
  steps: [
    new CardStepModel({
      label: 'פירוט הנכס',
      svgUrl: 'home',
      path: 'details',
      size: 2,
      variant: 'square',
      type: 'wizard'
    }),
    new CardStepModel({
      label: 'תנועות',
      svgUrl: 'list',
      path: 'movements',
      size: 2,
      isActive: true,
      variant: 'square',
      type: 'wizard'
    }),
    new CardStepModel({
      label: 'עסקאות',
      svgUrl: 'transactions',
      path: 'transactions',
      size: 2,
      variant: 'square',
      type: 'wizard'
    }),
    new CardStepModel({
      label: 'תתי חלקה',
      svgUrl: 'building',
      path: 'subdivision',
      size: 2,
      variant: 'square',
      type: 'wizard'
    }),
    new CardStepModel({
      label: 'פרצליציה',
      svgUrl: 'add',
      path: 'parcellation',
      size: 2,
      variant: 'square',
      type: 'wizard'
    }),
  ],

};

