import Button from "@ui-kit/button/button";
import Image from "next/image";
import Link from "next/link";

export const fridgeManufacturerFactory = ({
  name,
  imagePath,
  styles,
}: {
  name: string;
  imagePath: string;
  styles: Record<string, string>;
}) => {
  return (
    <Link href="https://google.com">
      <div className={styles["fridge-manufacturer"]}>
        <Image
          src={imagePath}
          width={69}
          height={160}
          alt="Изображение холодильника"
        />
        <h3 className={styles["fridge-manufacturer-name"]}>{name}</h3>
        <Button
          customClass={styles["fridge-manufacturer-button"]}
          text="Узнать подробнее"
          style="monochrome"
        />
      </div>
    </Link>
  );
};
