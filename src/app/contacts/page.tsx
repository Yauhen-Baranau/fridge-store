'use client';

import List from '@ui-kit/list/list';
import styles from './page.module.scss';
import Link from 'next/link';
import CallMeBackForm from '@ui-kit/call-me-back-form/call-me-back-form';
import Image from 'next/image';
import { contactInfo } from '@src/constants/contact-info';
import useResponsive from '@hooks/use-responsive';
import { useMemo } from 'react';
import BackgroundSnowflake from '@ui-kit/background-snowflake/background-snowflake';

export default function ContactsPage() {
  const { isDesktop, isMobile } = useResponsive();
  const mapImageDimensions = useMemo(() => {
    return isDesktop
      ? { width: 570, height: 283 }
      : { width: 360, height: 227 };
  }, [isDesktop]);

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
        className={styles['map-wrapper']}
        href="https://yandex.ru/maps/?um=constructor%3A6eb3d94e38002a26f66989cd354380fc22994b47206e36ed20eb07ff6d5d20d7&amp;source=constructorStatic"
        target="_blank"
      >
        <Image
          className={styles.map}
          src={`https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A6eb3d94e38002a26f66989cd354380fc22994b47206e36ed20eb07ff6d5d20d7&amp;width=${mapImageDimensions.width}&amp;height=${mapImageDimensions.height}&amp;lang=ru_RU`}
          fill
          alt=""
        />
      </Link>
      {isMobile && <BackgroundSnowflake width={105} height={101} right={40} top={30} rotation={-30} />}
    </div>
    <CallMeBackForm />
  </main>
}