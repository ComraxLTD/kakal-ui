export interface AssetStatus {
  label : string,
  value : number
}

export class AssetsModel {

  constructor(
    public id?: number,
    public block?: number,
    public division?: number,
    public subdivision?: number,
    public area?: number,
    public areaOwn?: number,
    public property?: string,
    public status?: AssetStatus,
    public description?: string,
    public location?: string,
  ) {

  }

}
