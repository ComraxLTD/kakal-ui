import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { NavbarService } from '../../../kakal-ui/src/lib/navbar/navbar.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'components-application';
  constructor(private navbarService: NavbarService) { }
  public logos!: any[];
  public control: FormControl = new FormControl();
  showSave$: Observable<boolean>;

  ngOnInit(): void {
    this.logos = [{
      key: "logo",
      size: 7,
      path: "small-contracts"
    }]
  }

  updateTitle() {
    this.navbarService.setTitle(this.control.value);
  }
}
