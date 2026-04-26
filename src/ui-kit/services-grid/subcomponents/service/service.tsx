import Button from "@ui-kit/button/button";
import Link from "@ui-kit/static-link/static-link";
import { Service as ServiceInterface } from "../../interfaces/service";
import styles from './service.module.scss';
import Image from "@ui-kit/static-image/static-image";

export default function Service({
  serviceData
}: {
  serviceData: ServiceInterface
}) {
  return <div className={styles.service}>
    <div className={styles["service-image-wrapper"]}>
      <Image
        className={styles["service-image"]}
        src={serviceData.imagePath}
        fill
        alt="Изображение услуги"
      />
    </div>
    <h4 className={styles["service-label"]}>{serviceData.label}</h4>
    {serviceData.price && (
      <span className={styles["with-parts"]}>С учетом запчастей</span>
    )}
    <div className={styles["service-footer"]}>
      {serviceData.price && (
        <span className={styles.price}>от {serviceData.price} руб.</span>
      )}
      <Link
        className={styles["service-learn-more"]}
        href={serviceData.redirectTo}
      >
        <Button
          customClass={styles["service-learn-more-button"]}
          text="Подробнее"
          style="text-only"
        />
      </Link>
    </div>
  </div>
}