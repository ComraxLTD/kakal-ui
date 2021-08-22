import { NavigationCardModel } from './../../utilities/models/nav-card-model';
import { Input } from '@angular/core';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-to-nav',
  templateUrl: './to-nav.component.html',
  styleUrls: ['./to-nav.component.scss']
})
export class ToNavComponent implements OnInit {
  @Output() menuToggle = new EventEmitter();

  @Input() public status: NavigationCardModel[] = [];
  @Input() public title: string = ''

  public isOpen: boolean = true;
  public showSteps: boolean = true;

  public urlAdress = 'main';
  public componentType: string = '';
  public prefix: string = ''

  public toggleMenu() {
    this.isOpen = !this.isOpen;
    this.menuToggle.emit();
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    // private userDataService: UserDataService
  ) {




    this.router.events.subscribe((val: any) => {

      this.urlAdress = val.url ? val.url : this.urlAdress;

      // this.showSteps =
      //   this.urlAdress === '/education' ||
      //     this.urlAdress === '/education/search' ||
      //     this.urlAdress === '/education/my-tours'
      //     ? true
      //     : false;
    });
  }

  ngOnInit(): void { }
}
