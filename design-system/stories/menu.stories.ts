import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MenuComponent } from 'projects/kakal-ui/src/lib/menu/menu.component';
import { MenuModel } from 'projects/kakal-ui/src/lib/menu/menu.model';
import {  observable, Observable, of } from 'rxjs';
import { MenuModule } from '../projects/kakal-ui/src/lib/menu/menu.module';
let type: 'list' | 'accordion';

export default {
  title: 'menu/menu',
  decorators: [
    moduleMetadata({
      imports: [MenuModule],
    }),
  ],
  component: MenuComponent,
  argTyps: {
    menu$: Observable,
    hasLogin: Boolean,
    type: type,
  },
} as Meta;

const Template: Story<MenuComponent> = (args: MenuComponent) => ({
  component: MenuComponent,
  props: args,
});

export const list = Template.bind({});
list.args = {
  menu$: of([
    { label: 'menu item one', type: 'default' },
    { label: 'menu item two', type: 'default' },
    { label: 'menu item three', type: 'default' },
  ]),
  type: 'list',
};
