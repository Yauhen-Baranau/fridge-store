'use server';

import Button from '@src/ui-kit/button/button';
import styles from './header.module.scss';
import composeClassName from '@src/helpers/compose-class-name';

export default async function Header({ customClass }: { customClass?: string }) {
  const address = 'г. Минск, ул. Домбровская, 9';
  const openHours = 'Пн-Вс с 09.00 до 21.00';
  const phoneNumber= '+375 (33) 364-18-81';
  const email = 'online888bazar@gmail.com';

  return <header className={composeClassName(styles.header, customClass)}>
    <img className={styles.logo} src='logo.webp' alt='Логотип' width={227} height={40} />
    <div className={styles['open-hours']}>
      <div className={styles['icon-text-pair']}>
        <img className={styles['header-icon']} src='icons/location.webp' alt='Иконка' />
        <span className={styles['header-text']}>{address}</span>
      </div>
      <div className={styles['icon-text-pair']}>
        <img className={styles['header-icon']} src='icons/clock.webp' alt='Иконка' />
        <span>{openHours}</span>
      </div>
    </div>
    <div className={styles.contacts}>
      <div className={styles['icon-text-pair']}>
        <img className={styles['header-icon']} src='icons/phone.webp' alt='Иконка' />
        <span>{phoneNumber}</span>
      </div>
      <div className={styles['icon-text-pair']}>
        <img className={styles['header-icon']} src='icons/envelope.webp' alt='Иконка' />
        <span>{email}</span>
      </div>
    </div>
    <div className={styles.socials}>
      <img className={styles['socials-icon']} src='icons/viber.webp' alt='Иконка' />
      <img className={styles['socials-icon']} src='icons/whatsapp.webp' alt='Иконка' />
      <img className={styles['socials-icon']} src='icons/telegram.webp' alt='Иконка' />
    </div>
    <Button customClass={styles['call-me-back']} text='Заказать звонок' />
  </header>
}