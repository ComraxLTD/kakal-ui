import { moduleMetadata, Story, Meta } from '@storybook/angular';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {DashboardCardComponent} from "../app/components/dashboard-card/dashboard-card.component";
import {MaterialModule} from "../material/material.module";
import {TypographyComponent} from "../app/components/typography/typography.component";
import {IconComponent} from "../app/components/icon/icon.component";
import {AppRoutingModule} from "../app/app-routing.module";

export default {
  title: 'Dashboard Card',
  component: DashboardCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [TypographyComponent, IconComponent],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
      imports: [CommonModule, MaterialModule, AppRoutingModule],
    }),
  ],
} as Meta;

const Template: Story<DashboardCardComponent> = (args: DashboardCardComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  item: {
    title: 'Home',
    svgUrl: '',
    isActive: true,
    hasBadge: true,
    badgeValue: 10
  }
};
