"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from "./services-grid.module.scss";
import Image from "next/image";
import Button from "../button/button";
import Link from "next/link";
import useResponsive from "@hooks/use-responsive";

interface Service {
  imagePath: string;
  label: string;
  price?: number;
  redirectTo: string;
}

export default function ServicesGrid({
  services,
  unexpandedServiceLimit = 6,
  unexpandedServiceLimitMobile = 3,
}: {
  services: Array<Service>;
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
      {servicesToDisplay.map((service, index) => (
        <React.Fragment key={index}>
          <div className={styles.service}>
            <div className={styles["service-image-wrapper"]}>
              <Image
                className={styles["service-image"]}
                src={service.imagePath}
                fill
                alt="Изображение услуги"
              />
            </div>
            <h4 className={styles["service-label"]}>{service.label}</h4>
            {service.price && (
              <span className={styles["with-parts"]}>С учетом запчастей</span>
            )}
            <div className={styles["service-footer"]}>
              {service.price && (
                <span className={styles.price}>от {service.price} руб.</span>
              )}
              <Link
                className={styles["service-learn-more"]}
                href={service.redirectTo}
              >
                <Button
                  customClass={styles["service-learn-more-button"]}
                  text="Подробнее"
                  style="text-only"
                />
              </Link>
            </div>
          </div>
        </React.Fragment>
      ))}
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
