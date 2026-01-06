import Image from "next/image";

export const stepFactory = ({
  stepNumber,
  iconPath,
  description,
  hasRightArrow = true,
  isIpad,
  styles,
}: {
  stepNumber: number;
  iconPath: string;
  description: string;
  hasRightArrow?: boolean;
  isIpad: boolean;
  styles: Record<string, string>;
}) => {
  return (
    <>
      <div className={styles.step}>
        <h6 className={styles["step-title"]}>{stepNumber} шаг</h6>
        <div className={styles["step-icon-wrapper"]}>
          <Image
            className={styles["step-icon"]}
            src={iconPath}
            fill
            alt="Иконка"
          />
        </div>
        <p className={styles["step-description"]}>{description}</p>
      </div>
      {!isIpad && hasRightArrow && (
        <Image
          className={styles["arrow-right-icon"]}
          src="/icons/arrow-right.svg"
          width={44}
          height={44}
          alt="Стрелка вправо"
        />
      )}
    </>
  );
};
