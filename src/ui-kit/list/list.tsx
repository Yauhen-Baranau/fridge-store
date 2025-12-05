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

      const icon = item.iconPath && <img className='list-item-icon' src={item.iconPath} alt='Иконка' />
      if (icon && !item.iconPosition) {
        item.iconPosition = 'before';
      }
      const itemLabel = <>
        {item.iconPosition === 'before' && icon}
        {item.content}
        {item.iconPosition === 'after' && icon}</>

      if (!isNested) {
        itemContent = itemLabel;
      } else {
        const nestedList = <List items={item.subItems!} />;
        switch (nestedItemsStyle) {
            case 'accordion':
              itemContent = <Accordion>{nestedList}</Accordion>
              break;
            case 'popup':
              itemContent = <PopupWrapper popupContent={nestedList}>{itemLabel}</PopupWrapper>
              break;
            default:
              itemContent = <>
                {itemLabel}
                {nestedList}
              </>;
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