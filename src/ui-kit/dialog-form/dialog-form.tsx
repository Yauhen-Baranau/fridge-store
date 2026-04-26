"use client";

import Image from "@ui-kit/static-image/static-image";
import Form from "../form/form";
import styles from "./dialog-form.module.scss";
import { useDialog } from "@contexts/dialog/dialog-context";
import WeWillCallYouBack from "@ui-kit/we-will-call-you-back/we-will-call-you-back";
import useResponsive from "@hooks/use-responsive";
import { getFieldConfigs } from "./helpers/get-field-configs";
import { Body, useApi } from "@hooks/useApi";
import Sorry from "@ui-kit/sorry/sorry";
import { useEffect } from "react";


export default function DialogForm({
  type = "call-me-back",
}: {
  type?: "call-me-back" | "i-have-a-question";
}) {
  const { setDialogContent } = useDialog();
  const { isMobile } = useResponsive();
  const { request, error, success } = useApi();

  useEffect(() => {
    if (error) {
      setDialogContent(<Sorry />);
    }
    if (success) {
      setDialogContent(<WeWillCallYouBack />);
    }
  }, [success, error]);

  const handleClick = async <T,>(formValue: T): Promise<void> => {
    await request(formValue as Body);
  };

  // if (loading) {
  //   return  <div className="lds-hourglass"></div>
  // }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Закажите бесплатный звонок сейчас</h1>
      {!isMobile && (
        <div className={styles["image-wrapper"]}>
          <Image
            className={styles.image}
            src="/dialog-form-photo.webp"
            fill
            alt="Специалист по ремонту холодильников"
          />
        </div>
      )}
      <Form
        customClass={styles.form}
        preFieldsContent={
          <p className={styles["pre-field-text"]}>
            Оставьте контактный телефон и в ближайшее время с вами свяжется наш
            специалист
          </p>
        }
        // preSubmitButtonContent={
        //   <p className={styles["pre-submit-text"]}>
        //     Нажимая на кнопку «Жду звонка» Вы даете согласие на{" "}
        //     <span className={styles.blue}>обработку данных</span>
        //   </p>
        // }
        submitButtonText="Жду звонка"
        submitCallback={handleClick}
        config={{ fieldConfigs: getFieldConfigs(type) }}
      />

    </div>
  );
}
