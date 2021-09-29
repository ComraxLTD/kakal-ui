import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../app/components/icon/icon.component';
import { MaterialModule } from '../material/material.module';
import { MatIconModule } from '@angular/material/icon';

export default {
  title: 'Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, MatIconModule, MaterialModule],
    }),
  ],
} as Meta;

const Template: Story<IconComponent> = (args: IconComponent) => ({
  props: args,
});

export const HOME = Template.bind({});
HOME.args = {
  key: 'home',
  type: 'svg',
  color: 'black',
};
