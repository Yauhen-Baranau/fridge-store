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
        items={[
          {
            title: "ПРОБЛЕМЫ С ОХЛАЖДЕНИЕМ",
            items: [
              {
                title: "Не морозит",
                titleComment: "(морозильная камера не набирает температуру)",
                tell: "В морозильной камере температура выше нормы, продукты размораживаются.",
                cause:
                  "Утечка фреона, неисправность компрессора, засор капиллярной трубки, поломка термостата.",
              },
              {
                title: "Плохо морозит",
                titleComment: "(температура выше нормы)",
                tell: "Охлаждение слабее, чем должно быть, продукты портятся быстрее.",
                cause:
                  "Засор конденсатора, недостаток фреона, поломка терморегулятора, неисправность вентилятора.",
              },
              {
                title: "Перемораживает",
                titleComment:
                  "(основная камера или морозилка слишком холодные)",
                tell: "Температура ниже заданной, продукты замерзают даже в основной камере.",
                cause:
                  "Сбой в работе термостата, неисправность датчика температуры, неполадки в плате управления.",
              },
              {
                title: "Неравномерное охлаждение",
                titleComment: "(разные температуры в камерах)",
                tell: "В разных отделениях холодильника разная температура, может быть перегрев в одной зоне и переохлаждение в другой.",
                cause:
                  "Засор воздушных каналов, поломка вентилятора, неисправность системы No Frost.",
              },
              {
                title: "Покрывается льдом или снегом",
                titleComment: "(образуется наледь)",
                tell: "В морозильной или холодильной камере появляется слой льда или снега.",
                cause:
                  "Засор дренажа, неисправность нагревателя оттайки, износ уплотнителя двери.",
              },
              {
                title: "Основная камера не охлаждает",
                tell: "Морозильная камера работает, но в холодильном отделении температура слишком высокая.",
                cause:
                  "Поломка вентилятора, засор дренажа, неисправность датчиков температуры.",
              },
              {
                title: "Морозилка не охлаждает",
                tell: "Основная камера работает нормально, а морозильное отделение не замораживает.",
                cause:
                  "Утечка фреона, неисправность компрессора, проблемы с клапаном переключения.",
              },
            ],
          },
          {
            title: "ПРОБЛЕМЫ С РАБОТОЙ ХОЛОДИЛЬНИКА",
            items: [],
          },
          {
            title: "ШУМЫ И ПОСТОРОННИЕ ЗВУКИ",
            items: [],
          },
          {
            title: "ПРОБЛЕМЫ С УТЕЧКАМИ И ПРОТЕКАНИЕМ",
            items: [],
          },
          {
            title: "ПРОБЛЕМЫ С КОМПЛЕКТУЮЩИМИ",
            items: [],
          },
        ].map((params) =>
          problemsListItemFactory({ ...params, isMobile, styles }),
        )}
      />
    </main>
  );
}
