import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { KKLDisplayDataModule } from '../../projects/kakal-ui/src/lib/display-data/display-data.module';
import { DisplayDataComponent } from '../../projects/kakal-ui/src/lib/display-data/display-data.component';


export default {
    title: 'Tools',
    decorators: [
        moduleMetadata({
            imports: [KKLDisplayDataModule],
        }),
    ],
    component: DisplayDataComponent,
    argTypes: {
        data: {
            name: 'data',
            description: 'Data to display .',
            table: {
                type: {
                    summary: 'Array | Object',
                    detail: " { label: string, value: string | number, icon?: string }[] | { label: string, value: string | number, icon?: string }"
                },
            },
            control: {
                type: 'object'
            }
        },
        type: {
            name: 'type',
            description: 'Type of display .',
            table: {
                type: { summary: 'string', detail: " 'table' | 'default' | 'input'" },
            },
            control: {
                type: 'text'
            }
        },
    }
} as Meta;

const Template: Story<DisplayDataComponent> = (args: DisplayDataComponent) => ({
    component: DisplayDataComponent,
    props: args,
});

export const displayData = Template.bind({});
displayData.args = {
}

