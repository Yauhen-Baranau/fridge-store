export interface Category {
  id: string;
  label: string;
  description: Array<
    | { type: "paragraph"; content: string }
    | { type: "list"; title: string; items: Array<string> }
  >;
  imagePath: string;
}