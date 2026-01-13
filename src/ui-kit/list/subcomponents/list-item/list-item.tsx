import composeClassName from "@helpers/compose-class-name";
import Accordion from "@ui-kit/accordion/accordion";
import { getItemIconData } from "@ui-kit/list/helpers/get-item-icon-data";
import List from "@ui-kit/list/list";
import { ListItem as ListItemInterface } from "@ui-kit/list/list-item-interface";
import PopupWrapper from "@ui-kit/popup/popup";

export default function ListItem({
  item,
  nestedItemsStyle = "always-visible",
}: {
  item: ListItemInterface,
  nestedItemsStyle?: "always-visible" | "accordion" | "popup",
}) {
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
    >
      {itemContent}
    </li>
  );
}