'use server';

// not using css modules because this component has a lot of
// nested components that need custom styling
import composeClassName from '@src/helpers/compose-class-name';
import './navigation.scss';
import List from '@src/ui-kit/list/list';
import Link from 'next/link';
import { Routes } from '@src/constants/routes';

export default async function Navigation({ customClass }: { customClass?: string }) {
  return <nav className={composeClassName('nav', customClass)}>
    <List
      customClass='nav-list'
      direction='horizontal'
      nestedItemsStyle='popup'
      items={[
        {
          content: <Link href={Routes.FridgeRepairServices}>УСЛУГИ ПО РЕМОНТУ ХОЛОДИЛЬНИКОВ</Link>,
          iconPath: 'icons/chevron-down.webp',
          iconPosition: 'after',
          subItems: [
            { iconPath: 'icons/square-small.webp', content: <Link href='https://google.com'>ЗАМЕНА И РЕМОНТ КОМПОНЕНТОВ СИСТЕМЫ ОХЛАЖДЕНИЯ</Link> },
            { iconPath: 'icons/square-small.webp', content: <Link href='https://google.com'>РЕМОНТА И ЗАМЕНА ЭЛЕКТРИЧЕСКИХ КОМПОНЕНТОВ</Link> },
            { iconPath: 'icons/square-small.webp', content: <Link href='https://google.com'>ЗАМЕНА ЭЛЕМЕНТОВ СИСТЕМЫ NO FROST</Link> },
            { iconPath: 'icons/square-small.webp', content: <Link href='https://google.com'>ЗАМЕНА И РЕМОНТ МЕХАНИЧЕСКИХ УЗЛОВ</Link> },
            { iconPath: 'icons/square-small.webp', content: <Link href='https://google.com'>РЕМОНТ ДВЕРЕЙ И КОРПУСА</Link> },
            { iconPath: 'icons/square-small.webp', content: <Link href='https://google.com'>ПРОЧИЕ УСЛУГИ</Link> },
          ],
        },
        {
          content: <Link href='https://google.com'>ВИДЫ ХОЛОДИЛЬНИКОВ</Link>,
          iconPath: 'icons/chevron-down.webp',
          iconPosition: 'after',
          subItems: [
            { iconPath: 'icons/square-small.webp', content: <Link href='https://google.com'>РЕМОНТ БЫТОВЫХ ХОЛОДИЛЬНИКОВ</Link> },
            { iconPath: 'icons/square-small.webp', content: <Link href='https://google.com'>РЕМОНТ КОММЕРЧЕСКИХ ХОЛОДИЛЬНИКОВ</Link> },
            { iconPath: 'icons/square-small.webp', content: <Link href='https://google.com'>РЕМОНТ СПЕЦИАЛЬНЫХ ХОЛОДИЛЬНЫХ УСТАНОВОК</Link> },
            { iconPath: 'icons/square-small.webp', content: <Link href='https://google.com'>РЕМОНТ ПРОМЫШЛЕННЫХ СИСТЕМ ОХЛАЖДЕНИЯ</Link> },
          ],
        },
        {
          content: <Link href='https://google.com'>ЦЕНЫ</Link>,
        },
        {
          content: <Link href='https://google.com'>ОПЛАТА</Link>,
        },
        {
          content: <Link href='https://google.com'>ОТЗЫВЫ</Link>,
        },
        {
          content: <Link href='https://google.com'>О КОМПАНИИ</Link>,
        },
        {
          content: <Link href='https://google.com'>КОНТАКТЫ</Link>,
        },
      ]} />
  </nav>
}