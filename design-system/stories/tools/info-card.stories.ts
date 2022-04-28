// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { KKLCardInfoModule } from '../../projects/kakal-ui/src/lib/cards/card-info/card-info.module';
import { CardInfoComponent } from '../../projects/kakal-ui/src/lib/cards/card-info/card-info.component';

export default {
  title: 'Tools',
  decorators: [
    moduleMetadata({
      imports: [KKLCardInfoModule],
    }),
  ],
  component: CardInfoComponent,
  argTypes: {
    card: {
      name: 'card',
      description: 'An object containes all the card info',
      table: {
        type: {
          summary: 'icon :string, headling:string, subHeadline:string',
        },
      },
    },
  },
} as Meta;

const Template: Story<CardInfoComponent> = (args: CardInfoComponent) => ({
  component: CardInfoComponent,
  props: args,
});

export const infoCard = Template.bind({});

infoCard.args = {

};
