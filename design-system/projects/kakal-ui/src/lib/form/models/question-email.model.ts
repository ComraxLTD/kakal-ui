import { QuestionTextModel } from "./question-text.model";
import { ValidationService } from '../services/validations.service';

export class QuestionEmailModel extends QuestionTextModel {
    constructor(options) {
        super(options);
        console.log(options)
        this.icon = 'email';
        this.validations = options.validations ?
            [...options?.validations, ValidationService.regex('email')] : [ValidationService.regex('email')];
    }
}