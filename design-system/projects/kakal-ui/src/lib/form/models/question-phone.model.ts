import { ValidatorFn } from "@angular/forms";
import { ValidationService } from "../services/validations.service";
import { QuestionNumberModel } from "./question-number.model";
import { ControlType, GridProps, QuestionType } from "./question.model";


export class QuestionPhoneModel extends QuestionNumberModel {
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
        placeHolder?:string;
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