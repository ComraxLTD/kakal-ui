import { ValidatorFn } from "@angular/forms";
import { QuestionTextModel } from "./question-text.model";
import { ControlType, GridProps, QuestionType } from "./question.model";

export class QuestionTimeModel extends QuestionTextModel {
    constructor(options:{
        key?: string;
        label?: string;
        value?: any;
        type?: QuestionType;
        controlType?: ControlType;
        gridProps?: GridProps;
        icon?: string;
        validations?: ValidatorFn[];
        disabled?: boolean;
        cleave?: {};
    }) {
        super(options);
        this.icon = 'time';
        this.cleave = { time: true, timePattern: ['h', 'm'] };
    }
}