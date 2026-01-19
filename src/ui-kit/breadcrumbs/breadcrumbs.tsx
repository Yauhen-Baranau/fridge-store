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
      <div className={styles.breadcrumbs} itemScope itemType='https://schema.org/BreadcrumbList'>
        {!isMobile
          ? breadcrumbs.map((breadcrumb, index, arr) => {
            const isFirst = index === 0;
            const isLast = index === arr.length - 1;
            return <Breadcrumb
              key={index}
              breadcrumb={breadcrumb}
              hasHomeIcon={isFirst}
              disabled={isLast}
              hasArrowIcon={!isLast}
              light={!isLast}
            />
          })
          : <>
            <Breadcrumb breadcrumb={breadcrumbs[0]} hasHomeIcon={true} />
            {breadcrumbs.length > 2 && <Breadcrumb breadcrumb={{ label: '...', redirectTo: '/' }} disabled={true} />}
            {breadcrumbs.length > 1 && <Breadcrumb breadcrumb={breadcrumbs.at(-1)!} hasArrowIcon={false} disabled={true} light={false} limitWidth={breadcrumbs.length > 2} />}
          </>}
      </div>
    )
  );
}
