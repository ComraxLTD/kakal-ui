import { QuestionTextModel } from "./question-text.model";
import { ValidationService } from '../services/validations.service';

export class QuestionEmailModel extends QuestionTextModel {
    constructor(options) {
        super(options);
        this.icon = 'email';
        this.placeHolder = options.placeHolder || 'איימל';
        this.validations = options.validations ?
            [...options?.validations, ValidationService.regex('email')] : [ValidationService.regex('email')];
    }
}