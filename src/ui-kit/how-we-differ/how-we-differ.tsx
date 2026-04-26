import Image from "@ui-kit/static-image/static-image";
import styles from "./how-we-differ.module.scss";
import { differences } from "./constants/differences";
import React from "react";
import Difference from "./subcomponents/difference/difference";

export default function HowWeDiffer() {
  return (
    <section className={styles["how-we-differ"]}>
      <h2 className={styles.title}>Чем мы отличаемся от конкурентов?</h2>
      <div className={styles["image-wrapper"]}>
        <Image
          className={styles.image}
          src="/how-we-differ-photo.webp"
          fill
          alt="Специалист по ремонту холодильников"
        />
      </div>
      <div className={styles.differences}>
        {differences.map((params, index) => <Difference key={index} {...params} />)}
      </div>
    </section>
  );
}
