"use client";

import styles from "./main-advantages.module.scss";
import { advantages } from "./constants/advantages";
import Advantage from "./subcomponents/advantage/advantage";
import BackgroundSnowflakes from "@ui-kit/background-snowflakes/background-snowflakes";

export default function MainAdvantages() {
  return (
    <section className={styles["main-advantages"]}>
      <h1 className={styles.title}>
        Основные преимущества <br />
        нашей компании
      </h1>
      <div className={styles["advantages-block"]}>
        {advantages.map((params, index) => <Advantage key={index} {...params} />)}
      </div>
      <BackgroundSnowflakes snowflakes={[
        {
          snowflakeParams: { width: 131, height: 127, left: 40, top: 48, rotation: -30 },
          desktop: true,
          ipad: true
        },
        {
          snowflakeParams: { width: 131, height: 127, right: 40, top: 48, rotation: -30 },
          desktop: true,
          ipad: true
        },
        {
          snowflakeParams: { width: 69, height: 64, left: 20, top: 20, rotation: -30 },
          mobile: true,
        },
        {
          snowflakeParams: { width: 69, height: 64, right: 20, top: 20, rotation: -30 },
          mobile: true,
        },
      ]} />
    </section>
  );
}
