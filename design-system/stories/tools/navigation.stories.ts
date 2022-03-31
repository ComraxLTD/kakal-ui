// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { KKLNavigationModule } from '../../projects/kakal-ui/src/lib/navigation/navigation.module';
import { NavigationComponent } from '../../projects/kakal-ui/src/lib/navigation/navigation.component';
import { of } from 'rxjs';
import { CardStatusModel } from '../../projects/kakal-ui/src/lib/cards/card-status/card-status.model';

export default {
  title: 'Tools',
  decorators: [
    moduleMetadata({
      imports: [KKLNavigationModule],
    }),
  ],
  component: NavigationComponent,
  argTypes: {
    steps$: {
      name: ' steps$',
      description: 'card status model',
      table: {
        type: {
          summary: 'for every item of the array there will be a step',
        },
      },
    },
    activeStepIndex: {
      name: ' activeStepIndex',
      description: 'define the first active step on init',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    slots: {
      name: ' slots',
      description:
        'containes two elemntrefs, content and step, the content element ref can replace the number under the step bar, the step elementref can replace the bar  ',
      table: {
        type: {
          summary: '{ content: ElementRef; step: ElementRef }',
        },
      },
    },
  },
} as Meta;

const Template: Story<NavigationComponent> = (args: NavigationComponent) => ({
  component: NavigationComponent,
  props: args,
});

export const navigation = Template.bind({});

navigation.args = {
  steps$: of([
    new CardStatusModel({key:'s'}),
    new CardStatusModel({key:'s'}),
    new CardStatusModel({key:'s'}),
    new CardStatusModel({key:'s'}),
  ]),
  activeStepIndex:0,

};
