"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import CallMeBackForm from "@ui-kit/call-me-back-form/call-me-back-form";
import List from "@ui-kit/list/list";
import useResponsive from "@hooks/use-responsive";
import { useDialog } from "@contexts/dialog/dialog-context";
import Button from "@ui-kit/button/button";
import DialogForm from "@ui-kit/dialog-form/dialog-form";
import { problemsListItemFactory } from "./helpers/problems-list-item-factory";
import { problems } from "./constants/problems";

export default function CommonFridgeProblemsPage() {
  const { isMobile } = useResponsive();
  const { showDialog } = useDialog();

  return (
    <main className={styles["common-fridge-problems"]}>
      <h1 className={styles.title}>Частые проблемы с&nbsp;холодильником</h1>
      <div className={styles["image-wrapper"]}>
        <Image
          className={styles.image}
          src="/water-bottles.webp"
          fill
          alt="Бутылки с водой"
        />
      </div>
      {!isMobile ? (
        <CallMeBackForm
          title="Не нашли решение своей проблемы?"
          submitButtonText="Вызвать мастера"
          customClass={styles["call-me-back-form"]}
        />
      ) : (
        <div className={styles["call-me-back-block"]}>
          <span className={styles["call-me-back-text"]}>
            Не нашли решение своей проблемы?
          </span>
          <Button
            customClass={styles["call-me-back-button"]}
            text="Вызвать мастера"
            onClick={() => showDialog(<DialogForm type="i-have-a-question" />)}
          />
        </div>
      )}

      <List
        customClass={styles["problems-list"]}
        items={problems.map((params) => problemsListItemFactory({ ...params, isMobile, styles }))}
      />
    </main>
  );
}
