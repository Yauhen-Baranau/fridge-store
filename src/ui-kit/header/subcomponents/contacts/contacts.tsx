import Image from 'next/image';
import styles from './contacts.module.scss';
import Link from 'next/link';
import { contactHrefs, contactInfo } from '@constants/contact-info';
import useResponsive from '@hooks/use-responsive';
import Socials from '@ui-kit/socials/socials';

export default function Contacts() {
  const { isMobile, isDesktop } = useResponsive();

  return <address className={styles.contacts}>
    {!isMobile && <>
      <div className={styles["icon-text-pair"]}>
        <Image
          src="/icons/location.svg"
          alt="Маркер на карте"
          width={20}
          height={20}
        />
        <Link href={contactHrefs.address}>{contactInfo.address}</Link>
      </div>
      <div className={styles["icon-text-pair"]}>
        <Image src="/icons/clock.svg" alt="Часы" width={20} height={20} />
        <span>{contactInfo.openHours}</span>
      </div>
    </>}
    {isDesktop && <>
      <div className={`${styles["icon-text-pair"]} ${styles.phone}`}>
        <Image
          src="/icons/phone.svg"
          alt="Телефон"
          width={20}
          height={20}
        />
        <Link href={contactHrefs.phone}>{contactInfo.phoneNumber}</Link>
      </div>
      <div className={styles["icon-text-pair"]}>
        <Image
          src="/icons/envelope.svg"
          alt="Конверт"
          width={20}
          height={20}
        />
        <Link href={contactHrefs.email}>{contactInfo.email}</Link>
      </div>
    </>}
    {/*<Socials customClass={styles.socials} />*/}
  </address>
}