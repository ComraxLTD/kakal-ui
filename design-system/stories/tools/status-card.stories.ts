// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { KKLCardStatusModule } from '../../projects/kakal-ui/src/lib/cards/card-status/card-status.module';
import {CardStatusComponent } from '../../projects/kakal-ui/src/lib/cards/card-status/card-status.component';
import { CardStatusModel} from '../../projects/kakal-ui/src/lib/cards/card-status/card-status.model';

export default {
  title: 'Tools',
  decorators: [
    moduleMetadata({
      imports: [KKLCardStatusModule],
    }),
  ],
  component: CardStatusComponent,
  argTypes: {
    card: {
      name: 'card',
      description: 'An object containes all the card info',
      table: {
        type: {
          summary: 'CardStatusModel',
        },
      },
    },
  },
} as Meta;

const Template: Story<CardStatusComponent> = (args: CardStatusComponent) => ({
  component: CardStatusComponent,
  props: args,
});

export const StatusCard = Template.bind({});

StatusCard.args = {
  // card:new CardStatusModel({
  //   key: '51000003', // every card should have a uniqe key
  //   label: 'ממתין להצעת מחיר', // the label the floats next to the card
  //   svgIcon: 'send_mail', // the icon in the card
  //   value: 2,// the value in the badge
  //   path: 'existing-procedures', // the link it should redirect to
  // })
};
