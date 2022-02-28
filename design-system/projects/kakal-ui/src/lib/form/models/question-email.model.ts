import { QuestionTextModel } from "./question-text.model";
import { ValidationService } from '../services/validations.service';
import { ValidatorFn } from "@angular/forms";

export class QuestionEmailModel extends QuestionTextModel {
    constructor(options:{
        icon?:string;
        placeHolder?:string;
        validations?:ValidatorFn[];
    }) {
        super(options);
        this.icon = 'email';
        this.placeHolder = options.placeHolder || 'איימל';
        this.validations = options.validations ?
            [...options?.validations, ValidationService.regex('email')] : [ValidationService.regex('email')];
    }
}