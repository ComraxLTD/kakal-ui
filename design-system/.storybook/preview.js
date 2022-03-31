
import '!style-loader!css-loader!sass-loader!./../projects/kakal-ui/src/styles/global.scss';
import '!style-loader!css-loader!sass-loader!./../node_modules/@angular/material/prebuilt-themes/indigo-pink.css';
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}