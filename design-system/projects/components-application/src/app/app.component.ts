import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { NavbarService } from '../../../kakal-ui/src/lib/navbar/navbar.service';
import { OpenMotionService } from '../../../kakal-ui/src/lib/open-motions/open-motions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'components-application';

  @ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;
  @ViewChild('testTemplate', { read: TemplateRef, static: true }) testTemplate: TemplateRef<any>;
  constructor(private navbarService: NavbarService, private motionService: OpenMotionService) { }
  public logos!: any[];
  public control: FormControl = new FormControl();
  showSave$: Observable<boolean>;

  ngOnInit(): void {

    this.logos = [{
      key: "logo",
      size: 7,
      path: "small-contracts"
    }]
    console.log(this.container);
    console.log(this.testTemplate);

    this.motionService.createDynamicSideNav(this.container, 'test', this.testTemplate)

  }

}
