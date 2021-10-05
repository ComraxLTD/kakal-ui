import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material/material.module';
import { CardUserComponent } from 'src/app/components/cards/card-user/card-user.component';

export default {
  title: 'User Card',
  component: CardUserComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule,MaterialModule],
    }),
  ],
} as Meta;

const Template: Story<CardUserComponent> = (args: CardUserComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {

};
