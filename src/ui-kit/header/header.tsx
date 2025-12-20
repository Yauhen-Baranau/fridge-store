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
import List from '@ui-kit/list/list';

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
    <Link className={styles['logo-wrapper']} href='/'>
      <Image className={styles.logo} src='/logo.webp' fill alt='Логотип' />
    </Link>
    {!isMobile && <address className={styles.contacts}>
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
    </address>}
    {isDesktop && <Button
      customClass={styles['call-me-back']}
      text='Заказать звонок'
      onClick={() => showDialog(<DialogForm />)}
    />}
    {(isIpad || isMobile) && <div className={styles.icons}>
      {isMobile && <Link href='https://yandex.by/maps/157/minsk/house/Zk4YcgJkTEMEQFtpfXVwcH9gZw==/?ll=27.454669%2C53.911263&z=19.8'>
        <Image src='/icons/location.svg' alt='Маркер на карте' width={20} height={20} />
      </Link>}
      <Link href={`mailto:${contactInfo.email}`}>
        <Image
          src='/icons/envelope.svg'
          alt='Конверт'
          width={isMobile ? 20 : 30}
          height={isMobile ? 20 : 30}
        />
      </Link>
      <Link href={`tel:${cleanPhoneNumber}`}>
        <Image
          src='/icons/phone.svg'
          alt='Телефон'
          width={isMobile ? 20 : 30}
          height={isMobile ? 20 : 30}
        />
      </Link>
      <Button
        customClass={composeClassName(
          styles['navigation-dialog-toggle-button'],
          navigationDialogOpen && styles.toggled,
        )}
        style='text-only'
        icon={{
          path: navigationDialogOpen ? '/icons/cross.svg' : '/icons/menu.svg',
          width: isMobile ? 20 : 25,
          height: isMobile ? 20 : 25
        }}
        onClick={() => {
          showDialog(
            <div className={styles['dialog-content']}>
              <Navigation withContacts={!isMobile} />
              {isMobile && <>
                <address className={styles['dialog-address']}>
                  <h3 className={styles['dialog-address-title']}>Контакты</h3>
                  <List customClass={styles['contact-info']} items={[
                    {
                      content: <Link href={`tel:${cleanPhoneNumber}`}>{contactInfo.phoneNumber}</Link>,
                      icon: { path: '/icons/phone.svg', width: 24, height: 24 }
                    },
                    {
                      content: <Link href={`mailto:${contactInfo.email}`}>{contactInfo.email}</Link>,
                      icon: { path: '/icons/envelope.svg', width: 24, height: 24 }
                    },
                    {
                      content: <Link href='https://yandex.by/maps/157/minsk/house/Zk4YcgJkTEMEQFtpfXVwcH9gZw==/?ll=27.454669%2C53.911263&z=19.8'>{contactInfo.address}</Link>,
                      icon: { path: '/icons/location.svg', width: 24, height: 24 }
                    },
                    {
                      content: contactInfo.openHours,
                      icon: { path: '/icons/clock.svg', width: 24, height: 24 }
                    },
                  ]} />
                </address>
                <Socials customClass={styles['dialog-socials']} />
              </>}
              <Button
                customClass={styles['call-me-back-dialog-button']}
                text='Заказать звонок'
                icon={!isMobile ? undefined : {
                  path: '/icons/phone-4.svg',
                  width: 24,
                  height: 24,
                }}
                onClick={() => {
                  showDialog(<DialogForm />);
                  setNavigationDialogOpen(false);
                }}
              />
            </div>,
            {
              withCloseButton: false,
              transparentBackdrop: true,
              withBackdropClose: true,
              customPosition: { right: isMobile ? 0 : 20, top: 80 },
              onClose: () => setNavigationDialogOpen(false),
            }
          );
          setNavigationDialogOpen(true);
        }}
      />
    </div>}
  </header>
}