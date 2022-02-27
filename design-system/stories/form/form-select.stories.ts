import { moduleMetadata } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { Story, Meta } from '@storybook/angular/types-6-0';
import { KKLFormSelectModule } from '../../projects/kakal-ui/src/lib/form/form-select/form-select.module';
import { FormSelectComponent } from '../../projects/kakal-ui/src/lib/form/form-select/form-select.component';
import { QuestionSelectModel } from '../../projects/kakal-ui/src/lib/form/models/question-select.model';

export default {
    title: 'Form',
    decorators: [
        moduleMetadata({
            imports: [KKLFormSelectModule],
        }),
    ],
    component: FormSelectComponent,
    argTypes: {

    },
} as Meta;

const Template: Story<FormSelectComponent> = (args: FormSelectComponent) => ({
    component: FormSelectComponent,
    props: args,
});

export const select = Template.bind({});
select.args = {
    question: new QuestionSelectModel({
        key:'select',
        options:[{value:0,label:'test'},{value:0,label:'test2'}]
    }),
    control: new FormControl()
}

