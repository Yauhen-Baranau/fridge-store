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
  const mobileBreadcrumbs = useMemo(() => {
    const firstBreadcrumb = breadcrumbs[0];
    const lastBreadcrumb = breadcrumbs.at(-1);

    return [
      { breadcrumb: firstBreadcrumb, index: 0, hasHomeIcon: true, hasArrowIcon: true, disabled: false, light: true },
      ...(breadcrumbs.length > 2
        ? [{ breadcrumb: { label: '...', redirectTo: '/' }, index: -1, disabled: true, hasArrowIcon: true, light: true }]
        : []),
      ...(lastBreadcrumb
        ? [{
          breadcrumb: lastBreadcrumb,
          index: breadcrumbs.length - 1,
          hasArrowIcon: false,
          disabled: true,
          light: false,
          limitWidth: breadcrumbs.length > 2
        }]
        : []),
    ];
  }, [breadcrumbs]);

  return (
    breadcrumbs.length > 1 && (
      <div className={styles.breadcrumbs} itemScope itemType='https://schema.org/BreadcrumbList'>
        {!isMobile
          ? breadcrumbs.map((breadcrumb, index, arr) => {
            const isFirst = index === 0;
            const isLast = index === arr.length - 1;
            return (
              <div key={index} itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
                <Breadcrumb
                  breadcrumb={breadcrumb}
                  position={index}
                  hasHomeIcon={isFirst}
                  disabled={isLast}
                  hasArrowIcon={!isLast}
                  light={!isLast}
                />
              </div>
            );
          })
          : <>
            {mobileBreadcrumbs.map(({ breadcrumb, index, ...rest }, viewIndex) => (
              index >= 0 ? (
                <div key={viewIndex} itemProp='itemListElement' itemScope itemType='https://schema.org/ListItem'>
                  <Breadcrumb breadcrumb={breadcrumb} position={index} {...rest} />
                </div>
              ) : (
                <Breadcrumb key={viewIndex} breadcrumb={breadcrumb} {...rest} />
              )
            ))}
          </>}
      </div>
    )
  );
}
