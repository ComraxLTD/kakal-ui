import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import {KKLDialogModule} from '../../projects/kakal-ui/src/lib/dialog/dialog.module'
import {DialogExampleComponent} from '../../projects/kakal-ui/src/lib/examples/dialog-example/dialog-example.component'

// to use this component you need to import MatDialog from angular material and implement it like in DialogExampleComponent



export default {
    title: 'Assets',
    decorators: [
      moduleMetadata({
        imports: [KKLDialogModule],
      }),
    ],
    component: DialogExampleComponent,
    argTypes: {
    },
  } as Meta;
  
  const Template: Story<DialogExampleComponent> = (args: DialogExampleComponent) => ({
    component: DialogExampleComponent,
    props: args,
  });
  


  export const dialog = Template.bind({});
  dialog.args = {
   
     
  }
  
  