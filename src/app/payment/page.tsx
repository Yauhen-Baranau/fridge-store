"use client";

import CallMeBackForm from "@src/ui-kit/call-me-back-form/call-me-back-form";
import styles from "./page.module.scss";
import List from "@ui-kit/list/list";
import Image from "next/image";
import BackgroundSnowflake from "@src/ui-kit/background-snowflake/background-snowflake";
import useResponsive from "@hooks/use-responsive";
import Button from "@ui-kit/button/button";
import { useDialog } from "@contexts/dialog/dialog-context";
import DialogForm from "@ui-kit/dialog-form/dialog-form";
import { listItemContentFactory } from "./helpers/payment-page-list-item-content-factory";
import { advantages, paymentTypesListItems } from "./constants/payment-text-lists-items";

export default function PaymentPage() {
  const { isMobile } = useResponsive();
  const { showDialog } = useDialog();

  return (
    <main className={styles.payment}>
      <div className={styles.text}>
        <h1 className={styles.title}>Оплата</h1>
        <h2 className={styles.subtitle}>Способы оплаты</h2>
        <p className={styles.plaintext}>
          Мы предлагаем несколько удобных способов оплаты за услуги по ремонту
          холодильников — выбирайте тот, который подходит именно вам.
        </p>
        <List
          customClass={styles.list}
          items={paymentTypesListItems.map((params, index) => ({
            content: listItemContentFactory({ ...params, index, styles }),
          }))}
        />
        <h2 className={styles.subtitle}>Гарантии и честная оплата</h2>
        <p className={styles.plaintext}>
          Мы оказываем услуги по ремонту холодильников официально и прозрачно.
          Стоимость работ фиксируется ещё на этапе оформления заявки, и после
          выполнения вы получаете кассовый чек или необходимые документы для
          бухгалтерии — если вы представляете организацию.
        </p>
        <br />
        <p className={styles.plaintext}>
          Никаких скрытых доплат — итоговая сумма всегда соответствует
          предварительно согласованной. Если у вас появятся замечания по
          качеству работ, мы оперативно разберёмся в ситуации и предложим
          удобное решение: повторный выезд мастера или частичный возврат
          средств, если это потребуется.
        </p>
        <h2 className={styles.subtitle}>Почему нам доверяют</h2>
        <p className={styles.plaintext}>
          Мы предлагаем несколько удобных способов оплаты за услуги по ремонту
          холодильников — выбирайте тот, который подходит именно вам.
        </p>
        <List
          customClass={styles.list}
          items={advantages.map((params, index) => ({
            content: listItemContentFactory({ ...params, index, styles }),
          }))}
        />
      </div>
      {!isMobile ? (
        <CallMeBackForm customClass={styles["call-me-back-form"]} />
      ) : (
        <Button
          customClass={styles["call-me-back-button"]}
          text="Получить консультацию"
          onClick={() => showDialog(<DialogForm />)}
        />
      )}
      {!isMobile && (
        <>
          <BackgroundSnowflake
            width={613}
            height={595}
            right={40}
            bottom={785}
            rotation={-30}
            color="light-blue"
          />
          <BackgroundSnowflake
            width={341}
            height={331}
            right={40}
            bottom={785}
            rotation={-30}
            color="light-blue"
          />
        </>
      )}
    </main>
  );
}
