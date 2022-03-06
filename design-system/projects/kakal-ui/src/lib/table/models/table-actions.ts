
// interface for custom button action state
export interface ActionStateRules {
  showDelete: (item: any) => boolean;
  disableDelete: (item: any) => boolean;
  showEdit: (item: any) => boolean;
  disableEdit: (item: any) => boolean;
}
