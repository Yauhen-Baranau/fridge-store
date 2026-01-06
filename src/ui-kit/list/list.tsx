"use client";

import "./list.scss";
import Accordion from "@ui-kit/accordion/accordion";
import PopupWrapper from "@ui-kit/popup/popup";
import composeClassName from "@src/helpers/compose-class-name";
import Image from "next/image";
import { ListItem } from "./list-item-interface";

export default function List({
  items,
  direction = "vertical",
  nestedItemsStyle = "always-visible",
  customClass,
}: {
  items: Array<ListItem>;
  direction?: "vertical" | "horizontal";
  nestedItemsStyle?: "always-visible" | "accordion" | "popup";
  customClass?: string;
}) {
  const getItemIconData = (item: ListItem) => {
    const icon = item.icon && (
      <Image
        className="list-item-icon"
        src={item.icon.path}
        width={item.icon.width}
        height={item.icon.height}
        alt="Иконка"
      />
    );
    return {
      jsx: icon,
      position: item.icon?.position ?? "before",
    };
  };

  return (
    <ul className={composeClassName("list", direction, customClass)}>
      {items.map((item, index) => {
        let itemContent;
        const isNested = !!item.subItems?.length;

        const { jsx: iconJsx, position: iconPosition } = getItemIconData(item);
        const itemLabel = (
          <>
            {iconPosition === "before" && iconJsx}
            {item.content}
            {iconPosition === "after" && iconJsx}
          </>
        );

        if (!isNested) {
          itemContent = itemLabel;
        } else {
          const nestedList = <List items={item.subItems!} />;
          switch (nestedItemsStyle) {
            case "accordion":
              itemContent = (
                <Accordion
                  toggleAreaContent={itemLabel}
                  content={nestedList}
                  buttonStyle="none"
                />
              );
              break;
            case "popup":
              itemContent = (
                <PopupWrapper popupContent={nestedList}>
                  {itemLabel}
                </PopupWrapper>
              );
              break;
            default:
              itemContent = (
                <>
                  {itemLabel}
                  {nestedList}
                </>
              );
              break;
          }
        }

        return (
          <li
            className={composeClassName(
              "list-item",
              isNested && "nested-list-item",
            )}
            key={index}
          >
            {itemContent}
          </li>
        );
      })}
    </ul>
  );
}
