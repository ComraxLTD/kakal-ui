import { Injectable } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

import { QuestionGroupModel } from "../../components/form/models/question-group.model";
import { QuestionRadio } from "../../components/form/models/question-radio.model";
import { FormService, Question } from "../../components/form/services/form.service";

export declare type Login = string | { user: string, password: string }

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  public employeeQuestion: QuestionRadio = {
    key: 'user',
    label: '',
    value: 'external',
    options: [
      { label: 'משתמש חיצוני', value: 'external' },
      { label: 'עובד קקל', value: 'inner' }
    ]
  }

  public loginQuestions: Question[] = [
    { key: 'username', label: 'שם משתמש', validations: [Validators.required] },
    { key: 'password', controlType: 'password', label: 'סיסמא', validations: [Validators.required] },
  ]

  public loginForm: QuestionGroupModel = {
    key: 'login',
    label: '',
    questions: this.formService.setQuestionList([this.loginQuestions[0]]),
    formGroup: this.formService.setFormGroup([this.loginQuestions[0]])
  }


  constructor(

    private formService: FormService
  ) { }


  public getRadioForm(): { control: FormControl, question: QuestionRadio } {
    const control = this.formService.getFieldControl(this.employeeQuestion)
    return { control, question: this.employeeQuestion }
  }


  public reloadForm(questions: Question[]): QuestionGroupModel {
    return {
      ...this.loginForm,
      questions: this.formService.setQuestionList(questions),
      formGroup: this.formService.setFormGroup(questions)
    }
  }

}
