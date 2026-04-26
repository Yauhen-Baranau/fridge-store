import useResponsive from "@hooks/use-responsive";
import Image from "@ui-kit/static-image/static-image";
import Link from "@ui-kit/static-link/static-link";
import { useMemo } from "react";
import { mapImageDimensions } from "../constants/map-image-dimensions";
import styles from './map.module.scss';

export default function Map() {
  const { isDesktop } = useResponsive();

  const mapImageResponsiveDimensions = useMemo(() => {
    return isDesktop
      ? mapImageDimensions.desktop
      : mapImageDimensions.nonDesktop;
  }, [isDesktop]);
  return <Link
    className={styles["map-wrapper"]}
    href="https://yandex.ru/maps/?um=constructor%3A6eb3d94e38002a26f66989cd354380fc22994b47206e36ed20eb07ff6d5d20d7&amp;source=constructorStatic"
    target="_blank"
  >
    <Image
      className={styles.map}
      src={`https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A6eb3d94e38002a26f66989cd354380fc22994b47206e36ed20eb07ff6d5d20d7&amp;width=${mapImageResponsiveDimensions.width}&amp;height=${mapImageResponsiveDimensions.height}&amp;lang=ru_RU`}
      fill
      alt="Карта"
    />
  </Link>
}