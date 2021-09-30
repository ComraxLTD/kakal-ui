import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from 'src/app/components/user-card/user-card.component';
import { MaterialModule } from 'src/material/material.module';

export default {
  title: 'User Card',
  component: UserCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule,MaterialModule],
    }),
  ],
} as Meta;

const Template: Story<UserCardComponent> = (args: UserCardComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {

};
