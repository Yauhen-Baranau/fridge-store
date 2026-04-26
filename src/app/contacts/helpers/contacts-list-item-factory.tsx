import { ListItem } from "@ui-kit/list/list-item-interface";
import Link from "next/link";

export const contactsListItemFactory = ({
  content,
  iconPath,
  href = '',
}: {
  content: string,
  iconPath: string,
  href?: string,
}): ListItem => {
  return {
    content: href ? <Link prefetch={false} href={href}>{content}</Link> : content,
    icon: {
      path: iconPath,
      width: 24,
      height: 24,
    }
  }
}