import { contactHrefs } from "@constants/contact-info";
import Link from "next/link";
import Image from "next/image";
import useResponsive from "@hooks/use-responsive";
import NondesktopNavToggleButton from "../nondesktop-nav-toggle-button/nondesktop-nav-toggle-button";
import styles from './nondesktop-icons.module.scss';

export default function NondesktopIcons() {
  const { isMobile } = useResponsive();

  return <div className={styles.icons}>
    {isMobile && (
      <Link prefetch={false} href={contactHrefs.address}>
        <Image
          src="/icons/location.svg"
          alt="Маркер на карте"
          width={20}
          height={20}
        />
      </Link>
    )}
    <Link prefetch={false} href={contactHrefs.email}>
      <Image
        src="/icons/envelope.svg"
        alt="Конверт"
        width={isMobile ? 20 : 30}
        height={isMobile ? 20 : 30}
      />
    </Link>
    <Link prefetch={false} href={contactHrefs.phone}>
      <Image
        src="/icons/phone.svg"
        alt="Телефон"
        width={isMobile ? 20 : 30}
        height={isMobile ? 20 : 30}
      />
    </Link>
    <NondesktopNavToggleButton />
  </div>
}