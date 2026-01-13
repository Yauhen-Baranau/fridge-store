"use client"; // to pass the scroll up callback to the button

import styles from "./footer.module.scss";
import Link from "next/link";
import { contactHrefs, contactInfo } from "@constants/contact-info";
import Socials from "@ui-kit/socials/socials";
import Button from "@ui-kit/button/button";
import { Routes } from "@constants/routes";
import { useHrefHelper } from "@contexts/href/href-context";
import useResponsive from "@hooks/use-responsive";
import { useMemo } from "react";
import FooterColumnList from "./subcomponents/footer-section/subcomponents/footer-column-list/footer-column-list";
import FooterSection from "./subcomponents/footer-section/footer-section";

export default function Footer() {
  const { getPageHref, getCategoryHref } = useHrefHelper();
  const { isMobile } = useResponsive();

  const privacyPolicyLink = useMemo(
    () => <Link href="https://google.com">Политика конфиденциальности</Link>,
    [],
  );
  const designedByLink = useMemo(
    () => (
      <Link
        className={styles["designed-by-link"]}
        href="https://www.instagram.com/kutsenko_olga1990?igsh=ZDlsY3JoNG0zeTh1"
      >
        Design by Volha Kutsenka
      </Link>
    ),
    [],
  );

  return (
    <footer className={styles.footer}>
      <FooterSection
        title={'Информация'}
        content={<FooterColumnList
          items={[
            { type: 'link', label: 'О компании', href: getPageHref(Routes.AboutUs) },
            { type: 'link', label: 'Цены', href: getPageHref(Routes.Prices) },
            { type: 'link', label: 'Оплата', href: getPageHref(Routes.Payment) },
            { type: 'link', label: 'Отзывы', href: getPageHref(Routes.Reviews) },
            { type: 'link', label: 'Популярные вопросы', href: getPageHref(Routes.FAQ) },
            { type: 'link', label: 'Частые проблемы', href: getPageHref(Routes.CommonFridgeProblems) },
            { type: 'link', label: 'Контакты', href: getPageHref(Routes.Contacts) },
          ]}
        />}
        footerContent={!isMobile && <>&copy; Copyright</>}
      />
      <FooterSection
        title={'Услуги'}
        content={<FooterColumnList
          items={[
            { type: 'link', label: 'Услуги по ремонту холодильников', href: getCategoryHref('1') },
            { type: 'link', label: 'Ремонт холодильников по виду', href: 'https://google.com' },
            { type: 'link', label: 'Ремонт холодильников по модели', href: 'https://google.com' },
            { type: 'link', label: 'Ремонт холодильников по городам', href: 'https://google.com' },
          ]}
        />}
        footerContent={!isMobile && privacyPolicyLink}
      />
      <FooterSection
        title={'Контакты'}
        content={<address>
          <FooterColumnList
            items={[
              { type: 'link', label: contactInfo.phoneNumber, href: contactHrefs.phone, iconPath: '/icons/phone-4.svg' },
              { type: 'link', label: contactInfo.email, href: contactHrefs.email, iconPath: '/icons/envelope-2.svg' },
              { type: 'link', label: contactInfo.address, href: contactHrefs.address, iconPath: '/icons/location-2.svg' },
              { type: 'general', content: contactInfo.openHours, iconPath: '/icons/clock-2.svg' },
              { type: 'general', content: !isMobile && <Socials customClass={styles.socials} /> },
            ]}
            isContacts={true}
          />
        </address>}
        footerContent={<>
          {!isMobile ? designedByLink : privacyPolicyLink}
          <Button
            customClass={styles["scroll-up-button"]}
            icon={{
              path: "/icons/thick-arrow-up.svg",
              width: 24,
              height: 24,
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </>}
      />
      {isMobile && (
        <div className={styles["mobile-footer-lower-block"]}>
          <p>&copy; Copyright</p>
          {designedByLink}
        </div>
      )}
    </footer>
  );
}
