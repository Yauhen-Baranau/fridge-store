import Button from "@ui-kit/button/button";
import DialogForm from "@ui-kit/dialog-form/dialog-form";
import List from "@ui-kit/list/list";
import React from "react";
import { Service } from "../../service-interface";
import styles from './service-description.module.scss';
import useResponsive from "@hooks/use-responsive";
import { useDialog } from "@contexts/dialog/dialog-context";
import Image from "@ui-kit/static-image/static-image";

export default function ServiceDescription({
  serviceData
}: {
  serviceData: Service
}) {
  const { isMobile } = useResponsive();
  const { showDialog } = useDialog();

  return (
    <div className={styles["description-wrapper"]}>
      <h1 className={styles["description-title"]}>{serviceData.label}</h1>
      {serviceData.price && (
        <div className={styles["description-price-block"]}>
          <p className={styles["description-price"]}>
            от {serviceData.price} руб.
          </p>
          <p className={styles["with-parts"]}>
            Цена указана с учетом новых запчастей
          </p>
        </div>
      )}
      <div className={styles.description}>
        {serviceData.description.map((descriptionItem, index) => {
          let descriptionItemContent;
          switch (descriptionItem.type) {
            case "paragraph":
              descriptionItemContent = (
                <p className={styles["description-text"]}>
                  {descriptionItem.content}
                </p>
              );
              break;
            case "list":
              descriptionItemContent = (
                <>
                  <h3 className={styles["description-list-title"]}>
                    {descriptionItem.title}
                  </h3>
                  <List
                    customClass={styles["description-list"]}
                    items={descriptionItem.items.map((item) => ({
                      content: item,
                      icon: {
                        path: "/icons/square-small-blue.svg",
                        width: 10,
                        height: 10,
                      },
                    }))}
                  />
                </>
              );
              break;
            default:
              descriptionItemContent = <></>;
              break;
          }
          return (
            <React.Fragment key={index}>
              {descriptionItemContent}
            </React.Fragment>
          );
        })}
        {isMobile && (
          <Button
            customClass={styles["call-me-back-button"]}
            text="Получить консультацию"
            onClick={() => showDialog(<DialogForm />)}
          />
        )}
        <div className={styles["description-image-wrapper"]}>
          <Image
            className={styles["description-image"]}
            src={serviceData.imagePath}
            fill
            alt="Изображение категории или услуги"
          />
        </div>
      </div>
    </div>
  );
}