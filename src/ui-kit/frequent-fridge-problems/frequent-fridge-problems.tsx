"use client";

import Image from "@ui-kit/static-image/static-image";
import styles from "./frequent-fridge-problems.module.scss";
import Button from "../button/button";
import composeClassName from "@src/helpers/compose-class-name";
import Link from "@ui-kit/static-link/static-link";
import { useDialog } from "@contexts/dialog/dialog-context";
import DialogForm from "@ui-kit/dialog-form/dialog-form";
import { Routes } from "@constants/routes";
import { problems } from "./constants/problems";
import FrequentFridgeProblem from "./subcomponents/frequent-fridge-problem";
import { useHrefHelper } from "@contexts/href/href-context";

export default function FrequentFridgeProblems({
  customClass,
}: {
  customClass?: string;
}) {
  const { showDialog } = useDialog();
  const { getPageHref } = useHrefHelper();

  return (
    <section
      className={composeClassName(
        styles["frequent-fridge-problems"],
        customClass,
      )}
    >
      <h2 className={styles.title}>Частые проблемы с холодильником</h2>
      <div className={styles["left-content"]}>
        <div className={styles["image-container"]}>
          <Image
            className={styles.image}
            src="/water-bottles.webp"
            alt="Бутылки с водой"
            fill={true}
          />
        </div>
        <span className={styles["call-me-back-text"]}>
          Не нашли решение своей проблемы?
        </span>
        <Button
          customClass={styles["call-me-back-button"]}
          text="Вызвать мастера"
          onClick={() => showDialog(<DialogForm type="i-have-a-question" />)}
        />
      </div>
      <div className={styles["right-content"]}>
        {problems.map((frequentProblemData, index) => <FrequentFridgeProblem
          key={index}
          label={frequentProblemData.label}
          redirectTo={frequentProblemData.redirectTo}
        />)}
        <Link href={getPageHref(Routes.CommonFridgeProblems)}>
          <Button
            customClass={styles["view-all-problems-button"]}
            text="Смотреть все проблемы"
            style="text-only"
          />
        </Link>
      </div>
    </section>
  );
}
