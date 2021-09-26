import { Palette } from "src/styles/theme";

export class IconModel {

  constructor(
    public key : string,
    public size : number,
    public type : string,
    public color? : Palette,
  ) {}
}
