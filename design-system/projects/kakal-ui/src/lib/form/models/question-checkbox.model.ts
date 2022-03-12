import { SelectOption } from "./question-select.model";
import { QuestionBase } from "./question.model";

export interface CheckboxOption {
  label: string;
  value: any;
  checked?: boolean;
}


export class QuestionCheckBoxModel extends QuestionBase {
    public options?: CheckboxOption[];
    public labelPosition?:string;

    constructor(options?: {
        key: string;
        label?: string;
        options?: CheckboxOption[];
        labelPosition?:string;
    }
    ) {
        super(options)
        this.key = options.key
        this.label = options.label
        this.controlType = 'checkbox';
        this.options = options.options || [];
        this.labelPosition = options.labelPosition || 'after';
    }

}
