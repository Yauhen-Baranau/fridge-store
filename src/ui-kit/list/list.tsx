import './list.scss';
import Accordion from '@ui-kit/accordion/accordion';
import PopupWrapper from '@ui-kit/popup/popup';
import composeClassName from '@src/helpers/compose-class-name';

interface ListItem {
  text: string;
  iconPath?: string;
  redirectTo?: string;
  subItems?: Array<ListItem>;
}

export default function List({
  items,
  direction = 'vertical',
  nestedItemsStyle = 'always-visible',
  customClass,
}: {
  items: Array<ListItem>,
  direction?: 'vertical' | 'horizontal',
  nestedItemsStyle?: 'always-visible' | 'accordion' | 'popup',
  customClass?: string,
}) {
  return <ul className={composeClassName('list', direction, customClass)}>
    {items.map((item, index) => {
      if (!item.subItems || item.subItems.length === 0) {
        return <li key={index}>{item.text}</li>;
      }

      const nestedList = <List items={item.subItems} />;
      const nestedElement = (() => {
        switch (nestedItemsStyle) {
          case 'accordion':
            return <Accordion>{nestedList}</Accordion>
          case 'popup':
            return <PopupWrapper popupContent={nestedList}><div>{item.text}</div></PopupWrapper>
          default:
            return nestedList;
        }
      })();
      return <li key={index}>{nestedElement}</li>
    })}
  </ul>
}