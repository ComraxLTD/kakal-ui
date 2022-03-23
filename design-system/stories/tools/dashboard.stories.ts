import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { LobbyComponent } from '../../projects/kakal-ui/src/lib/lobby/lobby.component'
import { KKLLobbyModule } from '../../projects/kakal-ui/src/lib/lobby/lobby.module';

export default {
    title: 'Tools',
    decorators: [
        moduleMetadata({
            imports: [KKLLobbyModule],
        }),
    ],
    component: LobbyComponent,
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
            type: { summary: 'CardLobbyModel[]' },
          },
          control: {
            type: 'CardLobbyModel[]'
          }
        },
    },
} as Meta;

const Template: Story<LobbyComponent> = (args: LobbyComponent) => ({
    component: LobbyComponent,
    props: args,
});

export const dashboard = Template.bind({});
dashboard.args = {
}
