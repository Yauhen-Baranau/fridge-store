'use server';

// not using css modules because this component has a lot of
// nested components that need custom styling
import composeClassName from '@src/helpers/compose-class-name';
import './navigation.scss';
import List from '@ui-kit/list/list';
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
          content: <Link href={`/${Routes.FridgeRepairServices}`}>УСЛУГИ ПО РЕМОНТУ ХОЛОДИЛЬНИКОВ</Link>,
          icon: {
            path: '/icons/chevron-down.svg',
            width: 10,
            height: 7,
            position: 'after',
          },
          subItems: [
            {
              content: <Link href={`/${Routes.FridgeRepairServices}/${Routes.CoolingSystemComponentReplacementAndRepairs}`}>ЗАМЕНА И РЕМОНТ КОМПОНЕНТОВ СИСТЕМЫ ОХЛАЖДЕНИЯ</Link>,
              icon: {
                path: '/icons/square-small.svg',
                width: 14,
                height: 14,
              },
            },
            {
              content: <Link href='https://google.com'>РЕМОНТА И ЗАМЕНА ЭЛЕКТРИЧЕСКИХ КОМПОНЕНТОВ</Link>,
              icon: {
                path: '/icons/square-small.svg',
                width: 14,
                height: 14,
              },
            },
            {
              content: <Link href='https://google.com'>ЗАМЕНА ЭЛЕМЕНТОВ СИСТЕМЫ NO FROST</Link>,
              icon: {
                path: '/icons/square-small.svg',
                width: 14,
                height: 14,
              },
            },
            {
              content: <Link href='https://google.com'>ЗАМЕНА И РЕМОНТ МЕХАНИЧЕСКИХ УЗЛОВ</Link>,
              icon: {
                path: '/icons/square-small.svg',
                width: 14,
                height: 14,
              },
            },
            {
              content: <Link href='https://google.com'>РЕМОНТ ДВЕРЕЙ И КОРПУСА</Link>,
              icon: {
                path: '/icons/square-small.svg',
                width: 14,
                height: 14,
              },
            },
            {
              content: <Link href='https://google.com'>ПРОЧИЕ УСЛУГИ</Link>,
              icon: {
                path: '/icons/square-small.svg',
                width: 14,
                height: 14,
              },
            },
          ],
        },
        {
          content: <Link href='https://google.com'>ВИДЫ ХОЛОДИЛЬНИКОВ</Link>,
          icon: {
            path: '/icons/chevron-down.svg',
            width: 10,
            height: 7,
            position: 'after',
          },
          subItems: [
            {
              content: <Link href='https://google.com'>РЕМОНТ БЫТОВЫХ ХОЛОДИЛЬНИКОВ</Link>,
              icon: {
                path: '/icons/square-small.svg',
                width: 14,
                height: 14,
              },
            },
            {
              content: <Link href='https://google.com'>РЕМОНТ КОММЕРЧЕСКИХ ХОЛОДИЛЬНИКОВ</Link>,
              icon: {
                path: '/icons/square-small.svg',
                width: 14,
                height: 14,
              },
            },
            {
              content: <Link href='https://google.com'>РЕМОНТ СПЕЦИАЛЬНЫХ ХОЛОДИЛЬНЫХ УСТАНОВОК</Link>,
              icon: {
                path: '/icons/square-small.svg',
                width: 14,
                height: 14,
              },
            },
            {
              content: <Link href='https://google.com'>РЕМОНТ ПРОМЫШЛЕННЫХ СИСТЕМ ОХЛАЖДЕНИЯ</Link>,
              icon: {
                path: '/icons/square-small.svg',
                width: 14,
                height: 14,
              },
            },
          ],
        },
        {
          content: <Link href={`/${Routes.Prices}`}>ЦЕНЫ</Link>,
        },
        {
          content: <Link href={`/${Routes.Payment}`}>ОПЛАТА</Link>,
        },
        {
          content: <Link href='https://google.com'>ОТЗЫВЫ</Link>,
        },
        {
          content: <Link href={`/${Routes.AboutUs}`}>О КОМПАНИИ</Link>,
        },
        {
          content: <Link href='https://google.com'>КОНТАКТЫ</Link>,
        },
      ]} />
  </nav>
}