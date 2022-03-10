// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { KKLCardDashboardModule } from '../../projects/kakal-ui/src/lib/cards/card-dashboard/card-dashboard.module';
import {CardDashboardComponent } from '../../projects/kakal-ui/src/lib/cards/card-dashboard/card-dashboard.component';
import { CardStepModel} from '../../projects/kakal-ui/src/lib/cards/card-step/card-step.model';

export default {
  title: 'Tools',
  decorators: [
    moduleMetadata({
      imports: [KKLCardDashboardModule],
    }),
  ],
  component: CardDashboardComponent,
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

const Template: Story<CardDashboardComponent> = (args: CardDashboardComponent) => ({
  component: CardDashboardComponent,
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
 