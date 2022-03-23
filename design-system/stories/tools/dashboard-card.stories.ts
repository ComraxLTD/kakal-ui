// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { KKLCardLobbyModule } from '../../projects/kakal-ui/src/lib/cards/card-lobby/card-lobby.module';
import {CardLobbyComponent } from '../../projects/kakal-ui/src/lib/cards/card-lobby/card-lobby.component';
import { CardStepModel} from '../../projects/kakal-ui/src/lib/cards/card-step/card-step.model';

export default {
  title: 'Tools',
  decorators: [
    moduleMetadata({
      imports: [KKLCardLobbyModule],
    }),
  ],
  component: CardLobbyComponent,
  argTypes: {
    card: {
      name: 'card',
      description: 'An object containes all the card info',
      table: {
        type: {
          summary: 'cardStepModel',
        },
      },
    },
  },
} as Meta;

const Template: Story<CardLobbyComponent> = (args: CardLobbyComponent) => ({
  component: CardLobbyComponent,
  props: args,
});

export const dashboardCard = Template.bind({});

dashboardCard.args = {
  card:new CardStepModel({
    label: 'התקשרות חדשה',
    svgUrl: 'group',
    path: 'create-new-contract',
    size: 2.5,
    variant: 'square',
    type: 'wizard',
  })
};
