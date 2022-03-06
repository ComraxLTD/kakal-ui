
export class StatusBarsModel {

    public label  : string
    public authorizedBars  : number
    public totalBars  : number
  
    constructor(
      options: {
        label?: string,
        authorizedBars:number,
        totalBars:number
      }
    ) {
      this.label = options?.label;
      this.authorizedBars = options?.authorizedBars;
      this.totalBars = options?.totalBars;
    }
  
  }