export interface ListItem {
  content: string | React.ReactNode;
  icon?: {
    path: string;
    width: number;
    height: number;
    position?: "before" | "after";
  };
  redirectTo?: string;
  subItems?: Array<ListItem>;
}
