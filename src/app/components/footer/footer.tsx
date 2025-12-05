'use client'; // to pass the scroll up callback to the button

import List from '@src/ui-kit/list/list';
import styles from './footer.module.scss';
import composeClassName from '@src/helpers/compose-class-name';
import Link from 'next/link';
import { contactInfo } from '@src/constants/contact-info';
import Socials from '@src/ui-kit/socials/socials';
import Button from '@src/ui-kit/button/button';

export default function Footer() {
  return <footer className={styles.footer}>
    <h3 className={styles['footer-column-title']}>ИНФОРМАЦИЯ</h3>
    <h3 className={styles['footer-column-title']}>УСЛУГИ</h3>
    <h3 className={styles['footer-column-title']}>КОНТАКТЫ</h3>
    <List customClass={styles['footer-column-content']} items={[
      { content: 'О компании' },
      { content: 'Цены' },
      { content: 'Оплата' },
      { content: 'Отзывы' },
      { content: 'Популярные вопросы' },
      { content: 'Частые проблемы' },
      { content: 'Контакты' },
    ]} />
    <List customClass={styles['footer-column-content']} items={[
      { content: 'Услуги по ремонту холодильников' },
      { content: 'Ремонт холодильников по виду' },
      { content: 'Ремонт холодильников по модели' },
      { content: 'Ремонт холодильников по городам' },
    ]} />
    <List customClass={styles['footer-column-content']} items={[
      { content: contactInfo.phoneNumber, iconPath: 'icons/phone-4.webp' },
      { content: contactInfo.email, iconPath: 'icons/envelope-2.webp' },
      { content: contactInfo.address, iconPath: 'icons/location-2.webp' },
      { content: contactInfo.openHours, iconPath: 'icons/clock-2.webp' },
      { content: <Socials customClass={styles.socials} /> }
    ]} />
    <div className={styles['footer-column-footer']}>&copy; Copyright</div>
    <div className={composeClassName(styles['footer-column-footer'], styles['privacy-policy'])}>Политика конфиденциальности</div>
    <div className={styles['footer-column-footer']}>
      <Link className={styles['designed-by-link']} href='https://www.instagram.com/kutsenko_olga1990?igsh=ZDlsY3JoNG0zeTh1'>Design by Volha Kutsenka</Link>
      <Button
        customClass={styles['scroll-up-button']}
        iconPath='icons/arrow-up.webp'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </div>
  </footer>
}