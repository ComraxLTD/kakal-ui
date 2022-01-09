import { setCompodocJson } from "@storybook/addon-docs/angular";
import '!style-loader!css-loader!sass-loader!./../src/lib/styles/styles.scss';
import '!style-loader!css-loader!sass-loader!./../../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css';
import docJson from "../../../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  backgrounds: {
    default: 'form',
    values: [
      {
        name: 'twitter',
        value: '#00aced',
      },
      {
        name: 'facebook',
        value: '#3b5998',
      },
      {
        name: 'form',
        value: '#fff',
      },
    ],
  },
}
