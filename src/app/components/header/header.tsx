'use server';

import Button from '@src/ui-kit/button/button';
import styles from './header.module.scss';
import composeClassName from '@src/helpers/compose-class-name';
import Socials from '@src/ui-kit/socials/socials';
import { contactInfo } from '@constants/contact-info';
import Link from 'next/link';
import Image from 'next/image';

export default async function Header({ customClass }: { customClass?: string }) {
  return <header className={composeClassName(styles.header, customClass)}>
    <Link href='/'>
      <Image className={styles.logo} src='/logo.webp' alt='Логотип' width={227} height={40} />
    </Link>
    <div className={styles['open-hours']}>
      <div className={styles['icon-text-pair']}>
        <Image src='/icons/location.svg' alt='Маркер на карте' width={20} height={20} />
        <Link href='https://yandex.by/maps/157/minsk/house/Zk4YcgJkTEMEQFtpfXVwcH9gZw==/?ll=27.454669%2C53.911263&z=19.8'>{contactInfo.address}</Link>
      </div>
      <div className={styles['icon-text-pair']}>
        <Image src='/icons/clock.svg' alt='Часы' width={20} height={20} />
        <span>{contactInfo.openHours}</span>
      </div>
    </div>
    <div className={styles.contacts}>
      <div className={styles['icon-text-pair']}>
        <Image src='/icons/phone.svg' alt='Телефон' width={20} height={20} />
        <Link href={`tel:${contactInfo.phoneNumber
          .split(' ').join('')
          .split('-').join('')
          .split('(').join('')
          .split(')').join('')
        }`}>{contactInfo.phoneNumber}</Link>
      </div>
      <div className={styles['icon-text-pair']}>
        <Image src='/icons/envelope.svg' alt='Конверт' width={20} height={20} />
        <Link href={`mailto:${contactInfo.email}`}>{contactInfo.email}</Link>
      </div>
    </div>
    <Socials />
    <Button customClass={styles['call-me-back']} text='Заказать звонок' />
  </header>
}