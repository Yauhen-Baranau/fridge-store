import { ListItem } from "@ui-kit/list/list-item-interface";

export const guaranteeListItemFactory = (content: React.ReactNode): ListItem => {
  return {
    content: (
      <span>{content}</span>
    ),
    icon: {
      path: "/icons/circle.svg",
      width: 7,
      height: 7,
    },
  };
}