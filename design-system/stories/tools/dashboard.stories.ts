import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { DashboardComponent } from '../../projects/kakal-ui/src/lib/dashboard/dashboard.component'
import { KKLDashboarModule } from '../../projects/kakal-ui/src/lib/dashboard/dashboard.module';

export default {
    title: 'Tools',
    decorators: [
        moduleMetadata({
            imports: [KKLDashboarModule],
        }),
    ],
    component: DashboardComponent,
    argTypes: {
        cols: {
          name: 'Cols',
          description: 'Grid property',
          table: {
            type: { summary: 'number' },
          },
          control: {
            type: 'number'
          }
        },
        rows: {
            name: 'Rows',
            description: 'Grid property',
            table: {
              type: { summary: 'number' },
            },
            control: {
              type: 'number'
            }
          },
          moduleTitle: {
            name: 'ModuleTitle',
            description: 'Title of module to display',
            table: {
                type: {
                    summary: 'string'},
            },
            control: {
                type: 'text'
            }
        },
        cards: {
          name: 'Cards',
          description: 'Array of cards to display',
          table: {
            type: { summary: 'CardDashboardModel[]' },
          },
          control: {
            type: 'CardDashboardModel[]'
          }
        },
    },
} as Meta;

const Template: Story<DashboardComponent> = (args: DashboardComponent) => ({
    component: DashboardComponent,
    props: args,
});

export const dashboard = Template.bind({});
dashboard.args = {
}

