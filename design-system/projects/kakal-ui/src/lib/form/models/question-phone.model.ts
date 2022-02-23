import { ValidationService } from "../services/validations.service";
import { QuestionNumberModel } from "./question-number.model";


export class QuestionPhoneModel extends QuestionNumberModel {
    constructor(options) {
        super(options);
        this.icon = 'phone';
        this.validations = options.validations ? [...options?.validations, ValidationService.regex('phone')] : 
        [ValidationService.regex('phone')];
        this.controlType = 'cleave';
        this.cleave = { blocks: [3, 3, 4], delimiter: '-' };
    }
}