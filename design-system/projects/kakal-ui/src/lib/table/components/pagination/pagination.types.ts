import { PaginationInstance } from "ngx-pagination";

export class PaginationModel {
  constructor(
    public paginate: boolean,
    public paginator: PaginationInstance,
  ) {

  }
}

export default interface PaginationChangeEvent {
  next: number;
  current: number;
  perPage?: number;
}
