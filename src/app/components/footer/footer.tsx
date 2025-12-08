'use client'; // to pass the scroll up callback to the button

import List from '@src/ui-kit/list/list';
import styles from './footer.module.scss';
import Link from 'next/link';
import { contactInfo } from '@constants/contact-info';
import Socials from '@src/ui-kit/socials/socials';
import Button from '@src/ui-kit/button/button';

export default function Footer() {
  return <footer className={styles.footer}>
    <h3 className={styles['footer-column-title']}>ИНФОРМАЦИЯ</h3>
    <h3 className={styles['footer-column-title']}>УСЛУГИ</h3>
    <h3 className={styles['footer-column-title']}>КОНТАКТЫ</h3>
    <List customClass={styles['footer-column-content']} items={[
      { content: <Link href='https://google.com'>О компании</Link> },
      { content: <Link href='https://google.com'>Цены</Link> },
      { content: <Link href='https://google.com'>Оплата</Link> },
      { content: <Link href='https://google.com'>Отзывы</Link> },
      { content: <Link href='https://google.com'>Популярные вопросы</Link> },
      { content: <Link href='https://google.com'>Частые проблемы</Link> },
      { content: <Link href='https://google.com'>Контакты</Link> },
    ]} />
    <List customClass={styles['footer-column-content']} items={[
      { content: <Link href='https://google.com'>Услуги по ремонту холодильников</Link> },
      { content: <Link href='https://google.com'>Ремонт холодильников по виду</Link> },
      { content: <Link href='https://google.com'>Ремонт холодильников по модели</Link> },
      { content: <Link href='https://google.com'>Ремонт холодильников по городам</Link> },
    ]} />
    <List customClass={styles['footer-column-content']} items={[
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
    <div className={styles['footer-column-footer']}>&copy; Copyright</div>
    <div className={styles['footer-column-footer']}>
      <Link href='https://google.com'>Политика конфиденциальности</Link>
    </div>
    <div className={styles['footer-column-footer']}>
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
    </div>
  </footer>
}