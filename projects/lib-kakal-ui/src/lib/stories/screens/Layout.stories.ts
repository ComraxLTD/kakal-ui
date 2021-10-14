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

export default {
  title: 'Screen - Layout',
  component: DashboardExComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        IconComponent,
        TypographyComponent,

        LayoutComponent,
        NavbarComponent,
        StepperComponent,
        MenuComponent,
        MenuItemComponent,
        CardWizardComponent,

        SizeDirective,
        VariantDirective,
        ClassesDirective,
        ButtonDirective,
        ColorDirective,
      ],

      providers: [LayoutService, NavbarService, MenuService, BreakpointService],
      imports: [CommonModule, MaterialModule],
    }),
  ],
} as Meta;

const Template: Story<DashboardExComponent> = (args: DashboardExComponent) => ({
  props: args,
});

export const Dashboard = Template.bind({});

Dashboard.args = {
  cards: [
    new CardDashboardModel({
      label: 'פירוט הנכס',
      svgUrl: 'home',
      path: 'details',
    }),
    new CardDashboardModel({
      label: 'תנועות',
      svgUrl: 'list',
      path: 'movements',
    }),
    new CardDashboardModel({
      label: 'עסקאות',
      svgUrl: 'transactions',
      path: 'transactions',
    }),
    new CardDashboardModel({
      label: 'תתי חלקה',
      svgUrl: 'building',
      path: 'subdivision',
    }),
  ],
  width: 50
};

export const Foresrty = Template.bind({});

Foresrty.args = {
  cards: [
    new CardDashboardModel({
      label: 'פירוט הנכס',
      svgUrl: 'home',
      path: 'details',
    }),
    new CardDashboardModel({
      label: 'תנועות',
      svgUrl: 'list',
      path: 'movements',
    }),
  ],
  width: 50
};
