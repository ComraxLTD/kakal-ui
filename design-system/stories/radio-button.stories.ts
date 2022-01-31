// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { FormControl } from '@angular/forms';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { QuestionRadioModel } from 'projects/kakal-ui/src/lib/form/form-radio/question-radio.model';
import { FormRadioComponent } from '../projects/kakal-ui/src/lib/form/form-radio/form-radio.component';
import {MatRadioModule } from '@angular/material/radio';
import { moduleMetadata ,} from '@storybook/angular';

export default {
    title: 'Form/Radio-Button',
    decorators: [
        moduleMetadata({
            imports: [MatRadioModule]
        })
    ],
    component: FormRadioComponent,
    argTypes: {
        control:new FormControl(),
        question: {key:'gender', 
        options:[{ label: 'male', value: 'male', checked: true },
        { label: 'female', value: 'female', checked: false }]
    } 
        // we need to override here since in Angular it could be null as well and therefore it would become an ambigious data type for storybook
    }
} as Meta;

const Template: Story<FormRadioComponent> = (args: FormRadioComponent) => ({
    component: FormRadioComponent,
    props: args,
});

export const GenderRadio = Template.bind({});
GenderRadio.args = {
    control:new FormControl(),
    question: new QuestionRadioModel({key:'gender', label:'choose your gender',options:[
        { label: 'female', value: 'female', checked: false },
        { label: 'male', value: 'male', checked: true }]} )
}

 