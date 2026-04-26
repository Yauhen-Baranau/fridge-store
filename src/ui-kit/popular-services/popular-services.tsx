"use client";

import styles from "./popular-services.module.scss";
import Button from "@ui-kit/button/button";
import Link from "@ui-kit/static-link/static-link";
import { useHrefHelper } from "@contexts/href/href-context";
import { Routes } from "@constants/routes";
import { useCategoryData } from "@contexts/category-data/category-data-context";
import useResponsive from "@hooks/use-responsive";
import Slider from "@ui-kit/slider/slider";
import composeClassName from "@helpers/compose-class-name";
import Service from "./subcomponents/service/service";
import { useMemo } from "react";
import BackgroundSnowflakes from "@ui-kit/background-snowflakes/background-snowflakes";

export default function PopularServices() {
  const { getServiceById, getFreeWithRepairsServiceIds, getServiceWithPriceIncludingPartsIds, getPopularServiceIds } = useCategoryData();
  const { getPageHref, getServiceHref } = useHrefHelper();
  const { isDesktop, isMobile } = useResponsive();

  const services = useMemo(() => {
    return getPopularServiceIds()
      .slice(0, isDesktop ? 9 : 6)
      .map((id, index) => {
        const serviceData = getServiceById(id);
        return (
          serviceData && (
            <Service
              key={index}
              {...serviceData}
              serviceHref={getServiceHref(serviceData.id)}
              freeWithRepairs={getFreeWithRepairsServiceIds().includes(id)}
              priceComment={getServiceWithPriceIncludingPartsIds().includes(id)
                ? "включая запчасти"
                : ""}
            />
          )
        );
      });
  }, []);

  return (
    <section className={styles["popular-services"]}>
      <h2 className={styles["popular-services-title"]}>Популярные услуги</h2>
      {isMobile ? (
        <Slider
          customClass={composeClassName(styles["services-slider"])}
          slides={services}
          slidesGap={30}
        />
      ) : (
        <div className={styles["services-list"]}>{services}</div>
      )}
      <Link href={getPageHref(Routes.Prices)}>
        <Button text="Смотреть все услуги" style="text-only" />
      </Link>
      <BackgroundSnowflakes snowflakes={[
        {
          snowflakeParams: { width: 658, height: 638, left: 0, top: 94, rotation: -30, color: "main-white", opacity: 0.4, zIndex: -1 },
          desktop: true,
          ipad: true,
        },
        {
          snowflakeParams: { width: 658, height: 638, right: 33, bottom: 222, rotation: -30, color: "main-white", opacity: 0.4, zIndex: -1 },
          desktop: true,
          ipad: true,
        },
        {
          snowflakeParams: { width: 69, height: 64, left: 25, bottom: 25, rotation: -30, color: "main-white", zIndex: -1 },
          mobile: true,
        },
        {
          snowflakeParams: { width: 69, height: 64, right: 25, bottom: 25, rotation: -30, color: "main-white", zIndex: -1 },
          mobile: true,
        },
      ]} />
    </section>
  );
}
