"use client";

import Button from "@ui-kit/button/button";
import styles from "./fridge-manufacturers.module.scss";
import React, { useMemo } from "react";
import composeClassName from "@src/helpers/compose-class-name";
import BackgroundSnowflake from "../background-snowflake/background-snowflake";
import useResponsive from "@hooks/use-responsive";
import Slider from "@ui-kit/slider/slider";
import { fridgeManufacturers } from "./constants/fridge-manufacturers";
import FridgeManufacturer from "./subcomponents/fridge-manufacturer/fridge-manufacturer";

export default function FridgeManufacturers({
  customClass,
}: {
  customClass?: string;
}) {
  const { isMobile } = useResponsive();

  const fridgeManufacturersJsxArray = useMemo(() => {
    return fridgeManufacturers.map((params, index) => <FridgeManufacturer
      key={index}
      {...params}
    />);
  }, []);

  return (
    <section
      className={composeClassName(styles["fridge-manufacturers"], customClass)}
    >
      <h1 className={styles["fridge-manufacturers-title"]}>
        Ремонтируем холодильники
        <br />
        всех производителей
      </h1>
      {!isMobile ? (
        <div className={styles["fridge-manufacturers-list"]}>
          {fridgeManufacturersJsxArray}
        </div>
      ) : (
        <Slider
          slides={fridgeManufacturersJsxArray}
          slidesGap={30}
        />
      )}
      <Button text="Смотреть все модели" style="text-only" />
      {!isMobile ? (
        <>
          <BackgroundSnowflake
            width={131}
            height={127}
            left={40}
            top={48}
            rotation={-30}
          />
          <BackgroundSnowflake
            width={131}
            height={127}
            right={40}
            top={48}
            rotation={-30}
          />
        </>
      ) : (
        <>
          <BackgroundSnowflake
            width={70}
            height={68}
            left={20}
            top={20}
            rotation={-30}
          />
          <BackgroundSnowflake
            width={70}
            height={68}
            right={20}
            top={20}
            rotation={-30}
          />
          <BackgroundSnowflake
            width={70}
            height={68}
            left={20}
            bottom={40}
            rotation={-30}
          />
          <BackgroundSnowflake
            width={70}
            height={68}
            right={20}
            bottom={40}
            rotation={-30}
          />
        </>
      )}
    </section>
  );
}
