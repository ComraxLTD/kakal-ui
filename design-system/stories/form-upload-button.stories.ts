
// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata, } from '@storybook/angular';
import { FormUploadComponent } from '../projects/kakal-ui/src/lib/form/form-upload/form-upload.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { QuestionFileModel } from '../projects/kakal-ui/src/lib/form/models/question-file.model';
import { TypographyComponent } from '../projects/kakal-ui/src/lib/typography/typography.component';
import { IconComponent } from '../projects/kakal-ui/src/lib/icon/icon.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Observable, of } from 'rxjs';

export default {
    title: 'upload/upload',
    decorators: [componentWrapperDecorator((story) => `<div class="mat-body">${story}</div>`),moduleMetadata({
        imports: [MatMenuModule, MatListModule, MatSelectModule, MatFormFieldModule, MatIconModule,BrowserAnimationsModule],
        declarations: [TypographyComponent, IconComponent]
    })],
    component: FormUploadComponent,
    argTypes: {
        question: QuestionFileModel,
        index:Number
        // we need to override here since in Angular it could be null as well and therefore it would become an ambigious data type for storybook
    }
} as Meta;

const Template: Story<FormUploadComponent> =
    (args: FormUploadComponent) => ({
        component: FormUploadComponent,
        props: args,
    });

export const upload = Template.bind({});
upload.args = {
    question: new QuestionFileModel({ key: 'upload-button' }),
    files$: of([]),
    index: 1,
    multi: false
} 



export const second = Template.bind({});
second.args = {
    question: new QuestionFileModel({ key: 'upload-button' }),
    files$: of([]),
    index: 'asd',
    multi: false
}
