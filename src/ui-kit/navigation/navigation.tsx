'use client';

// not using css modules because this component has a lot of
// nested components that need custom styling
import composeClassName from '@src/helpers/compose-class-name';
import './navigation.scss';
import List from '@ui-kit/list/list';
import Link from 'next/link';
import { Routes } from '@src/constants/routes';
import { useHrefHelper } from '@contexts/href-context';
import useResponsive from '@hooks/use-responsive';

export default function Navigation({
  customClass,
  withContacts = true,
}: {
  customClass?: string,
  withContacts?: boolean,
}) {
  const { getCategoryHref, getSubcategoryHref } = useHrefHelper();
  const { isDesktop } = useResponsive();

  return <nav className={composeClassName('nav', customClass)}>
    <List
      customClass='nav-list'
      direction={isDesktop ? 'horizontal' : 'vertical'}
      nestedItemsStyle={isDesktop ? 'popup' : 'accordion'}
      items={[
        {
          content: <Link href={getCategoryHref('1')} onClick={e => e.stopPropagation()}>Услуги по ремонту холодильников</Link>,
          icon: { path: '/icons/chevron-down.svg', width: 10, height: 7, position: 'after' },
          subItems: [
            {
              content: <Link href={getSubcategoryHref('1')}>Замена и ремонт компонентов системы охлаждения</Link>,
              icon: { path: '/icons/square-small.svg', width: 14, height: 14 },
            },
            {
              content: <Link href={getSubcategoryHref('2')}>Ремонт и замена электрических компонентов</Link>,
              icon: { path: '/icons/square-small.svg', width: 14, height: 14 },
            },
            {
              content: <Link href={getSubcategoryHref('3')}>Замена элементов системы No Frost</Link>,
              icon: { path: '/icons/square-small.svg', width: 14, height: 14 },
            },
            {
              content: <Link href={getSubcategoryHref('4')}>Замена и ремонт механических узлов</Link>,
              icon: { path: '/icons/square-small.svg', width: 14, height: 14 },
            },
            {
              content: <Link href={getSubcategoryHref('5')}>Ремонт дверей и корпуса</Link>,
              icon: { path: '/icons/square-small.svg', width: 14, height: 14 },
            },
            {
              content: <Link href={getSubcategoryHref('6')}>Прочие услуги</Link>,
              icon: { path: '/icons/square-small.svg', width: 14, height: 14 },
            },
          ],
        },
        {
          content: <Link href='https://google.com' onClick={e => e.stopPropagation()}>Виды холодильников</Link>,
          icon: { path: '/icons/chevron-down.svg', width: 10, height: 7, position: 'after' },
          subItems: [
            {
              content: <Link href='https://google.com'>Ремонт бытовых холодильников</Link>,
              icon: { path: '/icons/square-small.svg', width: 14, height: 14 },
            },
            {
              content: <Link href='https://google.com'>Ремонт коммерческих холодильников</Link>,
              icon: { path: '/icons/square-small.svg', width: 14, height: 14 },
            },
            {
              content: <Link href='https://google.com'>Ремонт специальных холодильных установок</Link>,
              icon: { path: '/icons/square-small.svg', width: 14, height: 14 },
            },
            {
              content: <Link href='https://google.com'>Ремонт промышленных систем охлаждения</Link>,
              icon: { path: '/icons/square-small.svg', width: 14, height: 14 },
            },
          ],
        },
        {
          content: <Link href={`/${Routes.Prices}`}>Цены</Link>,
        },
        {
          content: <Link href={`/${Routes.Payment}`}>Оплата</Link>,
        },
        {
          content: <Link href={`/${Routes.Reviews}`}>Отзывы</Link>,
        },
        {
          content: <Link href={`/${Routes.AboutUs}`}>О компании</Link>,
        },
        ...(!withContacts ? [] : [{
          content: <Link href={`/${Routes.Contacts}`}>Контакты</Link>,
        }])
      ]} />
  </nav>
}