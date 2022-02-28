import { QuestionTextModel } from "./question-text.model";
import { ValidationService } from '../services/validations.service';
import { ValidatorFn } from "@angular/forms";
import { ControlType, GridProps, QuestionType } from "./question.model";

export class QuestionEmailModel extends QuestionTextModel {
    constructor(options: {
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
        placeHolder?:string;
    }) {
        super(options);
        this.icon = 'email';
        this.placeHolder = options.placeHolder || 'איימל';
        this.validations = options.validations ?
            [...options?.validations, ValidationService.regex('email')] : [ValidationService.regex('email')];
    }
}