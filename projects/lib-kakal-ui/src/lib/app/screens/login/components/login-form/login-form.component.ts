import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { QuestionRadio } from '../../../../components/form/models/question-radio.model';
import { QuestionGroupModel } from '../../../../components/form/models/question-group.model';
import { Login, LoginService } from '../../login.service';

@Component({
  selector: 'kkl-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  public user: QuestionRadio
  public radioControl: FormControl
  public loginForm: QuestionGroupModel

  private subscription: Subscription

  @Output() submit: EventEmitter<Login> = new EventEmitter();

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {

    this.setRadioButtons()
    this.loginForm = this.loginService.loginForm
    this.subscribeRadio()

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  private setRadioButtons() {
    const { question, control } = this.loginService.getRadioForm()
    this.radioControl = control
    this.user = question
  }

  private subscribeRadio() {

    this.subscription = this.radioControl.valueChanges.subscribe(
      (value: string) => {
        const questions = (value === 'external') ? [this.loginService.loginQuestions[0]] : this.loginService.loginQuestions
        this.loginForm = this.loginService.reloadForm(questions)
      }
    )

  }


  public onSubmit() {
    this.submit.emit(this.loginForm.formGroup.value)
  }

}
