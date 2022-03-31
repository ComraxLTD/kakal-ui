import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { StepperComponent } from '../../projects/kakal-ui/src/lib/stepper/stepper.component';
import {StepperModule} from '../../projects/kakal-ui/src/lib/stepper/stepper.module';

export default {
  title: 'Tools/Stepper',
  decorators: [
    moduleMetadata({
      imports: [StepperModule],
    }),
  ],
  component: StepperComponent,
  argTypes: {
    question: {
      name: 'Question',
      description: 'Observable of Question .',
      table: {
        type: { summary: 'Observable<Question>' },
      },
      control: {
        type: 'object'
      }
    },
    steps$: {
      name: 'steps$',
      description: 'Observable of CardStepModel array .',
      table: {
        type: { summary: 'Observable<CardStepModel[]>' },
      },
      control: {
        type: 'array'
      }
    },
    direction: {
        name: 'direction',
        description: 'direction of steps layout.',
        table: {
            type: {
                summary: 'StepperDirection', detail:"'column' | 'row'"},
            defaultValue: { summary: "row" },
        },
        control: {
            type: 'string'
        }
    },
    stepRef: {
      name: 'stepRef',
      description: 'Use ng template for step',
      table: {
        type: { summary: 'ElementRef' },
      },
      control: {
        type: 'ElementRef'
      }
    },
},
} as Meta;

const Template: Story<StepperComponent> = (args: StepperComponent) => ({
  component: StepperComponent,
  props: args,
});

export const stepper = Template.bind({});
stepper.args = {
}

