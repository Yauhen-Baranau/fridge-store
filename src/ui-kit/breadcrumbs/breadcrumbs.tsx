"use client";

import styles from "./breadcrumbs.module.scss";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { getBreadcrumbs } from "./helpers/get-breadcrumbs";
import Breadcrumb from "./subcomponents/breadcrumb";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const breadcrumbs = useMemo(() => getBreadcrumbs(pathname), [pathname]);
  return (
    breadcrumbs.length > 1 && (
      <div className={styles.breadcrumbs}>
        {breadcrumbs.map((breadcrumb, index, arr) => (
          <Breadcrumb
            key={index}
            breadcrumb={breadcrumb}
            isFirst={index === 0}
            isLast={index === arr.length - 1}
          />
        ))}
      </div>
    )
  );
}
