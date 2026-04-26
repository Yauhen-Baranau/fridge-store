import Image from "next/image";
import Link from "@ui-kit/static-link/static-link";
import styles from './service.module.scss';

export default function Service({
  serviceHref,
  imagePath,
  label,
  price,
  dynamicPrice = true,
  priceComment,
  freeWithRepairs = false,
  requiredTime,
  guarantee,
}: {
  serviceHref: string;
  imagePath: string;
  label: string;
  price: number;
  dynamicPrice?: boolean;
  priceComment?: string;
  freeWithRepairs?: boolean;
  requiredTime?: string;
  guarantee?: string;
}) {
  return (
    <Link className={styles["service-link"]} href={serviceHref}>
      <div className={styles.service}>
        <div className={styles["service-image-wrapper"]}>
          <Image
            className={styles["service-image"]}
            src={imagePath}
            fill
            alt="Изображение услуги"
          />
        </div>
        <h3 className={styles["service-title"]}>{label}</h3>
        <p className={styles["price-block"]}>
          {dynamicPrice && (
            <span className={styles["dynamic-price-text"]}>от </span>
          )}
          <span className={styles.price}>{price} руб.</span>
          {priceComment && (
            <span className={styles["price-comment"]}> ({priceComment})</span>
          )}
          {freeWithRepairs && (
            <>
              <br />
              <span className={styles["free-with-repairs-text"]}>
                Бесплатно (при ремонте)
              </span>
            </>
          )}
        </p>
        <div className={styles["service-footer"]}>
          <div className={styles["service-footer-block"]}>
            <span className={styles["service-footer-block-title"]}>
              Время работы:
            </span>
            <span>{requiredTime}</span>
          </div>
          {guarantee && (
            <div className={styles["service-footer-block"]}>
              <span className={styles["service-footer-block-title"]}>
                Гарантия:
              </span>
              <span>{guarantee}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
