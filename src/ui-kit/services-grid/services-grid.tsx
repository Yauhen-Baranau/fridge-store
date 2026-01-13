"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./services-grid.module.scss";
import Button from "../button/button";
import useResponsive from "@hooks/use-responsive";
import { Service as ServiceInterface } from "./interfaces/service";
import Service from "./subcomponents/service/service";

export default function ServicesGrid({
  services,
  unexpandedServiceLimit = 6,
  unexpandedServiceLimitMobile = 3,
}: {
  services: Array<ServiceInterface>;
  unexpandedServiceLimit?: number;
  unexpandedServiceLimitMobile?: number;
}) {
  const { isMobile } = useResponsive();

  const [allExpanded, setAllExpanded] = useState(false);

  useEffect(() => {
    if (allExpanded) {
      return;
    }
    if (
      services.length <=
      (isMobile ? unexpandedServiceLimitMobile : unexpandedServiceLimit)
    ) {
      setAllExpanded(true);
      return;
    }
    setAllExpanded(false);
  }, [allExpanded, isMobile]);

  const servicesToDisplay = useMemo(() => {
    if (allExpanded) {
      return services.slice();
    }

    if (isMobile) {
      return services.slice(0, unexpandedServiceLimitMobile);
    }

    return services.slice(0, unexpandedServiceLimit);
  }, [allExpanded, isMobile]);

  return (
    <div className={styles["services-grid"]}>
      {servicesToDisplay.map((service, index) => <Service key={index} serviceData={service} />)}
      {!allExpanded && (
        <Button
          customClass={styles["view-all-services-button"]}
          text="Смотреть все услуги"
          style="text-only"
          onClick={() => setAllExpanded(true)}
        />
      )}
    </div>
  );
}
