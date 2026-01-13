"use client";

import styles from "./breadcrumbs.module.scss";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { getBreadcrumbs } from "./helpers/get-breadcrumbs";
import Breadcrumb from "./subcomponents/breadcrumb/breadcrumb";
import useResponsive from "@hooks/use-responsive";

export default function Breadcrumbs() {
  const { isMobile } = useResponsive();
  const pathname = usePathname();
  const breadcrumbs = useMemo(() => getBreadcrumbs(pathname), [pathname]);

  return (
    breadcrumbs.length > 1 && (
      <div className={styles.breadcrumbs}>
        {breadcrumbs.map((breadcrumb, index, arr) => {
          const isFirst = index === 0;
          const isLast = index === arr.length - 1;
          return <Breadcrumb
            key={index}
            breadcrumb={breadcrumb}
            hasHomeIcon={isFirst}
            disabled={isLast}
            hasArrowIcon={!isLast}
            light={!isLast}
            limitLabelWidth={isMobile && arr.length > 2}
          />
        })}
      </div>
    )
  );
}
