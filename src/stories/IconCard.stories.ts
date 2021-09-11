import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {IconCardComponent} from "../app/components/cards/icon-card/icon-card.component";

export default {
  title: 'IconCard',
  component: IconCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<IconCardComponent> = (args: IconCardComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  item: {
    title: 'Home',
    svgUrl: 'reload',
    isActive: true,
    hasBadge: true,
    badgeValue: 10
  }
};
