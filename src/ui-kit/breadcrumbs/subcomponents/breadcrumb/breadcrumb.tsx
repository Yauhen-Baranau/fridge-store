import composeClassName from '@helpers/compose-class-name';
import { Breadcrumb as BreadcrumbInterface } from '../../interfaces/breadcrumb-interface';
import styles from './breadcrumb.module.scss';
import Link from '@ui-kit/static-link/static-link';
import Image from '@ui-kit/static-image/static-image';

export default function Breadcrumb({
  breadcrumb,
  position,
  hasHomeIcon = false,
  disabled = false,
  hasArrowIcon = true,
  light = true,
  limitWidth = false,
}: {
  breadcrumb: BreadcrumbInterface;
  position?: number;
  hasHomeIcon?: boolean;
  disabled?: boolean;
  hasArrowIcon?: boolean,
  light?: boolean,
  limitWidth?: boolean,
}) {
  return (
    <Link
      className={composeClassName(styles.breadcrumb, disabled && styles.disabled, limitWidth && styles.limited)}
      href={breadcrumb.redirectTo}
      aria-disabled={disabled}
      itemProp={typeof position === "number" ? "item" : undefined}
    >
      {hasHomeIcon && (
        <Image
          className={styles["breadcrumb-home-icon"]}
          src="/icons/home.svg"
          width={16}
          height={16}
          alt="Дом"
        />
      )}
      <div
        className={composeClassName(
        styles["breadcrumb-label"],
        light && styles.light
      )}
        itemProp={typeof position === "number" ? "name" : undefined}
      >{breadcrumb.label}</div>
      {typeof position === "number" && <meta itemProp="position" content={`${position + 1}`} />}
      {hasArrowIcon && (
        <Image
          className={styles["breadcrumb-arrow-icon"]}
          src="/icons/narrow-arrow-right.svg"
          width={24}
          height={24}
          alt="Стрелка"
        />
      )}
    </Link>
  );
};
