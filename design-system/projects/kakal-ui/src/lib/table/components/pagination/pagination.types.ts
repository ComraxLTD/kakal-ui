import { PaginationInstance } from "ngx-pagination";

export class PaginationModel {
  constructor(
    public paginate: boolean,
    public paginator: PaginationInstance,
  ) {

  }
}

export default interface IPaginationChangeEvent {
  next: number;
  prev: number;
}
