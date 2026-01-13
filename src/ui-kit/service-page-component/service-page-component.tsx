"use client";

import React from "react";
import styles from "./service-page-component.module.scss";
import ServicesGrid from "../services-grid/services-grid";
import CallMeBackForm from "../call-me-back-form/call-me-back-form";
import useResponsive from "@hooks/use-responsive";
import { Service } from "./service-interface";
import ServiceDescription from "./subcomponents/service-description/service-description";

export default function ServicePageComponent({
  service,
  subservices,
  preServiceGridContent,
}: {
  service: Service;
  subservices: Array<Service & { redirectTo: string }>;
  preServiceGridContent?: React.ReactNode;
}) {
  const { isMobile } = useResponsive();

  return (
    <div className={styles.service}>
      {service && <ServiceDescription serviceData={service} />}
      {!isMobile && <CallMeBackForm customClass={styles["call-me-back-form"]} />}
      <div className={styles["content-wrapper"]}>
        {preServiceGridContent}
        <ServicesGrid services={subservices} />
      </div>
    </div>
  );
}
