import { SelectOption } from "./question-select.model";
import { QuestionBase } from "./question.model";

export class QuestionCheckBoxModel extends QuestionBase {
    public options?: SelectOption[];
    public labelPosition?:string;
    constructor(options?: {
        key: string;
        label?: string;
        options?: SelectOption[];
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
