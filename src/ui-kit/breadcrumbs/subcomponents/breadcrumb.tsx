import composeClassName from '@helpers/compose-class-name';
import { Breadcrumb as BreadcrumbInterface } from '../interfaces/breadcrumb-interface';
import styles from './breadcrumb.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Breadcrumb({
  breadcrumb,
  isFirst = false,
  isLast = false,
}: {
  breadcrumb: BreadcrumbInterface;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  return (
    <Link
      className={composeClassName(styles.breadcrumb, isLast && "disabled")}
      href={breadcrumb.redirectTo}
      aria-disabled={isLast}
    >
      {isFirst && (
        <Image
          className={styles["breadcrumb-arrow-icon"]}
          src="/icons/home.svg"
          width={16}
          height={16}
          alt="Дом"
        />
      )}
      <span className={styles["breadcrumb-label"]}>{breadcrumb.label}</span>
      {!isLast && (
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