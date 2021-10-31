import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { TitleComponent } from '../app/components/title/title.component';
import { TypographyComponent } from '../app/components/typography/typography.component';
import { UnderlineDirective } from '../app/utilities/directives/underline.directive';
import { TitleExComponent } from '../app/examples/title-ex/title-ex.component';

export default {
  title: 'Title',
  component: TitleExComponent,

  decorators: [
    moduleMetadata({
      declarations: [
        TitleComponent,
        TypographyComponent,
        UnderlineDirective,
      ],
      imports: [CommonModule, MaterialModule],
    }),
  ],
} as Meta;

const Template: Story<TitleExComponent> = (args: TitleExComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  text: 'Hallow World!',
};

export const WithSlot = Template.bind({});
WithSlot.args = {
  text: 'Hallow World!',
  slot : true
};
