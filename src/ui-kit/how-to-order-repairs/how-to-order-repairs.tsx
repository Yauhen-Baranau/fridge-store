import composeClassName from "@src/helpers/compose-class-name";
import styles from "./how-to-order-repairs.module.scss";
import { orderRepairsSteps } from "./constants/order-repairs-steps";
import Step from "./subcomponents/step/step";
import BackgroundSnowflakes from "@ui-kit/background-snowflakes/background-snowflakes";

export default function HowToOrderRepairs({
  customClass,
}: {
  customClass?: string;
}) {
  return (
    <section
      className={composeClassName(styles["how-to-order-repairs"], customClass)}
    >
      <h2 className={styles.title}>Как заказать ремонт?</h2>
      <div className={styles.steps}>
        {orderRepairsSteps.map((params, index, arr) => (
          <Step
            key={index}
            {...params}
            stepNumber={index + 1}
            hasRightArrow={index < arr.length - 1}
          />
        ))}
      </div>
      <BackgroundSnowflakes snowflakes={[
          {
            snowflakeParams: { width: 153, height: 148, left: 22, top: 20, rotation: -30, color: "main-white" },
            desktop: true,
            ipad: true,
          },
          {
            snowflakeParams: { width: 153, height: 148, right: 22, top: 20, rotation: -30, color: "main-white" },
            desktop: true,
            ipad: true,
          },
          {
            snowflakeParams: { width: 60, height: 58, left: 15, top: 25, rotation: -30, color: "main-white" },
            mobile: true,
          },
          {
            snowflakeParams: { width: 60, height: 58, right: 0, rotation: -30, color: "main-white", customClass: styles["background-snowflake-2"] },
            mobile: true,
          },
          {
            snowflakeParams: { width: 60, height: 58, left: 10, rotation: -30, color: "main-white", customClass: styles["background-snowflake-3"] },
            mobile: true,
          },
          {
            snowflakeParams: { width: 60, height: 58, right: 15, bottom: 25, rotation: -30, color: "main-white" },
            mobile: true,
          },
      ]} />
    </section>
  );
}
