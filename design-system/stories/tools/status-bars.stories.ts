// import { Meta, moduleMetadata, Story } from '@storybook/angular';
// import { EventEmitter } from '@angular/core';

// export default {
//   title: 'Tools/Status-Bars',
//   decorators: [
//     moduleMetadata({
//       imports: [StatusProgressModule],
//     }),
//   ],
//   component: StatusProgressComponent,
//   argTypes: {
//     status: {
//         name: 'status',
//         defaultValue: '',
//         description: 'stauts model decides how many steps and thier status',
//         table: {
//           type: { summary: 'StatusBarsModel - authorizedBars, totalBars, label' , required: true},

//         },
//       },
//     hasLabel: {
//       name: 'hasLabel',
//       defaultValue: 'false',
//       description: 'determine if the steps have numbers under the bar',
//       table: {
//         type: { summary: 'boolean' },
//       },
//     },


//     click: {
//       name: 'click',
//       description: 'Event that is emitted whenever a bar  clicked. ',
//       table: {
//         type: {
//           summery: '',
//         },
//       },
//       control: EventEmitter,
//     },
//     labelRef: {
//         name: 'labelRef',
//         defaultValue: '',
//         description: 'An ng-template. render item under the bar',
//         table: {
//           type: { summary: 'TemplateRef<any>' },
//         },
//       },

//   },
// } as Meta;

// const Template: Story<StatusProgressComponent> = (
//   args: StatusProgressComponent
// ) => ({
//   component: StatusProgressComponent,
//   props: args,
// });

// export const statusBar = Template.bind({});



// statusBar.args = {
//     status:new StatusBarsModel({
//     label: 'StatusProgress',
//     authorizedBars:3,
//     totalBars:5
//   })
// };
