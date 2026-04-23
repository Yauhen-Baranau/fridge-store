"use client";

import List from "@ui-kit/list/list";
import styles from "./page.module.scss";
import { faqListItemFactory } from "./helpers/faq-list-item-factory";
import { faqList } from "./constants/faq-list";
import BackgroundSnowflakes from "@ui-kit/background-snowflakes/background-snowflakes";

export default function FaqPage() {
  return (
    <main className={styles.faq}>
      <h1 className={styles.title}>Популярные вопросы</h1>
      <List
        customClass={styles["faq-list"]}
        items={faqList.map((params) =>
          faqListItemFactory({ ...params, styles }),
        )}
      />
      <BackgroundSnowflakes
        snowflakes={[
          {
            snowflakeParams: {
              width: 173,
              height: 168,
              left: 41,
              top: 57,
              rotation: -30,
            },
            desktop: true,
            ipad: true,
          },
          {
            snowflakeParams: {
              width: 173,
              height: 168,
              right: 41,
              top: 57,
              rotation: -30,
            },
            desktop: true,
            ipad: true,
          },
          {
            snowflakeParams: {
              width: 69,
              height: 64,
              left: 20,
              bottom: 20,
              rotation: -30,
            },
            mobile: true,
          },
          {
            snowflakeParams: {
              width: 69,
              height: 64,
              right: 20,
              bottom: 20,
              rotation: -30,
            },
            mobile: true,
          },
        ]}
      />
    </main>
  );
}
