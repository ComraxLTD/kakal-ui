// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata, } from '@storybook/angular';

import { FormExampleComponent } from '../../projects/kakal-ui/src/lib/examples/form-example/form-example.component';
import { KKLFormModule } from '../../projects/kakal-ui/src/lib/form/form/form.module';
export default {
    title: 'Form',
    decorators: [componentWrapperDecorator((story) => `<div class="mat-body">${story}</div>`), moduleMetadata({
        imports: [KKLFormModule],
        declarations: []
    })],
    component: FormExampleComponent,
    argTypes: {
        Group: {
          description: 'Form object , that FormService create .',
          table: {
            type: {
              summary: '@Input() public group: QuestionGroupModel',
              detail: `
              key?: string;
              questions?: Question[];
              label?: string;
              icon?: string;
              type?: QuestionType;
              formGroup?: FormGroup;
              gridProps?: InputGrid;
              hasButton?: boolean;
              group?: Object;
              validations?: ValidatorFn[];
              `,
            },
          },
          control: {
            type: null,
          },
        },
        FormDataSource: {
            description: 'Subject that handle form events .',
            table: {
              type: {
                summary: '@Input() public formDataSource: FormDataSource',
              },
            }
        },
        rowHeight: {
            description: 'Set row height .',
            table: {
              type: {
                summary: '@Input() public rowHeight: number',
              },
            }
        },
        Gutter: {
            description: '',
            table: {
              type: {
                summary: '@Input() public gutter: number',
              },
            }
        },
        slots: {
            description: 'Use custom angular template in form .',
            table: {
              type: {
                summary: '@Input() public slots',
              },
            }
        },
      },
} as Meta;

const Template: Story<FormExampleComponent> =
    (args: FormExampleComponent) => ({
        component: FormExampleComponent,
        props: args,
    });

export const form = Template.bind({});

form.args = {
}
