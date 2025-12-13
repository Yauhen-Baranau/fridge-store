'use client';

import List from '@ui-kit/list/list';
import styles from './page.module.scss';
import Link from 'next/link';
import CallMeBackForm from '@ui-kit/call-me-back-form/call-me-back-form';
import Image from 'next/image';
import { contactInfo } from '@src/constants/contact-info';

export default function ContactsPage() {
  return <main className={styles.contacts}>
    <div className={styles['left-content']}>
      <h1 className={styles.title}>Контакты</h1>
      <address>
        <List customClass={styles['contact-info']} items={[
          {
            content: <Link href={`tel:${contactInfo.phoneNumber
              .split(' ').join('')
              .split('-').join('')
              .split('(').join('')
              .split(')').join('')
              }`}>{contactInfo.phoneNumber}</Link>,
            icon: {
              path: '/icons/phone.svg',
              width: 24,
              height: 24,
            }
          },
          {
            content: <Link href={`mailto:${contactInfo.email}`}>{contactInfo.email}</Link>,
            icon: {
              path: '/icons/envelope.svg',
              width: 24,
              height: 24,
            }
          },
          {
            content: <Link href='https://yandex.by/maps/157/minsk/house/Zk4YcgJkTEMEQFtpfXVwcH9gZw==/?ll=27.454669%2C53.911263&z=19.8'>{contactInfo.address}</Link>,
            icon: {
              path: '/icons/location.svg',
              width: 24,
              height: 24,
            }
          },
          {
            content: contactInfo.openHours,
            icon: {
              path: '/icons/clock.svg',
              width: 24,
              height: 24,
            }
          },
        ]} />
      </address>
      <Link
        href="https://yandex.ru/maps/?um=constructor%3A6eb3d94e38002a26f66989cd354380fc22994b47206e36ed20eb07ff6d5d20d7&amp;source=constructorStatic"
        target="_blank"
      >
        <Image
          className={styles.map}
          src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A6eb3d94e38002a26f66989cd354380fc22994b47206e36ed20eb07ff6d5d20d7&amp;width=570&amp;height=283&amp;lang=ru_RU"
          width={570}
          height={283}
          alt=""
        />
      </Link>
    </div>
    <CallMeBackForm />
  </main>
}