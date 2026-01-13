import Image from "next/image";
import { ListItem } from "../list-item-interface";

export const getItemIconData = (item: ListItem) => {
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