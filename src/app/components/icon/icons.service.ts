import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import {
  BUTTON_ICON,
  DESTINATION_ICON,
  THUMBUP_ICON,
  REPORTS_ICON,
  RELOAD_ICON,
  FLAG_ICON,
  SHIELD_ICON,
  BUS_ICON,
  SITE_ICON,
  BED_ICON,
  TENT_ICON,
  GUIDE_ICON,
  DINNER_ICON,
  MUSIC_ICON,
  BELL_ICON,
  EDIT_ICON,
  GENDER_ICON,
  V_SIGN,
  ADD_ICON,
  PLAYGROUND_ICON,
  LIST_ICON,
  CALENDAR_ICON,
  BOTTOM_TREE_LOGO,
  OPEN_PLUS,
  GROUP_ICON,
  RESTAURANT_ICON,
  LOGO_ICON,
  TREE_LOGO,
  TREE_ICON,
  TREE_GRADIENT_ICON,
  BOTTOM_TREE_LOGO_LANDS_ICON,
  ASSETS_ICON,
  MAIL_ICON,
  LOYER_ICON,
  TREE_GRADIENT_LANDS_ICON,
  TRANSACTION_ICON,
  PLANING_ICON,
  EVALUATION_ICON,
  SUPERVISION_ICON,
  MEASUREMENTS_ICON,
  LOCATION_ICON,
  BUILDING_ICON,
  HOME_ICON,
  SAVE_ICON,
  PRINT_ICON,
  SELECT_ICON,
} from './icons.list';

export interface IconItem {
  key: string;
  svgUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  public iconList: IconItem[] = [];

  public icons = {

    like: THUMBUP_ICON,
    button: BUTTON_ICON,
    select: SELECT_ICON,

    list: LIST_ICON,
    add: ADD_ICON,

    print: PRINT_ICON,
    save: SAVE_ICON,

    home: HOME_ICON,
    location: LOCATION_ICON,
    building: BUILDING_ICON,
    measurements: MEASUREMENTS_ICON,
    supervision: SUPERVISION_ICON,
    evaluation: EVALUATION_ICON,
    planing: PLANING_ICON,
    transactions: TRANSACTION_ICON,
    tree: TREE_ICON,
    treegradientlands: TREE_GRADIENT_LANDS_ICON,
    bottomtreelands: BOTTOM_TREE_LOGO_LANDS_ICON,
    assets: ASSETS_ICON,
    loyer: LOYER_ICON,
    mail: MAIL_ICON,
    logo: LOGO_ICON,
    calendar: CALENDAR_ICON,
    openPlus: OPEN_PLUS,

    destination: DESTINATION_ICON,
    vSign: V_SIGN,
    edit: EDIT_ICON,

    gender: GENDER_ICON,

    report: REPORTS_ICON,
    reload: RELOAD_ICON,
    flag: FLAG_ICON,
    shield: SHIELD_ICON,
    restaurant: RESTAURANT_ICON,

    bus: BUS_ICON,
    site: SITE_ICON,
    bed: BED_ICON,
    tent: TENT_ICON,
    guide: GUIDE_ICON,
    dinner: DINNER_ICON,
    music: MUSIC_ICON,
    playground: PLAYGROUND_ICON,

    bell: BELL_ICON,
    bottomTreeLogo: BOTTOM_TREE_LOGO,
    group: GROUP_ICON,
    treeLogo: TREE_LOGO,
  };

  private findIcon(key: string): string {
    const icon = this.icons[key.toLocaleLowerCase()];
    return icon ? icon : null;
  }

  private registerIcon(key: string, icon: string) {
    this.iconRegistry.addSvgIconLiteral(
      key,
      this.sanitizer.bypassSecurityTrustHtml(icon)
    );
  }

  public setIcon(key: string): boolean {
    const icon = this.findIcon(key);

    if (icon) {
      this.registerIcon(key, icon);
      return true;
    }

    return false;
  }

  public setIconsList(items: any[]) {
    items.map((item) => {
      this.setIcon(item.svgUrl);
    });
  }
}
