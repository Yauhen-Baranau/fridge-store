import { Service, Subcategory } from "@contexts/category-data/types/interfaces";
import composeClassName from "@helpers/compose-class-name";
import Accordion from "@ui-kit/accordion/accordion";
import BackgroundSnowflake from "@ui-kit/background-snowflake/background-snowflake";
import Image from "next/image";

export const getSubcategoryAccordion = ({
  subcategory,
  subcategoryServices,
  diagnosticsServiceId,
  isMobile,
  styles,
}: {
  subcategory: Subcategory;
  subcategoryServices: Array<Service> | null;
  diagnosticsServiceId: string;
  isMobile: boolean;
  styles: Record<string, string>;
}) => {
  return (
    <Accordion
      toggleAreaCustomClass={styles["subcategory-price-accordion-toggle-area"]}
      toggleAreaContent={
        <h3 className={styles["subcategory-price-accordion-toggle-area-label"]}>
          {subcategory.label}
        </h3>
      }
      contentWrapperCustomClass={
        styles["subcategory-price-accordion-content-wrapper"]
      }
      content={
        <>
          {!isMobile && (
            <Image
              className={styles["subcategory-image"]}
              src={subcategory.imagePath}
              width={246}
              height={160}
              alt="Изображение подкатегории услуг"
            />
          )}
          <div className={styles["subcategory-service-list"]}>
            {subcategoryServices?.map((service) => (
              <div key={service.id} className={styles["subcategory-service"]}>
                <span className={styles["subcategory-service-label"]}>
                  {service.label}
                </span>
                <span className={styles["subcategory-service-price"]}>
                  от {service.price} руб.
                </span>
                {service.id === diagnosticsServiceId && (
                  <>
                    <span
                      className={composeClassName(
                        styles["subcategory-service-label"],
                        styles["diagnostics-note-label"],
                      )}
                    >
                      При выполнении ремонта
                    </span>
                    <span
                      className={composeClassName(
                        styles["subcategory-service-price"],
                        styles["diagnostics-note-free"],
                      )}
                    >
                      Бесплатно
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
          {!isMobile && (
            <BackgroundSnowflake
              width={247}
              height={239}
              left={67}
              bottom={84}
              rotation={-30}
              color="light-gray"
            />
          )}
        </>
      }
    />
  );
};
