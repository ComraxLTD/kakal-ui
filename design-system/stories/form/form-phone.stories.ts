// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata, } from '@storybook/angular';

import { FormPhoneComponent } from '../../projects/kakal-ui/src/lib/examples/form-phone/form-phone.component';
import { KKLFormModule } from '../../projects/kakal-ui/src/lib/form/form/form.module';
import { KKLFormInputModule } from '../../projects/kakal-ui/src/lib/form/form-input/form-input.module';
export default {
    title: 'form',
    decorators: [componentWrapperDecorator((story) => `<div class="mat-body">${story}</div>`), moduleMetadata({
        imports: [KKLFormInputModule],
        declarations: []
    })],
    component: FormPhoneComponent,
    argTypes: {
        Control: {
          description: 'Angular FormControl',
          table: {
            type: {
              summary: 'new FormControl()',
            },
          },
          control: {
            type: null,
          },
        },
        Icon: {
            description: 'Phone Question Model will generate you icon.',
            table: {
              type: {
              },
            }
        },
        Cleave: {
            description: 'Phone Question Model will generate you cleave.',
            table: {
              type: {
              },
            }
        },
        controlType: {
            description: "Need to be 'cleave' for cleave properties work.",
            table: {
              type: {
              },
            },
            defaultValue:'cleave'
        },
        key: {
            description: "input name",
        },
      },
} as Meta;

const Template: Story<FormPhoneComponent> =
    (args: FormPhoneComponent) => ({
        component: FormPhoneComponent,
        props: args,
    });

export const Phone = Template.bind({});

Phone.args = {
}
