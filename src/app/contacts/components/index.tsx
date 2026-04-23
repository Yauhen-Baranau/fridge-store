"use client"
import styles from "@src/app/contacts/page.module.scss";
import List from "@ui-kit/list/list";
import { contactListItems } from "@src/app/contacts/constants/contacts-list-items";
import { contactsListItemFactory } from "@src/app/contacts/helpers/contacts-list-item-factory";
import Map from "@src/app/contacts/subcomponents/map";
import BackgroundSnowflake from "@ui-kit/background-snowflake/background-snowflake";
import CallMeBackForm from "@ui-kit/call-me-back-form/call-me-back-form";
import useResponsive from "@hooks/use-responsive";

export const Contacts = () => {
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
  )
}