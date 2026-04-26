import { ListItem } from "@ui-kit/list/list-item-interface";
import Link from "@ui-kit/static-link/static-link";

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
    content: href ? <Link href={href}>{content}</Link> : content,
    icon: {
      path: iconPath,
      width: 24,
      height: 24,
    }
  }
}