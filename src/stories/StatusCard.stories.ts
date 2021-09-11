import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {StatusCardComponent} from "../app/components/cards/status-card/status-card.component";

export default {
  title: 'Status Card',
  component: StatusCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<StatusCardComponent> = (args: StatusCardComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  item: {
    title: 'Home',
    path: '',
    svgUrl: '',
    isActive: true,
    hasBadge: true,
    badgeValue: 10
  }
};
