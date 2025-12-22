'use client'; // to pass the scroll up callback to the button

import List from '@ui-kit/list/list';
import styles from './footer.module.scss';
import Link from 'next/link';
import { contactInfo } from '@constants/contact-info';
import Socials from '@ui-kit/socials/socials';
import Button from '@ui-kit/button/button';
import { Routes } from '@constants/routes';
import { useHrefHelper } from '@contexts/href-context';
import useResponsive from '@hooks/use-responsive';
import React from 'react';

export default function Footer() {
  const { getPageHref, getCategoryHref } = useHrefHelper();
  const { isMobile } = useResponsive();

  const footerColumnFactory = ({
    title,
    content,
    footerContent,
  }: {
    title: string,
    content: React.ReactNode,
    footerContent: React.ReactNode
  }) => {
    return <div className={styles['footer-column']}>
      <h3 className={styles['footer-column-title']}>{title}</h3>
      <div className={styles['footer-column-content']}>{content}</div>
      <div className={styles['footer-column-footer']}>{footerContent}</div>
    </div>
  };

  return <footer className={styles.footer}>
    {[
      {
        title: 'Информация',
        content: <List customClass={styles.list} items={[
          { content: <Link href={getPageHref(Routes.AboutUs)}>О компании</Link> },
          { content: <Link href={getPageHref(Routes.Prices)}>Цены</Link> },
          { content: <Link href={getPageHref(Routes.Payment)}>Оплата</Link> },
          { content: <Link href={getPageHref(Routes.Reviews)}>Отзывы</Link> },
          { content: <Link href={getPageHref(Routes.FAQ)}>Популярные вопросы</Link> },
          { content: <Link href={getPageHref(Routes.CommonFridgeProblems)}>Частые проблемы</Link> },
          { content: <Link href={getPageHref(Routes.Contacts)}>Контакты</Link> },
        ]} />,
        footerContent: <>&copy; Copyright</>,
      },
      {
        title: 'Услуги',
        content: <List customClass={styles.list} items={[
          { content: <Link href={getCategoryHref('1')}>Услуги по ремонту холодильников</Link> },
          { content: <Link href='https://google.com'>Ремонт холодильников по виду</Link> },
          { content: <Link href='https://google.com'>Ремонт холодильников по модели</Link> },
          { content: <Link href='https://google.com'>Ремонт холодильников по городам</Link> },
        ]} />,
        footerContent: <Link href='https://google.com'>Политика конфиденциальности</Link>,
      },
      {
        title: 'Контакты',
        content: <address className={styles.contacts}>
          <List customClass={styles.list} items={[
            {
              content: <Link href={`tel:${contactInfo.phoneNumber
                .split(' ').join('')
                .split('-').join('')
                .split('(').join('')
                .split(')').join('')
                }`}>{contactInfo.phoneNumber}</Link>,
              icon: {
                path: '/icons/phone-4.svg',
                width: 24,
                height: 24,
              }
            },
            {
              content: <Link href={`mailto:${contactInfo.email}`}>{contactInfo.email}</Link>,
              icon: {
                path: '/icons/envelope-2.svg',
                width: 24,
                height: 24,
              }
            },
            {
              content: <Link href='https://yandex.by/maps/157/minsk/house/Zk4YcgJkTEMEQFtpfXVwcH9gZw==/?ll=27.454669%2C53.911263&z=19.8'>{contactInfo.address}</Link>,
              icon: {
                path: '/icons/location-2.svg',
                width: 24,
                height: 24,
              }
            },
            {
              content: contactInfo.openHours,
              icon: {
                path: '/icons/clock-2.svg',
                width: 24,
                height: 24,
              }
            },
            { content: <Socials customClass={styles.socials} /> }
          ]} />
        </address>,
        footerContent: <>
          <Link className={styles['designed-by-link']} href='https://www.instagram.com/kutsenko_olga1990?igsh=ZDlsY3JoNG0zeTh1'>Design by Volha Kutsenka</Link>
          <Button
            customClass={styles['scroll-up-button']}
            icon={{
              path: '/icons/thick-arrow-up.svg',
              width: 24,
              height: 24,
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </>
      }
    ].map((params, index) => <React.Fragment key={index}>{footerColumnFactory(params)}</React.Fragment>)}
  </footer>
}