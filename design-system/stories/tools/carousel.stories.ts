import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CarouselComponent } from '../../projects/kakal-ui/src/lib/carousel/carousel.component';
import { CarouselModule } from '../../projects/kakal-ui/src/lib/carousel/carousel.module';

export default {
  title: 'Tools/Carousel',
  decorators: [
    moduleMetadata({
      imports: [CarouselModule],
    }),
  ],
  component: CarouselComponent,
  argTypes: {
    component: {
      name: 'Component',
      description: 'Component to use',
      control: {
        type: 'object'
      }
    },
    data: {
      name: 'Data',
      description: 'Data that you pass to component',
      table: {
        type: { summary: 'any[]' },
      },
      control: {
        type: 'array'
      }
    },
    singleProp: {
        name: 'SingleProp',
        description: 'If the component have only one prop.',        
        control: {
            type: 'text'
        }
    },
    displayNum: {
      name: 'DisplayNum',
      description: 'Chose how many item to display inline.',
      control: {
        type: 'number'
      }
    },
},
} as Meta;

const Template: Story<CarouselComponent> = (args: CarouselComponent) => ({
  component: CarouselComponent,
  props: args,
});

export const Carousel = Template.bind({});
Carousel.args = {
}

