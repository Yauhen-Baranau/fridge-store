export interface Category {
  id: string;
  label: string;
  seoTitle: string;
  seoDescription: string;
  description: Array<
    | { type: "paragraph"; content: string }
    | { type: "list"; title: string; items: Array<string> }
  >;
  imagePath: string;
}