"use client";

import "./breadcrumbs.scss";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import composeClassName from "@src/helpers/compose-class-name";
import { breadcrumbFactory } from "./helpers/breadcrumb-factory";
import { getBreadcrumbs } from "./helpers/get-breadcrumbs";

export default function Breadcrumbs({ customClass }: { customClass?: string }) {
  const pathname = usePathname();
  const breadcrumbs = useMemo(() => getBreadcrumbs(pathname), [pathname]);
  return (
    breadcrumbs.length > 1 && (
      <div className={composeClassName("breadcrumbs", customClass)}>
        {breadcrumbs.map((breadcrumb, index, arr) => (
          <React.Fragment key={index}>
            {breadcrumbFactory({
              breadcrumb,
              isFirst: index === 0,
              isLast: index === arr.length - 1,
            })}
          </React.Fragment>
        ))}
      </div>
    )
  );
}
