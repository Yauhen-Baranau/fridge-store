"use client";

import List from "@ui-kit/list/list";
import styles from "./page.module.scss";
import CallMeBackForm from "@ui-kit/call-me-back-form/call-me-back-form";
import useResponsive from "@hooks/use-responsive";
import BackgroundSnowflake from "@ui-kit/background-snowflake/background-snowflake";
import { contactsListItemFactory } from "./helpers/contacts-list-item-factory";
import Map from "./subcomponents/map";
import { contactListItems } from "./constants/contacts-list-items";

export default function ContactsPage() {
  const { isMobile } = useResponsive();

  return (
    <main className={styles.contacts}>
      <div className={styles["left-content"]}>
        <h1 className={styles.title}>Контакты</h1>
        <address>
          <List
            customClass={styles["contact-info"]}
            items={contactListItems.map(contactsListItemFactory)}
          />
        </address>
        <Map />
        {isMobile && (
          <BackgroundSnowflake
            width={105}
            height={101}
            right={40}
            top={30}
            rotation={-30}
          />
        )}
      </div>
      <CallMeBackForm />
    </main>
  );
}
