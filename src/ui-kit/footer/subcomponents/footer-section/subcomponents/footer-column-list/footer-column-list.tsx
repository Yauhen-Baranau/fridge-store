import List from "@ui-kit/list/list";
import Link from "@ui-kit/static-link/static-link";
import styles from './footer-column-list.module.scss';
import composeClassName from "@helpers/compose-class-name";

export default function FooterColumnList({
  items,
  isContacts = false,
}: {
  items: Array<
    { type: 'link', label: string, href: string, iconPath?: string }
    | { type: 'general', content: React.ReactNode, iconPath?: string }
  >,
  isContacts?: boolean
}) {
  return <List
    customClass={composeClassName(
      styles.list,
      isContacts && styles.contacts
    )}
    items={items.map(item => {
      const content = item.type === 'link'
        ? <Link href={item.href}>{item.label}</Link>
        : item.content;
      return {
        content,
        icon: item.iconPath
          ? {
            path: item.iconPath,
            width: 24,
            height: 24,
          }
          : undefined,
      }
    })}
  />
}