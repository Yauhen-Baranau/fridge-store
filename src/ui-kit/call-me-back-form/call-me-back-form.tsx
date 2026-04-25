"use client";

import composeClassName from "@src/helpers/compose-class-name";
import Form from "../form/form";
import styles from "./call-me-back-form.module.scss";
import { Validators } from "../form/validators";
import { useDialog } from "@contexts/dialog/dialog-context";
import WeWillCallYouBack from "@ui-kit/we-will-call-you-back/we-will-call-you-back";
import { validationRegexes } from "@constants/validation-regexes";
import { Body, useApi } from "@hooks/useApi";
import { useEffect } from "react";
import Sorry from "@ui-kit/sorry/sorry";

export default function CallMeBackForm({
  title = "Оформить заказ",
  submitButtonText = "Получить консультацию",
  customClass,
}: {
  title?: string;
  submitButtonText?: string;
  customClass?: string;
}) {
  const { showDialog } = useDialog();

  const { request, error, success } = useApi();

  useEffect(() => {
    if (error) {
      showDialog(<Sorry />);
    }
    if (success) {
      showDialog(<WeWillCallYouBack />);
    }
  }, [success, error]);

  const handleClick = async <T,>(formValue: T): Promise<void> => {
    await request(formValue as Body);
  };

  return (
    <Form
      customClass={composeClassName(styles.form, customClass)}
      preFieldsContent={
        <>
          <h3 className={styles["form-title"]}>{title}</h3>
          <p className={styles["form-subtitle"]}>
            Оставьте заявку на оформление заказа и&nbsp;мы Вам перезвоним в
            ближайшее время
          </p>
        </>
      }
      // preSubmitButtonContent={
      //   <p className={styles["privacy-policy-notice"]}>
      //     Нажимая на кнопку &quot;Отправить&quot; Вы даете согласие на{" "}
      //     <span className={styles.blue}>обработку данных</span>
      //   </p>
      // }
      config={{
        fieldConfigs: [
          {
            type: "text",
            name: "name",
            placeholder: "Имя",
            validators: [
              Validators.required,
              Validators.minLength(3),
              Validators.pattern(validationRegexes.name),
            ],
          },
          {
            type: "tel",
            name: "phone",
            placeholder: "Телефон",
            validators: [
              Validators.required,
              Validators.pattern(validationRegexes.phone),
            ],
          },
        ],
      }}
      submitButtonText={submitButtonText}
      submitCallback={handleClick}
    />
  );
}
