export interface Service {
  label: string;
  description: Array<
    | { type: "paragraph"; content: string }
    | { type: "list"; title: string; items: Array<string> }
  >;
  imagePath: string;
  price?: number;
}
