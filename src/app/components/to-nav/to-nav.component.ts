import { NavigationCardModel } from './../../utilities/models/nav-card-model';
import { Input } from '@angular/core';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-to-nav',
  templateUrl: './to-nav.component.html',
  styleUrls: ['./to-nav.component.scss']
})
export class ToNavComponent implements OnInit {
  @Output() menuToggle = new EventEmitter();

  @Input() public status: NavigationCardModel[] = [];
  @Input() public title: string = ''
  @Input() public showStatus: boolean = true;

  public isOpen: boolean = true;

  public toggleMenu() {
    this.isOpen = !this.isOpen;
    this.menuToggle.emit();
  }

  constructor(
  ) {



    // this.showSteps =
    //   this.urlAdress === '/education' ||
    //     this.urlAdress === '/education/search' ||
    //     this.urlAdress === '/education/my-tours'
    //     ? true
    //     : false;
  }

  ngOnInit(): void { }
}
