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
      let itemContent;
      const isNested = !!item.subItems?.length;

      if (!isNested) {
        itemContent = item.text;
      } else {
        const nestedList = <List items={item.subItems!} />;
        switch (nestedItemsStyle) {
            case 'accordion':
              itemContent = <Accordion>{nestedList}</Accordion>
              break;
            case 'popup':
              itemContent = <PopupWrapper popupContent={nestedList}><span>{item.text}</span></PopupWrapper>
              break;
            default:
              itemContent = nestedList;
              break;
          }
      }
      return <li
        className={composeClassName('list-item', isNested && 'nested-list-item')}
        key={index}
      >
        {itemContent}
      </li>
    })}
  </ul>
}