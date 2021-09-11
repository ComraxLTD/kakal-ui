import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {DashboardCardComponent} from "../app/components/dashboard-card/dashboard-card.component";

export default {
  title: 'Dashboard Card',
  component: DashboardCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
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
