import { Component, Input, OnInit } from '@angular/core';
import { StepModel, StepperDirection } from 'src/app/components/step/step.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() public steps : StepModel[]
  @Input() public direction : StepperDirection

  constructor() {
   }

  ngOnInit(): void {

  }

}
