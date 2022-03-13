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
        question: {
            name: 'Question',
            description: 'Observable of Question .',
            table: {
                type: { summary: 'Observable<Question>' },
            },
            control: {
                type: 'object'
            }
        },
        steps$: {
            name: 'steps$',
            description: 'Observable of CardStepModel array .',
            table: {
                type: { summary: 'Observable<CardStepModel[]>' },
            },
            control: {
                type: 'array'
            }
        },
        direction: {
            name: 'direction',
            description: 'direction of steps layout.',
            table: {
                type: {
                    summary: 'StepperDirection', detail: "'column' | 'row'"
                },
                defaultValue: { summary: "row" },
            },
            control: {
                type: 'string'
            }
        },
        stepRef: {
            name: 'stepRef',
            description: 'Use ng template for step',
            table: {
                type: { summary: 'ElementRef' },
            },
            control: {
                type: 'ElementRef'
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

