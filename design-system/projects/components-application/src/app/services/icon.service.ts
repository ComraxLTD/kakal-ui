import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { report, _1111 } from '../../assets/icons/icon.list'

const icons:{[key:string]:string} = {

  // test
  one: _1111,
  report: report

  // ACTIONS


  // LOGOS


  // ACTION ICONS 


  // EDUCATION

  // LAYOUT


  // STEPPER


  // DASHBOARD


  // ADDITIONS


  // ACCOMMODATION OPTIONS


  //facilities


  //MOBILE FACILITIES

  // -------------------------------------------------------------------------------
};

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}
// 
  // public findIcon(key: string): string {
    // const icon = icons[key.toLocaleLowerCase()];
    // return icon ? icon : "";
  // }

  private registerIcon(key: string, source: string) {
    this.matIconRegistry.addSvgIconLiteral(
      key,
      this.domSanitizer.bypassSecurityTrustHtml(source)
    );
  }

  public registerAllIcons() {
    const entries = Object.entries(icons);

    entries.map(([key, html]) => {
      this.registerIcon(key, html);
    });
  }


}
