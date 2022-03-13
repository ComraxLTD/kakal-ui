import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { OpenMotionsModule } from '../../projects/kakal-ui/src/lib/open-motions/open-motions.module';
import { OpenMotionsComponent } from '../../projects/kakal-ui/src/lib/open-motions/open-motions.component';

export default {
    title: 'Tools/Open Motion',
    decorators: [
        moduleMetadata({
            imports: [OpenMotionsModule],
        }),
    ],
    component: OpenMotionsComponent,
    argTypes: {
        title: {
            name: 'Title',
            description: 'Title of content',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: "My title" },
            },
            control: {
                type: 'text'
            }
        },
        content: {
            name: 'Content',
            description: 'Ng-template of your content',
            table: {
                type: { summary: 'TemplateRef<any>' },
            },
            control: {
                type: 'object'
            }
        },
        direction: {
            name: 'direction',
            description: 'direction of steps layout.',
            table: {
                type: {
                    summary: 'string', detail: "'right' | 'left'"
                },
                defaultValue: { summary: "left" },
            },
            control: {
                type: 'text'
            }
        },
        closeEvent: {
            name: '@Output() closeEvent',
            description: 'Emit event to service when user click on close button or click outside component',
            table: {
                type: { summary: 'EventEmitter' },
            },
            control: {
                type: 'EventEmitter'
            }
        },
    },
} as Meta;

const Template: Story<OpenMotionsComponent> = (args: OpenMotionsComponent) => ({
    component: OpenMotionsComponent,
    props: args,
});

export const openMotion = Template.bind({});
openMotion.args = {
}

