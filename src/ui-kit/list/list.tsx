'use client';

import './list.scss';
import Accordion from '@ui-kit/accordion/accordion';
import PopupWrapper from '@ui-kit/popup/popup';
import composeClassName from '@src/helpers/compose-class-name';

export interface ListItem {
  content: string | React.ReactNode;
  iconPath?: string;
  iconPosition?: 'before' | 'after';
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
        itemContent = item.content;
      } else {
        const nestedList = <List items={item.subItems!} />;
        switch (nestedItemsStyle) {
            case 'accordion':
              itemContent = <Accordion>{nestedList}</Accordion>
              break;
            case 'popup':
              itemContent = <PopupWrapper popupContent={nestedList}>{item.content}</PopupWrapper>
              break;
            default:
              itemContent = nestedList;
              break;
          }
      }
      
      const icon = item.iconPath && <img className='list-item-icon' src={item.iconPath} alt='Иконка' />
      if (icon && !item.iconPosition) {
        item.iconPosition = 'before';
      }

      return <li
        className={composeClassName('list-item', isNested && 'nested-list-item')}
        key={index}
      >
        {item.iconPosition === 'before' && icon}
        {itemContent}
        {item.iconPosition === 'after' && icon}
      </li>
    })}
  </ul>
}