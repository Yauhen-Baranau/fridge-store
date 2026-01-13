import { contactHrefs, contactInfo } from "@constants/contact-info"
import List from "@ui-kit/list/list"
import Socials from "@ui-kit/socials/socials"
import Link from "next/link"
import styles from './mobile-nav-menu-contacts.module.scss';

export default function MobileNavMenuContacts() {
  return <>
    <address className={styles["dialog-address"]}>
      <h3 className={styles["dialog-address-title"]}>
        Контакты
      </h3>
      <List
        customClass={styles["contact-info"]}
        items={[
          {
            content: (
              <Link href={contactHrefs.phone}>{contactInfo.phoneNumber}</Link>
            ),
            icon: {
              path: "/icons/phone.svg",
              width: 24,
              height: 24,
            },
          },
          {
            content: (
              <Link href={contactHrefs.email}>{contactInfo.email}</Link>
            ),
            icon: {
              path: "/icons/envelope.svg",
              width: 24,
              height: 24,
            },
          },
          {
            content: (
              <Link href={contactHrefs.address}>{contactInfo.address}</Link>
            ),
            icon: {
              path: "/icons/location.svg",
              width: 24,
              height: 24,
            },
          },
          {
            content: contactInfo.openHours,
            icon: {
              path: "/icons/clock.svg",
              width: 24,
              height: 24,
            },
          },
        ]}
      />
    </address>
    <Socials customClass={styles["dialog-socials"]} />
  </>
}