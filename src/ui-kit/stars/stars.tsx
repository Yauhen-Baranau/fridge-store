import Image from "next/image";
import styles from "./stars.module.scss";
import composeClassName from "@helpers/compose-class-name";

export default function Stars({
  stars,
  maxStars = 5,
  customClass,
}: {
  stars: number;
  maxStars?: number;
  customClass?: string;
}) {
  stars = Math.round(Math.min(maxStars, Math.max(1, stars)));
  return (
    <div className={composeClassName(styles.stars, customClass)}>
      {new Array(stars).fill(null).map((_, index) => (
        <Image
          key={index}
          className={styles.star}
          src="/icons/golden-star.svg"
          width={17}
          height={16}
          alt="Звёздочка"
        />
      ))}
    </div>
  );
}
