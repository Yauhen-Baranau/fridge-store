'use client';

import Button from '@ui-kit/button/button';
import styles from './header.module.scss';
import composeClassName from '@src/helpers/compose-class-name';
import Socials from '@ui-kit/socials/socials';
import { contactInfo } from '@constants/contact-info';
import Link from 'next/link';
import Image from 'next/image';
import DialogForm from '../dialog-form/dialog-form';
import { useDialog } from '@contexts/dialog-context';
import useResponsive from '@hooks/use-responsive';
import { useMemo, useState } from 'react';
import Navigation from '@ui-kit/navigation/navigation';

export default function Header({ customClass }: { customClass?: string }) {
  const { showDialog } = useDialog();
  const { isDesktop, isIpad, isMobile } = useResponsive();
  const [navigationDialogOpen, setNavigationDialogOpen] = useState(false);
  const cleanPhoneNumber = useMemo(() => {
    return contactInfo.phoneNumber
      .split(' ').join('')
      .split('-').join('')
      .split('(').join('')
      .split(')').join('')
  }, []);

  return <header className={composeClassName(styles.header, customClass)}>
    <Link href='/'>
      <Image className={styles.logo} src='/logo.webp' alt='Логотип' width={227} height={40} />
    </Link>
    <address className={styles.contacts}>
      <div className={styles['icon-text-pair']}>
        <Image src='/icons/location.svg' alt='Маркер на карте' width={20} height={20} />
        <Link href='https://yandex.by/maps/157/minsk/house/Zk4YcgJkTEMEQFtpfXVwcH9gZw==/?ll=27.454669%2C53.911263&z=19.8'>{contactInfo.address}</Link>
      </div>
      <div className={styles['icon-text-pair']}>
        <Image src='/icons/clock.svg' alt='Часы' width={20} height={20} />
        <span>{contactInfo.openHours}</span>
      </div>
      {isDesktop && <>
        <div className={styles['icon-text-pair']}>
          <Image src='/icons/phone.svg' alt='Телефон' width={20} height={20} />
          <Link href={`tel:${cleanPhoneNumber}`}>{contactInfo.phoneNumber}</Link>
        </div>
        <div className={styles['icon-text-pair']}>
          <Image src='/icons/envelope.svg' alt='Конверт' width={20} height={20} />
          <Link href={`mailto:${contactInfo.email}`}>{contactInfo.email}</Link>
        </div>
      </>}
      <Socials customClass={styles.socials} />
    </address>
    {isDesktop && <Button
      customClass={styles['call-me-back']}
      text='Заказать звонок'
      onClick={() => showDialog(<DialogForm />)}
    />}
    {(isIpad || isMobile) && <div className={styles.icons}>
      <Link href={`mailto:${contactInfo.email}`}><Image src='/icons/envelope.svg' alt='Конверт' width={30} height={30} /></Link>
      <Link href={`tel:${cleanPhoneNumber}`}><Image src='/icons/phone.svg' alt='Телефон' width={30} height={30} /></Link>
      <Button
        customClass={composeClassName(
          styles['navigation-dialog-toggle-button'],
          navigationDialogOpen && styles.toggled,
        )}
        style='text-only'
        icon={{
          path: navigationDialogOpen ? '/icons/cross.svg' : '/icons/menu.svg',
          width: 25,
          height: 25
        }}
        onClick={() => {
          showDialog(
            <Navigation customClass={styles['dialog-navigation']} />,
            {
              withCloseButton: false,
              transparentBackdrop: true,
              withBackdropClose: true,
              customPosition: { right: 20, top: 80 },
              onClose: () => setNavigationDialogOpen(false),
            }
          );
          setNavigationDialogOpen(true);
        }}
      />
    </div>}
  </header>
}