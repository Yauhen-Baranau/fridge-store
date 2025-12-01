import Accordion from '../accordion/accordion';
import styles from './list.module.scss';

interface ListItem {
  text: string;
  iconPath?: string;
  redirectTo?: string;
  subItems?: Array<ListItem>;
}

export default function List({ items }: { items: Array<ListItem> }) {
  return <ul className={styles.list}>
    {items.map((item, index) => {
      if (!item.subItems || item.subItems.length === 0) {
        return <li key={index}>{item.text}</li>;
      }
      return <Accordion key={index}>
        <List items={item.subItems} />
      </Accordion>
    })}
  </ul>
}