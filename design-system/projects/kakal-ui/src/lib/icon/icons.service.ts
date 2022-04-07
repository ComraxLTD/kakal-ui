import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { AppIcons } from './icons';

export interface IconItem {
  key: string;
  svgIcon: string;
}

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  public icons = {
    tree: AppIcons.TREE_ICON,
    kkl: AppIcons.KKL_ICON,
    tree_gradient_tac: AppIcons.TREE_GRADIENT_TAC_ICON,
    bottom_tree_tac: AppIcons.BOTTOM_TREE_LOGO_TAC_ICON,

    // TABLE ICONS
    drag_n_drop: AppIcons.DRAG_N_DROP,

    // ACTIONS ICONS
    two_arrows: AppIcons.TWO_ARROWS_UP,
    two_arrows_down: AppIcons.TWO_ARROWS_DOWN,
    reports: AppIcons.REPORTS_ICON,
    reload: AppIcons.RELOAD_ICON,
    print: AppIcons.PRINT_ICON,
    save: AppIcons.SAVE_ICON,
    clipboard: AppIcons.CLIPBOARD_ICON,
    add: AppIcons.ADD_ICON,
    email: AppIcons.EMAIL_ICON,
    logo: AppIcons.LOGO_ICON,
    location: AppIcons.LOCATION_ICON,
    calendar: AppIcons.CALENDAR_ICON,
    excel: AppIcons.EXCEL_ICON,
    info: AppIcons.INFO_ICON,
    nike: AppIcons.NIKE_ICON,
    helper: AppIcons.HELPER_ICON,
    phone: AppIcons.PHONE_ICON,
    time: AppIcons.TIME_ICON,
    closepopup: AppIcons.CLOSE_POPUP_ICON,
    send: AppIcons.SEND_ICON,
    clear_with_background: AppIcons.CLEAR_WITH_BACKGROUND_ICON,
    close_box: AppIcons.CLOSE_WITH_BOX_ICON,
    close_table: AppIcons.CLOSE_TABLE,

    cancel: AppIcons.CANCEL_ICON,
    trash_delete: AppIcons.TRASH_DELETE_ICON,
    add_circle: AppIcons.ADD_ICON_WITH_CIRCLE,
    open_border: AppIcons.OPEN_PLUS_WITH_BORDER,
    open: AppIcons.OPEN_PLUS,
    three_points: AppIcons.THREE_POINTS_ICON,

    //-------CONTRACTS ICONS--------------------------------------------------------------

    // STEPPER
    offer: AppIcons.ORDER_ICON,
    medal: AppIcons.MEDAL_ICON,
    send_mail: AppIcons.SEND_MAIL_ICON,
    contact: AppIcons.CONTACT_DETAILS_ICON,

    // DASHBOARD
    evaluation: AppIcons.EVALUATION_ICON,
    group: AppIcons.GROUP_ICON,
    connect: AppIcons.CONNECT_ICON,
    supplier_check: AppIcons.SUPPLIER_CHECK_ICON,

    // MENU
    folder: AppIcons.DOCUMENT_ICON,

    // DIALOG
    accept_circle: AppIcons.ACCEPT_WITH_CIRCLE,
    cancel_circle: AppIcons.CANCEL_WITH_CIRCLE,

    //-------FORESTRY ICONS--------------------------------------------------------------
    strategy: AppIcons.STRATEGY,
    logs: AppIcons.LOGS,
    map: AppIcons.MAP,
    plant: AppIcons.PLANT,
    research: AppIcons.RESEARCH,
    forest: AppIcons.FOREST,
    driver_license: AppIcons.DRIVER_LICENSE,
    car_parking: AppIcons.CAR_PARKING,

    //-------LANDS ICONS--------------------------------------------------------------

    select: AppIcons.SELECT_ICON,
    home: AppIcons.HOME_ICON,
    building: AppIcons.BUILDING_ICON,
    portfolio: AppIcons.PORTFOLIO_ICON,
    measurements: AppIcons.MEASUREMENTS_ICON,
    list: AppIcons.LIST_ICON,

    // lobby
    supervision: AppIcons.SUPERVISION_ICON,
    planing: AppIcons.PLANING_ICON,
    incoming: AppIcons.INCOMING_ICON,
    survey: AppIcons.SURVEY_ICON,
    expense: AppIcons.EXPENSE_ICON,
    committee: AppIcons.COMMITTEE_ICON,
    transactions: AppIcons.TRANSACTION_ICON,
    tree_gradient_lands: AppIcons.TREE_GRADIENT_LANDS_ICON,
    tree_bottom_lands: AppIcons.BOTTOM_TREE_LOGO_LANDS_ICON,
    estate: AppIcons.ESTATE_ICON,
    mail: AppIcons.MAIL_ICON,
    meetings: AppIcons.MEETINGS,
    union: AppIcons.UNION,
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

  public addIconsToList(iconsMap: { [key: string]: string }) {
    this.icons = { ...this.icons, ...iconsMap };
  }

}
