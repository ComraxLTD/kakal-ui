import { ValidatorFn } from "@angular/forms";
import { ValidationService } from "../services/validations.service";
import { QuestionNumberModel } from "./question-number.model";


export class QuestionPhoneModel extends QuestionNumberModel {
    constructor(options:{
        icon?:string;
        placeHolder?:string;
        validations?:ValidatorFn[];
        controlType?:string;
        cleave?:{}
    }) {
        super(options);
        this.icon = 'phone';
        this.placeHolder = options.placeHolder || 'טלפון'
        this.validations = options.validations ? [...options?.validations, ValidationService.regex('phone')] : 
        [ValidationService.regex('phone')];
        this.controlType = 'cleave';
        this.cleave = { blocks: [3, 3, 4], delimiter: '-',numericOnly:true };
    }
}