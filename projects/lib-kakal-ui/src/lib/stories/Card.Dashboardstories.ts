import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { TypographyComponent } from '../app/components/typography/typography.component';
import { IconComponent } from '../app/components/icon/icon.component';
import { CardDashboardComponent } from '../app/components/cards/card-dashboard/card-dashboard.component';

export default {
  title: 'Dashboard Card',
  component: CardDashboardComponent,
  decorators: [
    moduleMetadata({
      declarations: [TypographyComponent, IconComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
      imports: [CommonModule, MaterialModule],
    }),
  ],
} as Meta;

const Template: Story<CardDashboardComponent> = (
  args: CardDashboardComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  card: {
    label: 'Home',
    svgUrl: '',
  },
};
