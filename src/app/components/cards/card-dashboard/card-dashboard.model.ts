import { ListItem } from "../../menu/list-item.model";

export class CardDashboardModel implements ListItem {

  public label?: string;
  public path?: string;
  public svgUrl?: string;
  public scale?: number;
  public size?: number;

  constructor(
    options: {
      label?: string
      path?: string
      svgUrl?: string
      scale? : number
      size? : number
      isActive?: boolean
    }
  ) {
    this.label = options?.label;
    this.path = options?.path;
    this.svgUrl = options?.svgUrl;
    this.size = options?.size;
    this.scale = options?.scale;
  }

}




