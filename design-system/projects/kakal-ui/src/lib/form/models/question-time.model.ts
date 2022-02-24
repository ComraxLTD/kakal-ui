import { QuestionTextModel } from "./question-text.model";

export class QuestionTimeModel extends QuestionTextModel {
    constructor(options) {
        super(options);
        this.icon = 'time';
        this.cleave = { time: true, timePattern: ['h', 'm'] };
    }
}