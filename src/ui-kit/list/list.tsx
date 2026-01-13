"use client";

import "./list.scss";
import composeClassName from "@src/helpers/compose-class-name";
import { ListItem as ListItemInterface } from "./list-item-interface";
import ListItem from "./subcomponents/list-item/list-item";

export default function List({
  items,
  direction = "vertical",
  nestedItemsStyle = "always-visible",
  customClass,
}: {
  items: Array<ListItemInterface>;
  direction?: "vertical" | "horizontal";
  nestedItemsStyle?: "always-visible" | "accordion" | "popup";
  customClass?: string;
}) {
  return (
    <ul className={composeClassName("list", direction, customClass)}>
      {items.map((item, index) => <ListItem
        key={index}
        item={item}
        nestedItemsStyle={nestedItemsStyle}
      />)}
    </ul>
  );
}
