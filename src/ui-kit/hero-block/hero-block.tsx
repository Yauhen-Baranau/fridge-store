"use client";

import List from "@ui-kit/list/list";
import styles from "./hero-block.module.scss";
import Button from "@ui-kit/button/button";
import Image from "next/image";
import { useDialog } from "@contexts/dialog/dialog-context";
import DialogForm from "@ui-kit/dialog-form/dialog-form";
import useResponsive from "@hooks/use-responsive";
import { contactInfo } from "@constants/contact-info";

export default function HeroBlock() {
  const { showDialog } = useDialog();
  const { isMobile } = useResponsive();

  return (
    <section className={styles["hero-block"]}>
      {isMobile && (
        <div className={styles["open-hours"]}>
          <Image src="/icons/clock.svg" width={24} height={24} alt="Часы" />
          {contactInfo.openHours}
        </div>
      )}
      <div className={styles["hero-block-left"]}>
        <h1 className={styles.title}>
          РЕМОНТ &nbsp;&nbsp;
          <span className={styles["in-minsk"]}>в Минске</span>
          <br />
          ХОЛОДИЛЬНИКОВ
        </h1>
        <List
          customClass={styles.guarantees}
          items={[
            {
              content: (
                <span>
                  Гарантия до <b>12 месяцев</b>
                </span>
              ),
              icon: {
                path: "/icons/circle.svg",
                width: 7,
                height: 7,
              },
            },
            {
              content: (
                <span>
                  <b>Любой</b> ремонт холодильников на&nbsp;дому
                </span>
              ),
              icon: {
                path: "/icons/circle.svg",
                width: 7,
                height: 7,
              },
            },
            {
              content: (
                <span>
                  Озвучиваем цену <b>ДО</b> начала ремонта
                </span>
              ),
              icon: {
                path: "/icons/circle.svg",
                width: 7,
                height: 7,
              },
            },
          ]}
        />
        <Button
          customClass={styles["discount-button"]}
          text="Получить скидку 10%"
          onClick={() => showDialog(<DialogForm />)}
        />
        <p className={styles.note}>
          * &nbsp;Запишись сейчас на диагностику холодильника
          <br />
          <span className={styles["aligner"]}>* &nbsp;</span>и получи скидку 10%
          на ремонт
        </p>
      </div>
      <div className={styles["hero-block-right"]}>
        <Image
          className={styles.image}
          src="/hero-block-photo.webp"
          fill
          alt="Специалист по ремонту холодильников"
        />
      </div>
    </section>
  );
}
