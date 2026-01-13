import composeClassName from '@helpers/compose-class-name';
import { Breadcrumb as BreadcrumbInterface } from '../../interfaces/breadcrumb-interface';
import styles from './breadcrumb.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Breadcrumb({
  breadcrumb,
  hasHomeIcon = false,
  disabled = false,
  hasArrowIcon = true,
  light = true,
  limitLabelWidth = false,
}: {
  breadcrumb: BreadcrumbInterface;
  hasHomeIcon?: boolean;
  disabled?: boolean;
  hasArrowIcon?: boolean,
  light?: boolean,
  limitLabelWidth?: boolean,
}) {
  return (
    <Link
      className={composeClassName(styles.breadcrumb, disabled && "disabled")}
      href={breadcrumb.redirectTo}
      aria-disabled={disabled}
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
      <div className={composeClassName(
        styles["breadcrumb-label"],
        light && styles.light,
        limitLabelWidth && styles.limited,
      )}>{breadcrumb.label}</div>
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